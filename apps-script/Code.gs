/**
 * 準1級 面接ルーム — 採点サーバー（Google Apps Script）
 * ------------------------------------------------------------
 * ・アプリから届いた回答を Gemini API で採点して返します
 * ・結果を、このスクリプトを作ったスプレッドシートの「記録」シートに1行ずつ残します
 * ・APIキーはスクリプト プロパティに保存するので、生徒からは見えません
 *
 * 【スクリプト プロパティ】（プロジェクトの設定 → スクリプト プロパティ）
 *   GEMINI_API_KEY : Google AI Studio で発行したAPIキー（必須）
 *   GEMINI_MODEL   : 使うモデル（省略時 gemini-3.8-flash）
 *
 * 同じプロジェクトに「Prompt.gs」を作り、prompt.js の中身をそのまま貼り付けてください。
 */

var DEFAULT_MODEL = 'gemini-3.8-flash';
var SHEET_NAME = '記録';

function doGet() {
  var key = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  return json_({ ok: !!key, model: model_(), error: key ? null : 'GEMINI_API_KEY が未設定です' });
}

function doPost(e) {
  try {
    var p = JSON.parse(e.postData.contents);
    if (!p || p.app !== 'eiken-p1-mensetsu' || !p.card || !p.answers) {
      return json_({ ok: false, error: '不正なリクエストです' });
    }
    var prompt = buildEvalPrompt(p);            // Prompt.gs
    var text = callGemini_(prompt);
    var result = parse_(text);
    try { log_(p, result); } catch (err) { console.error(err); }
    return json_({ ok: true, result: result });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err.message || err) });
  }
}

function callGemini_(prompt) {
  var key = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!key) throw new Error('GEMINI_API_KEY が未設定です');
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
            encodeURIComponent(model_()) + ':generateContent';
  var body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.3, responseMimeType: 'application/json' }
  };
  var lastErr;
  for (var i = 0; i < 2; i++) {               // 混雑時に1回だけ再試行
    var res = UrlFetchApp.fetch(url, {
      method: 'post', contentType: 'application/json',
      headers: { 'x-goog-api-key': key },
      payload: JSON.stringify(body), muteHttpExceptions: true
    });
    var code = res.getResponseCode();
    if (code === 200) {
      var j = JSON.parse(res.getContentText());
      var parts = (((j.candidates || [])[0] || {}).content || {}).parts || [];
      var out = parts.filter(function (x) { return x.text && !x.thought; })
                     .map(function (x) { return x.text; }).join('');
      if (!out) throw new Error('Gemini から空の応答が返りました');
      return out;
    }
    lastErr = 'Gemini API エラー (' + code + '): ' + res.getContentText().slice(0, 300);
    if (code !== 429 && code < 500) break;
    Utilities.sleep(2000);
  }
  throw new Error(lastErr);
}

function parse_(t) {
  t = String(t).trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  var s = t.indexOf('{'), e = t.lastIndexOf('}');
  return JSON.parse(s >= 0 ? t.slice(s, e + 1) : t);
}

function log_(p, r) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return;
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(['日時', 'クラス', '番号', '名前', 'カード', '合計(/38)', '内容(/20)', '正確さ(/15)', '態度(/3)',
                  'ナレーション(/15)', 'No.1(/5)', 'No.2(/5)', 'No.3(/5)', 'No.4(/5)', '聞き返し', '入力', '総評']);
    sh.setFrozenRows(1);
  }
  var max = { narration: [8, 7], q1: [3, 2], q2: [3, 2], q3: [3, 2], q4: [3, 2] };
  var c = 0, a = 0, per = {};
  Object.keys(max).forEach(function (id) {
    var s = (r.sections || []).filter(function (x) { return x.id === id; })[0] || {};
    var sc = clamp_(s.content, max[id][0]), sa = clamp_(s.accuracy, max[id][1]);
    c += sc; a += sa; per[id] = sc + sa;
  });
  var att = clamp_(r.attitude && r.attitude.score, 3);
  var st = p.student || {};
  sh.appendRow([new Date(), st.cls || '', st.no || '', st.name || '', p.card.id + ' ' + p.card.title,
                c + a + att, c, a, att, per.narration, per.q1, per.q2, per.q3, per.q4,
                p.pardons || 0, p.inputMode || '', r.overall || '']);
}

function clamp_(v, m) { v = Math.round(Number(v) || 0); return Math.max(0, Math.min(m, v)); }
function model_() { return PropertiesService.getScriptProperties().getProperty('GEMINI_MODEL') || DEFAULT_MODEL; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/** エディタから実行して、APIキーとモデルが動くか確認する用 */
function testGemini() {
  Logger.log(callGemini_('Reply with JSON only: {"ok": true}'));
}
