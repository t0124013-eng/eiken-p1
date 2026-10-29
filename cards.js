/* =========================================================
   英検準1級 二次試験 練習用 問題カード
   ---------------------------------------------------------
   カードを追加するときは、下の1枚分 { ... } をコピーして
   id を連番にし、images/cardN.jpg（または .png）を置くだけです。
   panels[0]〜[3] が 1〜4コマ目です。
     time  : コマの左上に出る時間表現（1コマ目は null）
     note  : コマの下に出る吹き出し・掲示の文字（なければ null）
     scene : 画像が読み込めないときに出す場面説明（日本語）
   ========================================================= */
window.CARDS = [
  {
    id: 1,
    title: "在宅勤務",
    topic: "Working from home",
    story: "This is a story about a man who started working from home.",
    firstSentence: "One day, a man was talking with his boss at the office.",
    image: "images/card1",
    panels: [
      { time: null, note: "Boss: “You can work from home starting next month.”",
        scene: "オフィスで上司が男性に何かを伝え、男性は大喜びしている。" },
      { time: "The next month", note: null,
        scene: "男性が自宅のダイニングでノートPCで仕事。妻と子ども2人が笑顔でそばにいる。" },
      { time: "A few weeks later", note: null,
        scene: "男性がオンライン会議中。後ろで子どもたちが騒いで遊び、男性は困った顔。" },
      { time: "That weekend", note: "Coworking space: ¥30,000 / month",
        scene: "静かなコワーキングスペースで、男性が長いレシートを見て心配そうにしている。" }
    ],
    who: "the man",
    questions: [
      "Please look at the fourth picture. If you were the man, what would you be thinking?",
      "Do you think working from home will become more common in Japan in the future?",
      "Should companies do more to help their employees balance work and family life?",
      "Do you think people today depend too much on online communication?"
    ],
    modelNarration: "One day, a man was talking with his boss at the office. She told him that he could work from home starting the next month, and he was delighted to hear that. The next month, the man was working on his laptop at the dining table. His wife and children looked happy to have him at home. A few weeks later, however, he was having an online meeting, but his children were playing noisily behind him, and he found it difficult to concentrate. That weekend, the man was working at a quiet coworking space. However, he was looking at the receipt with a worried expression, because it cost 30,000 yen a month.",
    modelQ1: "I'd be thinking, “It's great to have a quiet place to work, but this is too expensive. I should talk with my family and set up a quiet corner at home instead, or ask my company if they can help cover the cost.”",
    points: [
      "Q2: 賛成例＝通勤時間の削減・技術の進歩・育児や介護との両立／反対例＝対面重視の企業文化・在宅では難しい職種",
      "Q3: 賛成例＝柔軟な働き方・育休取得の推進が離職を防ぐ／反対例＝個人の責任・中小企業には負担",
      "Q4: 賛成例＝対面での微妙なニュアンスが失われる・孤立感／反対例＝遠くの人ともつながれる・効率的"
    ]
  },
  {
    id: 2,
    title: "フードロス",
    topic: "Food waste",
    story: "This is a story about a woman who ran a bakery.",
    firstSentence: "One evening, a woman was closing her bakery.",
    image: "images/card2",
    panels: [
      { time: null, note: null,
        scene: "夕方、女性が売れ残ったパンでいっぱいの棚を悲しそうに見ている。" },
      { time: "The next day", note: "Volunteer: “Our food bank can give your bread to families in need.”",
        scene: "緑のベストを着たボランティアがカウンターで女性と楽しそうに話している。" },
      { time: "A few weeks later", note: null,
        scene: "ボランティアたちがパンの箱をバンに運び、女性が笑顔で手を振っている。" },
      { time: "One month later", note: "Volunteer: “Do you have any bread for us today?”",
        scene: "店は客の長い行列で混雑し、棚は空っぽ。空の箱を持ったボランティアが入口にいて、女性は困った顔。" }
    ],
    who: "the woman",
    questions: [
      "Please look at the fourth picture. If you were the woman, what would you be thinking?",
      "Do you think supermarkets and restaurants should be required by law to reduce food waste?",
      "Is enough being done to support people in need in Japan?",
      "Should the government do more to support small local businesses?"
    ],
    modelNarration: "One evening, a woman was closing her bakery. She looked sad because there was still a lot of unsold bread on the shelves. The next day, a volunteer from a local food bank visited her shop. He told her that the food bank could give her bread to families in need, and she was happy to hear that. A few weeks later, some volunteers were loading boxes of her bread into a van, and she waved to them with a smile. One month later, her bakery had become very popular, and there was a long line of customers. However, all the shelves were empty, so when the volunteer came and asked if she had any bread for them, she didn't know what to say.",
    modelQ1: "I'd be thinking, “I'm glad my shop has become so popular, but I feel bad that I have nothing for the food bank. Maybe I should bake a little extra bread every day and set some aside for them.”",
    points: [
      "Q2: 賛成例＝法律がないと企業は動かない・環境負荷の削減／反対例＝企業の負担増・自主的な取り組みで十分",
      "Q3: 肯定例＝フードバンクや子ども食堂の広がり／否定例＝相対的貧困は見えにくく支援が届かない",
      "Q4: 賛成例＝地域の雇用・個性ある街並みを守る／反対例＝市場競争に任せるべき・税金の使い道"
    ]
  },
  {
    id: 3,
    title: "高齢者の運転",
    topic: "Elderly drivers",
    story: "This is a story about a couple who were worried about the woman's father.",
    firstSentence: "One day, a couple was visiting the woman's father in the countryside.",
    image: "images/card3",
    panels: [
      { time: null, note: null,
        scene: "田舎の家の前で、夫婦が父親の車の大きなへこみを心配そうに見ている。父親は頭をかいている。" },
      { time: "On the way home", note: "Pamphlet: “Return your license — get a free bus pass”",
        scene: "帰りの車内で夫婦が真剣に話している。妻はバスの写ったパンフレットを持っている。" },
      { time: "A month later", note: null,
        scene: "田舎のバス停で、父親が無料バスパスを持って笑顔。夫婦がそばにいる。" },
      { time: "A few weeks later", note: "Bus timetable: 2 buses a day",
        scene: "父親が家で一人、退屈そうに窓の外の誰もいない道とバス停を見ている。壁には本数の少ない時刻表。" }
    ],
    who: "the woman's father",
    questions: [
      "Please look at the fourth picture. If you were the woman's father, what would you be thinking?",
      "Should elderly people be required to take driving tests more often?",
      "Do you think self-driving cars will solve transportation problems in rural areas?",
      "Should more be done to encourage young people to live in rural areas?"
    ],
    modelNarration: "One day, a couple was visiting the woman's father in the countryside. They were shocked to find a big dent in his car, and they became worried about his driving. On the way home, the couple was talking seriously about the problem. The woman was holding a pamphlet which said that people who returned their driver's license could get a free bus pass. A month later, the father had returned his license, and he was smiling at the bus stop with his new bus pass. A few weeks later, however, he was sitting alone at home looking bored. There were only two buses a day, so he could not go out as freely as before.",
    modelQ1: "I'd be thinking, “I know giving up my license was the safe choice, but I feel lonely and stuck at home. I wish there were more buses. Maybe I should ask my daughter about community taxi services or join a local club I can walk to.”",
    points: [
      "Q2: 賛成例＝事故防止・認知機能は個人差が大きい／反対例＝年齢による差別・地方では車が生活必需品",
      "Q3: 肯定例＝運転手不足の解消・高齢者の移動手段／否定例＝費用・安全性や法整備の課題",
      "Q4: 賛成例＝過疎化対策・地域の活性化／反対例＝仕事や教育の機会は都市に集中・個人の選択"
    ]
  },
  {
    id: 4,
    title: "学校のICT",
    topic: "Technology in schools",
    story: "This is a story about a teacher who wanted to improve his students' learning.",
    firstSentence: "One day, a teacher was giving a lesson in his classroom.",
    image: "images/card4",
    panels: [
      { time: null, note: null,
        scene: "教室で生徒たちが机の下でこっそりスマホを見ていて、先生が顔をしかめている。" },
      { time: "The next week", note: "Teacher: “From today, we'll use tablets in class.”",
        scene: "先生がタブレットを掲げて笑顔で話し、生徒の机にもタブレットがある。" },
      { time: "A month later", note: "Test scores",
        scene: "先生がホワイトボードの右肩上がりの棒グラフを誇らしげに指し、生徒も嬉しそう。" },
      { time: "A few days later", note: "Mother: “My son uses his tablet until late at night.”",
        scene: "面談室で母親が深夜1時にベッドでタブレットを使う息子の写真を見せ、先生が驚いている。" }
    ],
    who: "the teacher",
    questions: [
      "Please look at the fourth picture. If you were the teacher, what would you be thinking?",
      "Do you think schools should ban students from bringing smartphones?",
      "Is it a good idea for students to use AI tools to help them study?",
      "Do you think people today have fewer chances to communicate face-to-face?"
    ],
    modelNarration: "One day, a teacher was giving a lesson in his classroom. He was unhappy because some of his students were secretly looking at their smartphones under their desks. The next week, the teacher told the class that they would use tablets in class from that day, and the students seemed excited. A month later, he was pointing at a graph on the whiteboard. It showed that the students' test scores had improved, and everyone looked pleased. A few days later, however, a mother came to see the teacher. She showed him a photo on her phone and told him that her son was using his tablet until late at night. The teacher was very surprised.",
    modelQ1: "I'd be thinking, “I'm happy that the tablets have improved my students' grades, but I didn't expect this problem. I should teach my students how to manage their screen time and work with parents to set some rules for using the tablets at home.”",
    points: [
      "Q2: 賛成例＝授業への集中・SNSトラブル防止／反対例＝緊急時の連絡・学習ツールとしての活用",
      "Q3: 肯定例＝個別最適な学び・すぐに疑問を解消できる／否定例＝自分で考える力が育たない・誤情報",
      "Q4: 肯定例＝SNSやオンライン会議の普及で対面が減った／否定例＝オンラインがきっかけで実際に会う機会も増えた"
    ]
  },
  {
    id: 5,
    title: "観光と地域",
    topic: "Tourism and local communities",
    story: "This is a story about a man who wanted to bring more visitors to his town.",
    firstSentence: "One day, a man was speaking at a town meeting.",
    image: "images/card5",
    panels: [
      { time: null, note: "Man: “Let's attract more tourists to our town!”",
        scene: "町の集会で、男性がカメラとお寺のポスターを掲げて熱心に提案している。" },
      { time: "A few months later", note: null,
        scene: "男性の土産物店に外国人観光客が大勢押し寄せ、男性は嬉しそうにレジを打っている。" },
      { time: "That summer", note: null,
        scene: "細い通りが観光客で大混雑し、ごみが散乱。買い物袋を持った高齢の住民が通れずに困っている。" },
      { time: "One morning", note: "Neighbors: “The buses are blocking our road!”",
        scene: "店の前の細い道を観光バスがふさぎ、怒った近所の人たちが男性に苦情を言っている。男性は複雑な表情。" }
    ],
    who: "the man",
    questions: [
      "Please look at the fourth picture. If you were the man, what would you be thinking?",
      "Should Japan try to attract even more foreign tourists?",
      "Do you think enough is being done to protect traditional culture in Japan?",
      "Should local governments limit the number of visitors to popular tourist spots?"
    ],
    modelNarration: "One day, a man was speaking at a town meeting. He suggested to the other residents that they should attract more tourists to their town. A few months later, many foreign tourists were visiting his souvenir shop, and he was very happy because his sales had increased. That summer, however, the narrow streets were extremely crowded with tourists, and there was trash everywhere. An elderly woman could not get through the crowd with her shopping bag. One morning, a large tour bus was blocking the road in front of his shop. Some of his neighbors were complaining to him that the buses were blocking their road, and the man did not know what to say.",
    modelQ1: "I'd be thinking, “I'm glad that tourism is helping my business, but I didn't want to cause trouble for my neighbors. I should suggest that the town create a parking area outside the old streets and set up more trash bins.”",
    points: [
      "Q2: 賛成例＝経済効果・文化交流／反対例＝オーバーツーリズム・住民生活への影響",
      "Q3: 肯定例＝文化財保護の制度や補助金がある／否定例＝担い手不足・後継者問題",
      "Q4: 賛成例＝環境や住民生活を守る・観光体験の質の向上／反対例＝観光収入の減少・自由な移動の制限"
    ]
},
  {
    id: 6,
    title: "使い捨てプラスチック",
    topic: "Plastic waste",
    story: "This is a story about a man who ran a cafe.",
    firstSentence: "One day, a man was walking on a beach on his day off.",
    image: "images/card6",
    panels: [
      { time: null, note: null,
        scene: "休みの日、カフェの店主の男性が、砂浜に散らばったプラスチックのカップやストロー、ペットボトルを悲しそうに見ている。" },
      { time: "The next week", note: "Sign: “Paper straws only / ¥30 off with your own cup”",
        scene: "カフェのカウンターに紙ストローの瓶を置き、男性がマイタンブラーを掲げて笑顔。" },
      { time: "A month later", note: null,
        scene: "客たちが自分のタンブラーを笑顔で男性に渡している。みんな満足そう。" },
      { time: "That summer", note: "Customer: “This straw is getting soft!”",
        scene: "テーブルの客たちが、アイスドリンクの中でふやけて曲がった紙ストローを指さして不満顔。男性は困った顔。" }
    ],
    who: "the man",
    questions: [
      "Please look at the fourth picture. If you were the man, what would you be thinking?",
      "Should stores be required to charge customers for plastic bags and containers?",
      "Do you think individuals can make a real difference in protecting the environment?",
      "Should the government do more to encourage people to repair things instead of throwing them away?"
    ],
    modelNarration: "One day, a man was walking on a beach on his day off. He was shocked to see a lot of plastic cups, straws and bottles on the sand. The next week, the man put paper straws on the counter of his cafe. A sign said that customers could get 30 yen off if they brought their own cups. A month later, many customers were bringing their own tumblers, and everyone seemed happy with the change. That summer, however, some customers were complaining. They were pointing at their paper straws and saying that the straws were getting soft in their drinks, and the man looked worried.",
    modelQ1: "I'd be thinking, “I still believe that reducing plastic is important, but I need to keep my customers happy, too. Maybe I should look for stronger straws, such as ones made from bamboo or metal.”",
    points: [
      "Q2: 賛成例＝レジ袋有料化でごみが減った・意識が変わる／反対例＝消費者の負担・衛生面で必要な場面もある",
      "Q3: 肯定例＝一人ひとりの行動が集まれば企業や社会を動かす／否定例＝企業や国の取り組みに比べ効果が小さい",
      "Q4: 賛成例＝ごみと資源の節約・修理業の雇用／反対例＝修理より買い替えの方が安い・個人の自由"
    ]
  },
  {
    id: 7,
    title: "キャッシュレス決済",
    topic: "Cashless payments",
    story: "This is a story about a woman who ran a vegetable shop.",
    firstSentence: "One day, a woman was working at her vegetable shop.",
    image: "images/card7",
    panels: [
      { time: null, note: null,
        scene: "八百屋の女性がレジで小銭を数えるのに時間がかかり、長い列の客がいらいらしている。" },
      { time: "The next week", note: "Sign: “Cashless payments only”",
        scene: "女性が誇らしげにQRコード決済の案内をレジの横に置いている。現金のレジは脇に片づけられている。" },
      { time: "A few weeks later", note: null,
        scene: "若い客たちがスマホでQRコードを読み取ってすばやく支払い、列は短い。女性は笑顔。" },
      { time: "One afternoon", note: "Elderly customer: “I only have cash.”",
        scene: "買い物かごを持った常連の高齢の女性が、お札と小銭を差し出して困った顔。店主の女性も困った顔。" }
    ],
    who: "the woman",
    questions: [
      "Please look at the fourth picture. If you were the woman, what would you be thinking?",
      "Do you think Japan will become a completely cashless society in the future?",
      "Should more be done to help elderly people use new technology?",
      "Do you think online shopping is harmful to local stores?"
    ],
    modelNarration: "One day, a woman was working at her vegetable shop. She was counting coins at the register, and many customers in a long line looked impatient. The next week, the woman put a QR code sign next to the register, which said that the shop would accept cashless payments only. A few weeks later, young customers were paying quickly with their smartphones, and the woman was pleased that the line was short. One afternoon, however, one of her elderly regular customers was holding out some cash. She told the woman that she only had cash, and the woman did not know what to do.",
    modelQ1: "I'd be thinking, “I didn't mean to cause trouble for my regular customers. I should accept cash again for people who need it, or I could show her how to use cashless payments step by step.”",
    points: [
      "Q2: 肯定例＝便利で速い・海外からの観光客にも対応・現金管理の負担減／否定例＝災害時の停電・高齢者・現金への信頼",
      "Q3: 賛成例＝行政手続きや買い物がオンライン化している・孤立を防ぐ／反対例＝家族や地域が支えるべき・無理に使う必要はない",
      "Q4: 肯定例＝商店街の客が減る・地域の雇用が失われる／否定例＝地元の店もネット販売で客を広げられる"
    ]
  },
  {
    id: 8,
    title: "公園のボール遊び",
    topic: "Public parks",
    story: "This is a story about a father who wanted his son to play in the park.",
    firstSentence: "One day, a father and his son went to a park near their house.",
    image: "images/card8",
    panels: [
      { time: null, note: "Sign: “No ball games”",
        scene: "近所の小さな公園で、グローブを持った息子と父親が「ボール遊び禁止」の看板を見てがっかりしている。" },
      { time: "A month later", note: "Father: “Children need a place to play catch.”",
        scene: "地域の集会所で、父親が紙を持って熱心に発言し、住民たちが聞いている。" },
      { time: "That spring", note: null,
        scene: "公園にフェンスで囲まれたボール遊びのエリアができ、たくさんの子どもがキャッチボールやサッカーを楽しんでいる。父親は笑顔。" },
      { time: "A few weeks later", note: "Neighbor: “It's too noisy every day!”",
        scene: "公園のすぐ隣の家の玄関先で、高齢の女性が耳をふさいで父親に怒って話している。後ろではボールが飛んでいる。父親は困った顔。" }
    ],
    who: "the father",
    questions: [
      "Please look at the fourth picture. If you were the father, what would you be thinking?",
      "Do you think children today spend enough time playing outside?",
      "Should local residents have more say in how public spaces are used?",
      "Are people in Japan becoming less tolerant of noise in their neighborhoods?"
    ],
    modelNarration: "One day, a father and his son went to a park near their house. They wanted to play catch, but they were disappointed to see a sign that said ball games were not allowed. A month later, the father was speaking at a community meeting. He told the other residents that children needed a place to play catch. That spring, a fenced area for ball games was built in the park, and many children were enjoying playing there. A few weeks later, however, a woman who lived next to the park was complaining to the father. She said that it was too noisy every day, and the father did not know what to say.",
    modelQ1: "I'd be thinking, “I'm glad the children have a place to play, but I didn't think about the people living next to the park. We should talk again and decide on playing hours so that everyone can be comfortable.”",
    points: [
      "Q2: 否定例＝ゲームやスマホの時間が増えた・遊べる場所が減った／肯定例＝習い事やスポーツクラブで体を動かしている",
      "Q3: 賛成例＝実際に使う人の声が大切・地域への愛着が生まれる／反対例＝意見がまとまらず決定が遅れる・専門家に任せるべき",
      "Q4: 肯定例＝保育園や公園への苦情が増えている／否定例＝一部の人の声が目立っているだけ・お互いさまの意識もある"
    ]
  },
  {
    id: 9,
    title: "防災訓練",
    topic: "Disaster preparedness",
    story: "This is a story about a woman who wanted more people to join a disaster drill.",
    firstSentence: "One day, a woman was holding a disaster drill in her neighborhood.",
    image: "images/card9",
    panels: [
      { time: null, note: null,
        scene: "校庭で行われた防災訓練。消火器やテントが用意されているのに、来たのは高齢者2人だけで、町内会の女性ががっかりしている。" },
      { time: "That evening", note: "Poster: “Disaster Prevention Festival — food stalls and games!”",
        scene: "家のテーブルで、女性が屋台や風船、消防車の絵が入ったカラフルなポスターを楽しそうに描いている。" },
      { time: "A month later", note: null,
        scene: "校庭が家族連れでにぎわい、屋台やゲームを楽しんでいる。女性は大喜び。" },
      { time: "Later that day", note: "Sign: “Fire extinguisher practice”",
        scene: "屋台には長い列ができているのに、消火器の体験コーナーには誰もいない。女性が消火器を持って一人で立ち、がっかりしている。" }
    ],
    who: "the woman",
    questions: [
      "Please look at the fourth picture. If you were the woman, what would you be thinking?",
      "Do you think people in Japan are well prepared for natural disasters?",
      "Should schools spend more time teaching students how to protect themselves in emergencies?",
      "Do you think people today have weaker ties with their neighbors than in the past?"
    ],
    modelNarration: "One day, a woman was holding a disaster drill in her neighborhood. However, only two elderly people came, and she was disappointed. That evening, the woman was making a poster at home. It said that the event would be a disaster prevention festival with food stalls and games. A month later, the schoolyard was crowded with many families, and the woman was very happy to see so many people. Later that day, however, there were long lines at the food stalls, but nobody was at the fire extinguisher practice corner. The woman was standing there alone, and she looked disappointed.",
    modelQ1: "I'd be thinking, “At least many people came today, which is a good start. Next time, I should give a free food ticket to people who try the fire extinguisher, so that they will join the drill.”",
    points: [
      "Q2: 肯定例＝地震の経験から備蓄や訓練が広まっている／否定例＝時間がたつと意識が薄れる・都市部では訓練への参加が少ない",
      "Q3: 賛成例＝災害の多い国・子どもが家族に伝えられる／反対例＝授業時間が足りない・家庭や地域でも学べる",
      "Q4: 肯定例＝あいさつをしない・町内会の参加者が減っている／否定例＝SNSや地域アプリなど新しいつながりもある"
    ]
  },
  {
    id: 10,
    title: "SNSと口コミ",
    topic: "Social media and business",
    story: "This is a story about a man who ran a ramen shop.",
    firstSentence: "One day, a man was waiting for customers at his ramen shop.",
    image: "images/card10",
    panels: [
      { time: null, note: null,
        scene: "ラーメン店にはお客が一人しかおらず、店主の男性がカウンターの中で退屈そうにしている。" },
      { time: "The next week", note: "Influencer: “I'll post a video of your ramen!”",
        scene: "明るい若い女性のインフルエンサーが、自撮り棒のスマホでラーメンを撮影し、店主が得意げにポーズをとっている。" },
      { time: "A few days later", note: null,
        scene: "店の外に、スマホを持った若者たちの長い行列ができている。店主は忙しそうだがうれしそう。" },
      { time: "That night", note: "Review: “★★ Waited two hours. Not worth it.”",
        scene: "閉店後、疲れた店主がカウンターに座り、低い星の評価や怒った顔のアイコンが並ぶスマホの画面を見て驚いている。" }
    ],
    who: "the man",
    questions: [
      "Please look at the fourth picture. If you were the man, what would you be thinking?",
      "Do you think online reviews are a reliable way to choose restaurants and products?",
      "Should social media companies do more to stop the spread of false information?",
      "Do you think young people today are too influenced by social media?"
    ],
    modelNarration: "One day, a man was waiting for customers at his ramen shop, but there was only one customer, and he looked bored. The next week, a young woman who was a popular influencer visited his shop. She told him that she would post a video of his ramen, and he was excited. A few days later, there was a very long line of young people outside his shop, and the man was busy but happy. That night, however, he was looking at his smartphone after closing the shop. He was shocked to see many bad reviews saying that customers had waited for two hours and that the ramen was not worth it.",
    modelQ1: "I'd be thinking, “I'm happy that so many people came, but I can't serve them all well. I should start a reservation system or give out numbered tickets so that customers don't have to wait so long.”",
    points: [
      "Q2: 肯定例＝多くの人の実体験が分かる・失敗を避けられる／否定例＝やらせや偽のレビュー・好みは人それぞれ",
      "Q3: 賛成例＝誤情報は社会に大きな害・企業には責任がある／反対例＝表現の自由・何が誤りかの判断が難しい",
      "Q4: 肯定例＝流行や外見を気にしすぎる・ネットの評価で判断する／否定例＝情報を選ぶ力もついている・学びや発信にも使っている"
    ]
  }
];
