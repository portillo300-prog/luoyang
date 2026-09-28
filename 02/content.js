/*
  CONTENT for 完蛋 Wándàn — Oscar's own HSK textbook app.
  Source: HSK 标准教程 5 (上), transcribed from photos of the actual book pages.

  Each vocab item:  s = simplified, t = traditional, py = pinyin with tone NUMBERS (1-4, 5 = neutral),
                     one syllable per space (v = ü), en = English meaning (as printed in the book).
  `lessons` feeds the writing-practice screen + the vocab games (Bubble Pop, Memory Match, etc.) —
  same engine as the original template, just with adult HSK5 content instead of a kid's characters.
  `units` holds the reading passage, grammar notes, and comprehension questions — rendered by unit.js.
  `fill` / `sentences` feed the existing Fill-the-Blank and Sentence Builder games.

  After editing, run:  node scripts/build.mjs
*/
window.CONTENT = {
  appTitle: { s: '完蛋', t: '完蛋' },

  lessons: [
    {
      id: 'u1',
      number: 1,
      sticker: '💕',
      accent: '#ff6b6b',
      title: { s: '爱的细节', t: '愛的細節' },
      py: 'ai4 de5 xi4 jie2',
      en: 'Details of Love',
      characters: [],
      words: [
        { s: '细节', t: '細節', py: 'xi4 jie2', en: 'detail' },
        { s: '电台', t: '電台', py: 'dian4 tai2', en: 'radio station' },
        { s: '恩爱', t: '恩愛', py: 'en1 ai4', en: '(of husband and wife) loving' },
        { s: '对比', t: '對比', py: 'dui4 bi3', en: 'to compare, to contrast' },
        { s: '入围', t: '入圍', py: 'ru4 wei2', en: 'to be shortlisted' },
        { s: '评委', t: '評委', py: 'ping2 wei3', en: 'judge, member of a judging panel' },
        { s: '如何', t: '如何', py: 'ru2 he2', en: 'how' },
        { s: '瘫痪', t: '癱瘓', py: 'tan1 huan4', en: 'to be paralyzed' },
        { s: '离婚', t: '離婚', py: 'li2 hun1', en: 'to divorce' },
        { s: '自杀', t: '自殺', py: 'zi4 sha1', en: 'to commit suicide' },
        { s: '抱怨', t: '抱怨', py: 'bao4 yuan4', en: 'to complain' },
        { s: '爱护', t: '愛護', py: 'ai4 hu4', en: 'to take good care of' },
        { s: '婚姻', t: '婚姻', py: 'hun1 yin1', en: 'marriage' },
        { s: '吵架', t: '吵架', py: 'chao3 jia4', en: 'to quarrel' },
        { s: '相敬如宾', t: '相敬如賓', py: 'xiang1 jing4 ru2 bin1', en: '(of husband and wife) to respect each other like guests' },
        { s: '暗暗', t: '暗暗', py: 'an4 an4', en: 'secretly, to oneself' },
        { s: '轮', t: '輪', py: 'lun2', en: 'to take turns' },
        { s: '不耐烦', t: '不耐煩', py: 'bu4 nai4 fan2', en: 'impatient' },
        { s: '靠', t: '靠', py: 'kao4', en: 'to lean against; to rely on; to be near' },
        { s: '肩膀', t: '肩膀', py: 'jian1 bang3', en: 'shoulder' },
        { s: '喊', t: '喊', py: 'han3', en: 'to shout, to call' },
        { s: '伸', t: '伸', py: 'shen1', en: 'to stretch, to extend' },
        { s: '手指', t: '手指', py: 'shou3 zhi3', en: 'finger' },
        { s: '歪歪扭扭', t: '歪歪扭扭', py: 'wai1 wai1 niu3 niu3', en: 'crooked, askew' },
        { s: '递', t: '遞', py: 'di4', en: 'to hand over, to pass' },
        { s: '脑袋', t: '腦袋', py: 'nao3 dai5', en: 'head' },
        { s: '女士', t: '女士', py: 'nv3 shi4', en: 'lady, madam' },
        { s: '叙述', t: '敘述', py: 'xu4 shu4', en: 'to narrate' },
        { s: '居然', t: '居然', py: 'ju1 ran2', en: 'unexpectedly, to one\'s surprise' },
        { s: '催', t: '催', py: 'cui1', en: 'to urge, to push' },
        { s: '等待', t: '等待', py: 'deng3 dai4', en: 'to wait' },
        { s: '蚊子', t: '蚊子', py: 'wen2 zi5', en: 'mosquito' },
        { s: '半夜', t: '半夜', py: 'ban4 ye4', en: 'midnight' },
        { s: '叮', t: '叮', py: 'ding1', en: 'to bite, to sting' },
        { s: '老婆', t: '老婆', py: 'lao3 po5', en: 'wife' },
        { s: '吵', t: '吵', py: 'chao3', en: 'to make a noise; noisy' },
        { s: '项', t: '項', py: 'xiang4', en: 'measure word for itemized things' },
        { s: '患难与共', t: '患難與共', py: 'huan4 nan4 yu3 gong4', en: 'to share weal and woe, through thick and thin' },
        { s: '脖子', t: '脖子', py: 'bo2 zi5', en: 'neck', topic: 'body' },
        { s: '胸', t: '胸', py: 'xiong1', en: 'chest', topic: 'body' },
        { s: '腰', t: '腰', py: 'yao1', en: 'waist, back', topic: 'body' },
        { s: '后背', t: '後背', py: 'hou4 bei4', en: 'back (of the body)', topic: 'body' },
        { s: '眉毛', t: '眉毛', py: 'mei2 mao5', en: 'eyebrow', topic: 'body' },
        { s: '嗓子', t: '嗓子', py: 'sang3 zi5', en: 'throat', topic: 'body' },
        { s: '牙齿', t: '牙齒', py: 'ya2 chi3', en: 'tooth', topic: 'body' }
      ]
    },
    {
      id: 'u2',
      number: 2,
      sticker: '🔑',
      accent: '#5aa9ff',
      title: { s: '留串钥匙给父母', t: '留串鑰匙給父母' },
      py: 'liu2 chuan4 yao4 shi5 gei3 fu4 mu3',
      en: 'Leaving a Bunch of Keys to Our Parents',
      characters: [],
      words: [
        { s: '串', t: '串', py: 'chuan4', en: 'measure word: bunch, string' },
        { s: '一辈子', t: '一輩子', py: 'yi2 bei4 zi5', en: 'all one\'s life' },
        { s: '农村', t: '農村', py: 'nong2 cun1', en: 'countryside' },
        { s: '屋子', t: '屋子', py: 'wu1 zi5', en: 'house' },
        { s: '断', t: '斷', py: 'duan4', en: 'to cut off, to stop' },
        { s: '以来', t: '以來', py: 'yi3 lai2', en: 'since' },
        { s: '姥姥', t: '姥姥', py: 'lao3 lao5', en: 'maternal grandma' },
        { s: '舅舅', t: '舅舅', py: 'jiu4 jiu5', en: 'uncle, mother\'s brother' },
        { s: '姑姑', t: '姑姑', py: 'gu1 gu5', en: 'aunt, father\'s sister' },
        { s: '坚决', t: '堅決', py: 'jian1 jue2', en: 'resolute, determined' },
        { s: '打工', t: '打工', py: 'da3 gong1', en: 'to work for others, to do a temporary job' },
        { s: '挣', t: '掙', py: 'zheng4', en: 'to earn' },
        { s: '县', t: '縣', py: 'xian4', en: 'county' },
        { s: '套', t: '套', py: 'tao4', en: 'measure word: set, suite' },
        { s: '装修', t: '裝修', py: 'zhuang1 xiu1', en: 'to decorate (a house, room, etc.)' },
        { s: '不得了', t: '不得了', py: 'bu4 de2 liao3', en: 'extreme, exceeding' },
        { s: '醉', t: '醉', py: 'zui4', en: 'to be drunk' },
        { s: '强烈', t: '強烈', py: 'qiang2 lie4', en: 'strong and vehement' },
        { s: '夜', t: '夜', py: 'ye4', en: 'night' },
        { s: '锁', t: '鎖', py: 'suo3', en: 'lock; to lock up' },
        { s: '临', t: '臨', py: 'lin2', en: 'about to, just before' },
        { s: '悄悄', t: '悄悄', py: 'qiao1 qiao1', en: 'quietly, secretly' },
        { s: '晒', t: '曬', py: 'shai4', en: 'to dry in the sun' },
        { s: '被子', t: '被子', py: 'bei4 zi5', en: 'quilt' },
        { s: '长途', t: '長途', py: 'chang2 tu2', en: 'long-distance' },
        { s: '冻', t: '凍', py: 'dong4', en: 'to freeze, to feel very cold' },
        { s: '想象', t: '想像', py: 'xiang3 xiang4', en: 'to imagine' },
        { s: '灰尘', t: '灰塵', py: 'hui1 chen2', en: 'dust, dirt' },
        { s: '亮', t: '亮', py: 'liang4', en: 'bright; to shine' },
        { s: '微笑', t: '微笑', py: 'wei1 xiao4', en: 'to smile; smile' },
        { s: '温暖', t: '溫暖', py: 'wen1 nuan3', en: 'warm; to make sb./sth. warm' },
        { s: '立刻', t: '立刻', py: 'li4 ke4', en: 'at once, immediately' },
        { s: '扑', t: '撲', py: 'pu1', en: 'to pounce on, to dash at' },
        { s: '卧室', t: '臥室', py: 'wo4 shi4', en: 'bedroom' },
        { s: '铺', t: '鋪', py: 'pu1', en: 'to spread, to unfold' },
        { s: '飘', t: '飄', py: 'piao1', en: 'to float (in the air), to waft' },
        { s: '阵', t: '陣', py: 'zhen4', en: 'measure word: a short period or spell of an occurrence' },
        { s: '感受', t: '感受', py: 'gan3 shou4', en: 'to feel; feeling' },
        { s: '流泪', t: '流淚', py: 'liu2 lei4', en: 'to shed tears' },
        { s: '外公', t: '外公', py: 'wai4 gong1', en: 'maternal grandpa', topic: 'kinship' },
        { s: '太太', t: '太太', py: 'tai4 tai5', en: 'wife; Mrs.', topic: 'kinship' },
        { s: '兄弟', t: '兄弟', py: 'xiong1 di4', en: 'brothers, siblings', topic: 'kinship' },
        { s: '小气', t: '小氣', py: 'xiao3 qi5', en: 'stingy', topic: 'social' },
        { s: '周到', t: '周到', py: 'zhou1 dao4', en: 'thoughtful, considerate', topic: 'social' },
        { s: '坦率', t: '坦率', py: 'tan3 shuai4', en: 'frank, candid', topic: 'social' }
      ]
    }
  ],

  /* UNITS: reading passage + grammar notes + comprehension check, rendered by unit.js */
  units: [
    {
      id: 'u1',
      lessonId: 'u1',
      title: { s: '爱的细节', t: '愛的細節' },
      en: 'Details of Love',
      source: 'Adapted from 《今日文摘》(Today\'s Digest) — HSK 标准教程 5 (上), Unit 1',
      reading: {
        paragraphs: [
          {
            s: '电台要选出一对最恩爱的夫妻。对比后，有三对夫妻入围。',
            t: '電台要選出一對最恩愛的夫妻。對比後，有三對夫妻入圍。',
            en: 'A radio station wanted to select the most loving couple. After comparing entries, three couples were shortlisted.'
          },
          {
            s: '评委叫第一对夫妻说说他俩是如何恩爱的。妻子说，前几年她全身瘫痪了，医生说她站起来的可能性很小。别人都觉得她的丈夫会跟她离婚，她也想过要自杀。但丈夫一直鼓励她，为她不知找了多少家医院，并且几年如一日地照顾她，从不抱怨。在丈夫的爱护和努力下，她终于又站了起来。她的故事十分感人，评委们听了都很感动。',
            t: '評委叫第一對夫妻說說他倆是如何恩愛的。妻子說，前幾年她全身癱瘓了，醫生說她站起來的可能性很小。別人都覺得她的丈夫會跟她離婚，她也想過要自殺。但丈夫一直鼓勵她，為她不知找了多少家醫院，並且幾年如一日地照顧她，從不抱怨。在丈夫的愛護和努力下，她終於又站了起來。她的故事十分感人，評委們聽了都很感動。',
            en: 'The judges asked the first couple to describe how they loved each other so devotedly. The wife said that a few years earlier she had become completely paralyzed, and doctors said the chances of her ever standing up again were very slim. Everyone assumed her husband would divorce her, and she herself had even thought about suicide. But her husband kept encouraging her — there was no telling how many hospitals he had gone to for help — and for years, day after day, he took care of her without ever complaining once. Thanks to her husband\'s loving care and effort, she finally stood up again. Her story was deeply moving, and the judges were all touched hearing it.'
          },
          {
            s: '随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵过架，一直相亲相爱、相敬如宾。评委们听了暗暗点头。',
            t: '隨後進來的是第二對夫妻，他倆說，十幾年的婚姻生活中，他們從來沒為任何事紅過臉、吵過架，一直相親相愛、相敬如賓。評委們聽了暗暗點頭。',
            en: 'Next came the second couple. They said that in over ten years of marriage, they had never once gotten upset or quarreled over anything — they had always loved each other dearly and treated each other with the utmost respect. The judges nodded quietly to themselves as they listened.'
          },
          {
            s: '轮到第三对夫妻了，却很长时间不见人。评委们等得有些不耐烦，就走出来看个究竟。只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。评委们看那纸条上面写着：别出声，他昨晚没睡好。一个评委提起笔在后面续写了一句话：但是女士，我们得听你们夫妻俩的叙述啊！女人又写：那我们就不参加了。',
            t: '輪到第三對夫妻了，卻很長時間不見人。評委們等得有些不耐煩，就走出來看個究竟。只見第三對夫妻仍然坐在門口，男人的頭靠在女人的肩膀上，睡著了。一個評委要上前喊醒那個男的，女的卻伸出手指做了個小聲的動作，然後小心地從包裡拿出紙筆，用左手歪歪扭扭寫下一行字遞給評委，而她的右肩一直讓丈夫的腦袋靠著。評委們看那紙條上面寫著：別出聲，他昨晚沒睡好。一個評委提起筆在後面續寫了一句話：但是女士，我們得聽你們夫妻倆的敘述啊！女人又寫：那我們就不參加了。',
            en: 'Then it was the third couple\'s turn, but no one appeared for a long time. The judges grew a little impatient waiting, so they went out to see what was going on. There they found the third couple still sitting by the door — the man\'s head resting on the woman\'s shoulder, fast asleep. One judge started to step forward to wake the man, but the woman held up a finger in a "shh" gesture. Then she carefully took paper and pen out of her bag, and with her left hand wrote a wobbly line of characters and handed it to the judges — all the while keeping her right shoulder still, so her husband\'s head could keep resting on it. The note read: "Please don\'t make a sound, he didn\'t sleep well last night." One judge picked up the pen and added a line underneath: "But madam, we still need to hear the two of you tell your story!" The woman wrote back: "Then we\'ll just withdraw."'
          },
          {
            s: '大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！但评委们还是决定先不催他们，而是再等待一段时间。过了一会儿，男人醒了。评委们问他怎么那么累。男人不好意思地笑笑说："我家住一楼，蚊子多。昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。"',
            t: '大家很吃驚，這個女人為了不影響丈夫睡覺，居然放棄這次機會！但評委們還是決定先不催他們，而是再等待一段時間。過了一會兒，男人醒了。評委們問他怎麼那麼累。男人不好意思地笑笑說：「我家住一樓，蚊子多。昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以後半夜就在為她趕蚊子。」',
            en: 'Everyone was stunned — this woman, just so as not to disturb her husband\'s sleep, had unexpectedly given up this opportunity! But the judges decided not to rush them, and to wait a while longer instead. After a while, the man woke up. The judges asked him why he seemed so tired. Embarrassed, the man laughed and said: "I live on the first floor, so there are a lot of mosquitoes. Last night around midnight a mosquito bit me awake, and I was afraid my wife would get bitten and woken up too — so I spent the rest of the night swatting mosquitoes away for her."'
          },
          {
            s: '最后的结果是，电台增加了两项奖项，将第一对夫妻评为"患难与共夫妻"，将第二对夫妻评为"相敬如宾夫妻"，而真正的"最恩爱夫妻"奖，却给了第三对夫妻。',
            t: '最後的結果是，電台增加了兩項獎項，將第一對夫妻評為「患難與共夫妻」，將第二對夫妻評為「相敬如賓夫妻」，而真正的「最恩愛夫妻」獎，卻給了第三對夫妻。',
            en: 'In the end, the radio station added two new awards. They named the first couple "Through Thick and Thin Couple," and the second couple "Mutual Respect Couple." The real "Most Loving Couple" award, though, went to the third couple.'
          }
        ]
      },
      grammar: [
        {
          point: '如何',
          py: 'ru2 he2',
          en: '"How" — a pronoun used to ask about manner or method. Also used at the very end of a sentence to ask for an opinion or ask "how about it?"',
          examples: [
            { s: '我们明天举行会议，讨论这个问题该如何解决。', t: '我們明天舉行會議，討論這個問題該如何解決。', py: 'wo3 men5 ming2 tian1 ju3 xing2 hui4 yi4, tao3 lun4 zhe4 ge4 wen4 ti2 gai1 ru2 he2 jie3 jue2.', en: 'Tomorrow we\'re holding a meeting to discuss how this problem should be solved.' },
            { s: '评委叫第一对夫妻说说他俩是如何恩爱的。', t: '評委叫第一對夫妻說說他倆是如何恩愛的。', py: 'ping2 wei3 jiao4 di4 yi1 dui4 fu1 qi1 shuo1 shuo1 ta1 lia3 shi4 ru2 he2 en1 ai4 de5.', en: 'The judges asked the first couple to describe how they loved each other so devotedly.' },
            { s: '我们希望由你来负责解决这个问题，如何？', t: '我們希望由你來負責解決這個問題，如何？', py: 'wo3 men5 xi1 wang4 you2 ni3 lai2 fu4 ze2 jie3 jue2 zhe4 ge4 wen4 ti2, ru2 he2?', en: 'We\'d like you to take charge of solving this problem — how about it?' },
            { s: '"80后"们月收入情况如何？', t: '「80後」們月收入情況如何？', py: 'ba1 ling2 hou4 men5 yue4 shou1 ru4 qing2 kuang4 ru2 he2?', en: 'What\'s the monthly income situation like for the post-80s generation?' }
          ]
        },
        {
          point: '靠',
          py: 'kao4',
          en: 'A verb with three related meanings: (1) "to lean against / on," usually as 靠着/在..., (2) "to rely on, to depend on, thanks to," and (3) "to be near, close to."',
          examples: [
            { s: '王老师喜欢靠着桌子讲课。', t: '王老師喜歡靠著桌子講課。', py: 'wang2 lao3 shi1 xi3 huan5 kao4 zhe5 zhuo1 zi5 jiang3 ke4.', en: 'Teacher Wang likes to lean against the desk while lecturing.', sense: 'lean against' },
            { s: '男人的头靠在女人的肩膀上，睡着了。', t: '男人的頭靠在女人的肩膀上，睡著了。', py: 'nan2 ren2 de5 tou2 kao4 zai4 nv3 ren2 de5 jian1 bang3 shang4, shui4 zhao2 le5.', en: 'The man\'s head was leaning on the woman\'s shoulder, fast asleep.', sense: 'lean against' },
            { s: '在家靠父母，出门靠朋友。', t: '在家靠父母，出門靠朋友。', py: 'zai4 jia1 kao4 fu4 mu3, chu1 men2 kao4 peng2 you5.', en: '"At home, rely on your parents; away from home, rely on your friends" — if there\'s anything I can help with, just ask.', sense: 'rely on' },
            { s: '没有一个人可以完全不靠别人而生活。', t: '沒有一個人可以完全不靠別人而生活。', py: 'mei2 you3 yi1 ge4 ren2 ke3 yi3 wan2 quan2 bu2 kao4 bie2 ren2 er2 sheng1 huo2.', en: 'No one can live without relying on others at all.', sense: 'rely on' },
            { s: '我的座位是靠窗的座位。', t: '我的座位是靠窗的座位。', py: 'wo3 de5 zuo4 wei4 shi4 kao4 chuang1 de5 zuo4 wei4.', en: 'My seat is a window seat.', sense: 'be near' },
            { s: '以后我一定要买一个靠海的房子。', t: '以後我一定要買一個靠海的房子。', py: 'yi3 hou4 wo3 yi2 ding4 yao4 mai3 yi2 ge4 kao4 hai3 de5 fang2 zi5.', en: 'In the future I\'m definitely going to buy a house near the sea.', sense: 'be near' }
          ]
        },
        {
          point: '居然',
          py: 'ju1 ran2',
          en: 'An adverb showing that something is unexpected or surprising — "unexpectedly, to one\'s surprise."',
          examples: [
            { s: '这么简单的题，你居然也不会做？', t: '這麼簡單的題，你居然也不會做？', py: 'zhe4 me5 jian3 dan1 de5 ti2, ni3 ju1 ran2 ye3 bu2 hui4 zuo4?', en: 'Such a simple problem, and you unexpectedly can\'t do it?' },
            { s: '没想到居然在这儿碰到你！', t: '沒想到居然在這兒碰到你！', py: 'mei2 xiang3 dao4 ju1 ran2 zai4 zher4 peng4 dao4 ni3!', en: 'I didn\'t expect to unexpectedly run into you here!' },
            { s: '这个女人为了不影响丈夫睡觉，居然放弃这次机会！', t: '這個女人為了不影響丈夫睡覺，居然放棄這次機會！', py: 'zhe4 ge4 nv3 ren2 wei4 le5 bu4 ying3 xiang3 zhang4 fu5 shui4 jiao4, ju1 ran2 fang4 qi4 zhe4 ci4 ji1 hui4!', en: 'This woman, just so as not to disturb her husband\'s sleep, unexpectedly gave up this opportunity!' }
          ]
        },
        {
          point: '如何 vs. 怎么',
          py: 'ru2 he2 · zen3 me5',
          en: 'Word discrimination. Both are pronouns used to ask about manner ("how"), e.g. 只有知道如何/怎么停止的人，才知道如何/怎么高速前进 ("only someone who knows how to stop knows how to go full speed"). But they split apart in three ways:',
          discrimination: [
            { ruhe: '1. Mostly used in written language.\ne.g. 该如何爱护我们的地球？("How should we take care of our planet?")', zenme: '1. Can be used in spoken language.\ne.g. 你今天是怎么来的？("How did you get here today?")' },
            { ruhe: '2. Cannot be used to ask about a REASON.', zenme: '2. Can be used to ask about a reason.\ne.g. 今天怎么这么冷？("Why is it so cold today?")' },
            { ruhe: '3. Can go at the very end of a sentence to ask for an opinion or ask about a situation.\ne.g. 最近身体如何？("How has your health been lately?")', zenme: '3. Can go at the start of a sentence to show surprise.\ne.g. 怎么，你不认识我了？！("What, you don\'t recognize me anymore?!")' }
          ],
          examples: []
        }
      ],
      collocations: [
        { verb: '抱怨', objects: '别人 / 妻子 / 餐厅的菜不好吃', en: 'to complain about someone / one\'s wife / a restaurant\'s food' },
        { verb: '爱护', objects: '环境 / 花草树木 / 公物 / 学生', en: 'to take good care of the environment / plants / public property / students' },
        { verb: '（电影 / 小说 / 生活）的', objects: '细节', en: 'the details of a movie / novel / life' },
        { verb: '（电台）的', objects: '记者 / 广播 / 新闻', en: 'a radio station\'s reporter / broadcast / news' },
        { verb: '简单（地）/ 详细（地）', objects: '对比', en: 'to compare simply / in detail' },
        { verb: '大声（地）/ 兴奋地 / 对他', objects: '喊', en: 'to shout loudly / excitedly / at him' },
        { verb: '伸（出来 / 进去 / 开…… / 到……）', objects: '— (中心语+补语)', en: 'to stretch out / in / open... / to... (verb + complement)' },
        { verb: '吵（醒 / 死了）', objects: '— (中心语+补语)', en: 'to make noise until [someone] wakes up / to death (verb + complement)' },
        { verb: '一项', objects: '运动 / 工作 / 任务 / 计划 / 技术 / 研究 / 调查 / 奖项', en: 'one (item of) sport / job / task / plan / technology / study / survey / award' }
      ],
      reflection: {
        prompt_en: 'Writing prompt from the book: write at least 100 characters on "理想的夫妻关系" (The Ideal Husband-Wife Relationship), trying to use this unit\'s vocabulary. Not graded by the app — just your own reflection.',
        questions: [
          '本文提到的三对夫妻中，哪对夫妻给你留下的印象最深？(Of the three couples, which left the deepest impression on you?)',
          '这对夫妻的什么地方让你感动？为什么？(What about them moved you? Why?)',
          '你认为理想的夫妻关系应该是什么样的？(What do you think an ideal marriage should look like?)'
        ]
      },
      cfu: [
        {
          q: 'Why didn\'t the third couple come inside for such a long time?',
          choices: [
            'They got lost on the way to the studio',
            'The wife didn\'t want to wake her sleeping husband',
            'They were arguing outside the door',
            'They had decided not to participate at all'
          ],
          answer: 1
        },
        {
          q: 'What did the woman do instead of speaking?',
          choices: [
            'She left the competition immediately',
            'She woke her husband up gently and apologized',
            'She wrote a note asking for quiet, using her left hand so she wouldn\'t disturb her husband',
            'She asked another couple to speak on her behalf'
          ],
          answer: 2
        },
        {
          q: 'Why was the husband so tired?',
          choices: [
            'He had been working a night shift',
            'He stayed up swatting mosquitoes so his wife wouldn\'t get bitten and woken up',
            'He couldn\'t sleep from excitement about the contest',
            'He had been studying all night'
          ],
          answer: 1
        },
        {
          q: 'What two new awards did the radio station create?',
          choices: [
            '"Most Romantic Couple" and "Best Story"',
            '"Through Thick and Thin Couple" for the 1st couple, "Mutual Respect Couple" for the 2nd',
            '"Mutual Respect Couple" for the 1st couple, "Through Thick and Thin Couple" for the 2nd',
            'Only one new award was created'
          ],
          answer: 1
        },
        {
          q: 'Which sentence uses 居然 correctly to show something was unexpected?',
          choices: [
            '居然没想到在这儿碰到你',
            '没想到居然在这儿碰到你',
            '在这儿碰到你居然没想到',
            '没想到在这儿居然的碰到你'
          ],
          answer: 1
        },
        {
          q: 'In "我的座位是靠窗的座位", what does 靠 mean here?',
          choices: [
            'to lean against',
            'to rely on, depend on',
            'to be near, close to',
            'to call out to'
          ],
          answer: 2
        },
        {
          q: '你的病都好了吗？现在感觉____？ (asking how you feel now, at the end of the sentence)',
          choices: ['如何', '怎么'],
          answer: 0
        },
        {
          q: '电视里广告太多让观众感到很不____。 ("too many ads makes viewers feel very ___")',
          choices: ['耐心', '耐烦'],
          answer: 1
        },
        {
          q: '这儿太____了，我们换个地方吧。 ("it\'s too ___ here, let\'s go somewhere else")',
          choices: ['吵', '吵架'],
          answer: 0
        },
        {
          q: '他这么年轻，没想到____是一位著名的作家。 ("he\'s so young, [surprisingly] he\'s a famous writer")',
          choices: ['居然', '仍然'],
          answer: 0
        },
        {
          q: '如果A是你B，你会C选择D呢？ — where does 如何 go? ("If it were you, how would you choose?")',
          choices: ['A', 'B', 'C', 'D'],
          answer: 2,
          explain: '如何选择呢 — 如何 goes right before the verb it modifies.'
        },
        {
          q: '你跟A你的同屋B吵C架D吗？ — where does 过 go? ("Have you ever fought with your roommate?")',
          choices: ['A', 'B', 'C', 'D'],
          answer: 2,
          explain: '吵架 is a verb-object compound, so 过 splits it: 吵过架.'
        },
        {
          q: 'A机会是要B自己努力C去D获得的。 — where does 靠 go? ("The opportunity has to be earned by relying on your own effort.")',
          choices: ['A', 'B', 'C', 'D'],
          answer: 1,
          explain: '机会是要靠自己努力去获得的 — 靠 goes right after 是要.'
        },
        {
          q: '请不要A把头B到车窗外C去D。 — where does 伸 go? ("Please don\'t stick your head out the car window.")',
          choices: ['A', 'B', 'C', 'D'],
          answer: 1,
          explain: '把头伸到车窗外去 — 伸 goes right after 把头.'
        }
      ]
    },
    {
      id: 'u2',
      lessonId: 'u2',
      title: { s: '留串钥匙给父母', t: '留串鑰匙給父母' },
      en: 'Leaving a Bunch of Keys to Our Parents',
      source: 'Adapted from 《中国电视报》(China TV Weekly), by 陈程 — HSK 标准教程 5 (上), Unit 2',
      reading: {
        paragraphs: [
          {
            s: '父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。因此长年以来，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。',
            t: '父母一輩子住在農村老家，對老屋的感情，就像沒斷奶的孩子對母親一樣。因此長年以來，父母很少離開老屋，儘管姥姥、舅舅和姑姑都在城裡，父母也堅決不在城裡住。',
            en: 'My parents have lived their whole lives in their old home in the countryside; their feelings for that old house are just like an unweaned child\'s feelings for its mother. Because of this, for years they have rarely left the old house — even though my grandmother, uncle, and aunt all live in the city, my parents have firmly refused to live there too.'
          },
          {
            s: '去年，在我和妻子的努力下，我们终于用打工挣的钱，在县里买了一套新房。新房装修完，父母第一次走进新房时，高兴得不得了。妻子提出留一串钥匙给父母，可他们拒绝了。那天，父亲喝醉了，等他醒时，天色已晚。我和妻子强烈留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。',
            t: '去年，在我和妻子的努力下，我們終於用打工掙的錢，在縣裡買了一套新房。新房裝修完，父母第一次走進新房時，高興得不得了。妻子提出留一串鑰匙給父母，可他們拒絕了。那天，父親喝醉了，等他醒時，天色已晚。我和妻子強烈留父母在新房住一夜，第二天再回，但他們仍堅持坐上了最後一趟回老家的車。',
            en: 'Last year, through my wife\'s and my effort, we finally used the money we\'d earned working to buy a new place in the county town. Once the new place was decorated, the first time my parents walked in they were happier than words could say. My wife suggested leaving a set of keys with my parents, but they refused. That day, my father got drunk, and by the time he woke up it was already late. My wife and I urged them strongly to stay the night in the new place and go back the next day, but they still insisted on catching the last bus back to the old home.'
          },
          {
            s: '一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。临走那天，父亲从老家赶来送我们。父亲悄悄把我拉到一边说："你妈说了，你还是留一串新房的钥匙给我们，要是我和你妈什么时候想来了，就来住上几天，顺便给你们晒晒被子，打扫打扫卫生。"父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。',
            t: '一段時間後，我和妻子又準備去外地打工，新房只能上鎖空著。臨走那天，父親從老家趕來送我們。父親悄悄把我拉到一邊說：「你媽說了，你還是留一串新房的鑰匙給我們，要是我和你媽什麼時候想來了，就來住上幾天，順便給你們曬曬被子，打掃打掃衛生。」父親說這話時，輕聲細語，還紅著臉，像個害羞的孩子。',
            en: 'After a while, my wife and I were getting ready to go work away from home again, so the new place would just have to sit locked and empty. On the day we were about to leave, Father came all the way from the old home to see us off. He quietly pulled me aside and said: "Your mother says you should leave us a set of keys to the new place after all — if she and I ever feel like coming, we can stay a few days, and while we\'re at it, air out your quilts and clean up a bit." As he said this, he spoke softly, his face turning red, like a shy child.'
          },
          {
            s: '转眼又是半年，我们回家时是一个深冬的夜里。下了长途车，儿子被冻得大哭。我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。来到楼下，抬头一看，却发现自家亮着灯光。上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来：室内打扫得干干净净，暖气开着，水已温热，卧室床上的被子已铺好，厨房里飘来阵阵饭菜香……',
            t: '轉眼又是半年，我們回家時是一個深冬的夜裡。下了長途車，兒子被凍得大哭。我和妻子想像著打開家門滿是灰塵、冷冷清清的景象，覺得心裡發寒。來到樓下，抬頭一看，卻發現自家亮著燈光。上了樓，開門的竟是微笑著的父母，溫暖的氣息立刻撲面而來：室內打掃得乾乾淨淨，暖氣開著，水已溫熱，臥室床上的被子已鋪好，廚房裡飄來陣陣飯菜香……',
            en: 'In the blink of an eye, another half year had passed, and we came home late one deep-winter night. After getting off the long-distance bus, our son was crying hard from the cold. My wife and I pictured opening our front door onto a dusty, cold, empty scene, and felt a chill in our hearts. But when we got downstairs and looked up, we found our own windows lit up. We went upstairs, and the ones who opened the door turned out to be my smiling parents — a wave of warmth hit us at once: the rooms were spotlessly clean, the heat was on, the water was already warm, the quilt on the bedroom bed was already laid out, and waves of cooking smells drifted from the kitchen...'
          },
          {
            s: '父亲说："你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。"原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！我鼻子一酸，流下了热泪……',
            t: '父親說：「你媽昨天接到電話，知道你們今晚回來，今天來新房忙了一天了。」原來父母要我留下串鑰匙，只是為了讓我們回來時，能立刻感受到家的溫暖！我鼻子一酸，流下了熱淚……',
            en: 'Father said: "Your mother got a call yesterday, found out you were coming home tonight, so she came to the new place today and worked hard all day." It turned out that the whole reason my parents wanted me to leave them a set of keys was so that when we came back, we could feel the warmth of home right away! My nose stung, and hot tears rolled down my face...'
          }
        ]
      },
      grammar: [
        {
          point: '以来',
          py: 'yi3 lai2',
          en: '"Since" — a noun that marks a period of time running from some point in the past up to now.',
          examples: [
            { s: '改革开放以来，中国发生了巨大的变化。', t: '改革開放以來，中國發生了巨大的變化。', py: 'gai3 ge2 kai1 fang4 yi3 lai2, zhong1 guo2 fa1 sheng1 le5 ju4 da4 de5 bian4 hua4.', en: 'Since the reform and opening-up, China has undergone tremendous changes.' },
            { s: '因此长年以来，父母很少离开老屋。', t: '因此長年以來，父母很少離開老屋。', py: 'yin1 ci3 chang2 nian2 yi3 lai2, fu4 mu3 hen3 shao3 li2 kai1 lao3 wu1.', en: 'Because of this, for years my parents have rarely left the old house.' },
            { s: '一直以来，"80后"这个词儿都含有年轻的味道。', t: '一直以來，「80後」這個詞兒都含有年輕的味道。', py: 'yi4 zhi2 yi3 lai2, ba1 ling2 hou4 zhe4 ge4 cir2 dou1 han2 you3 nian2 qing1 de5 wei4 dao5.', en: 'All along, the term "post-80s" has carried a youthful connotation.' }
          ]
        },
        {
          point: '临',
          py: 'lin2',
          en: 'A verb meaning "to be close to, to face." Also used as a preposition, 临…(时/前), meaning "just before some action happens."',
          examples: [
            { s: '我想买一套不临街的房子，这样不会太吵。', t: '我想買一套不臨街的房子，這樣不會太吵。', py: 'wo3 xiang3 mai3 yi2 tao4 bu4 lin2 jie1 de5 fang2 zi5, zhe4 yang4 bu2 hui4 tai4 chao3.', en: 'I want to buy a place that doesn\'t face the street, so it won\'t be too noisy.', sense: 'face, overlook' },
            { s: '临江新修了一条路，晚饭后很多人都去那儿散步。', t: '臨江新修了一條路，晚飯後很多人都去那兒散步。', py: 'lin2 jiang1 xin1 xiu1 le5 yi4 tiao2 lu4, wan3 fan4 hou4 hen3 duo1 ren2 dou1 qu4 nar4 san4 bu4.', en: 'A new road was built along the river, and after dinner a lot of people go there to walk.', sense: 'face, overlook' },
            { s: '这是我临离开北京的时候买的。', t: '這是我臨離開北京的時候買的。', py: 'zhe4 shi4 wo3 lin2 li2 kai1 bei3 jing1 de5 shi2 hou4 mai3 de5.', en: 'I bought this right before I left Beijing.', sense: 'just before' },
            { s: '临走那天，父亲从老家赶来送我们。', t: '臨走那天，父親從老家趕來送我們。', py: 'lin2 zou3 na4 tian1, fu4 qin1 cong2 lao3 jia1 gan3 lai2 song4 wo3 men5.', en: 'On the day we were about to leave, Father came all the way from the old home to see us off.', sense: 'just before' }
          ]
        },
        {
          point: '立刻',
          py: 'li4 ke4',
          en: '"立刻 + verb" means "at once" — it emphasizes an action happening right after a previous one.',
          examples: [
            { s: '上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来。', t: '上了樓，開門的竟是微笑著的父母，溫暖的氣息立刻撲面而來。', py: 'shang4 le5 lou2, kai1 men2 de5 jing4 shi4 wei1 xiao4 zhe5 de5 fu4 mu3, wen1 nuan3 de5 qi4 xi1 li4 ke4 pu1 mian4 er2 lai2.', en: 'Going upstairs, it was surprisingly my smiling parents who opened the door, and a wave of warmth hit me at once.' },
            { s: '原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！', t: '原來父母要我留下串鑰匙，只是為了讓我們回來時，能立刻感受到家的溫暖！', py: 'yuan2 lai2 fu4 mu3 yao4 wo3 liu2 xia4 chuan4 yao4 shi5, zhi3 shi4 wei4 le5 rang4 wo3 men5 hui2 lai2 shi2, neng2 li4 ke4 gan3 shou4 dao4 jia1 de5 wen1 nuan3!', en: 'It turned out my parents wanted me to leave them a set of keys just so that when we came back, we could feel the warmth of home right away!' },
            { s: '那两只羊一见到青草，就立刻去吃草了，哪还有心思打架呢？', t: '那兩隻羊一見到青草，就立刻去吃草了，哪還有心思打架呢？', py: 'na4 liang3 zhi1 yang2 yi2 jian4 dao4 qing1 cao3, jiu4 li4 ke4 qu4 chi1 cao3 le5, na3 hai2 you3 xin1 si1 da3 jia4 ne5?', en: 'As soon as those two goats saw the fresh grass, they immediately went to eat it — who had time to think about fighting anymore?' }
          ]
        },
        {
          point: '悄悄 vs. 偷偷',
          py: 'qiao1 qiao1 · tou1 tou1',
          en: 'Word discrimination. Both are adverbs meaning to do something without letting others notice, e.g. 他悄悄/偷偷地走了出去 ("He quietly/secretly walked out").',
          discrimination: [
            { ruhe: '悄悄 emphasizes that the SOUND is very quiet.\ne.g. 父亲悄悄把我拉到一边说话。("Father quietly pulled me aside to talk.")', zenme: '偷偷 emphasizes not wanting the ACTION itself to be known or discovered.\ne.g. 他谁也没告诉，偷偷去旅行了。("He told no one and secretly went on a trip.")' }
          ],
          examples: []
        }
      ],
      collocations: [
        { verb: '断', objects: '水 / 电 / 联系', en: 'to cut off water / electricity / contact' },
        { verb: '晒', objects: '被子 / 衣服 / 太阳', en: 'to air out a quilt / sun-dry clothes / sunbathe' },
        { verb: '强烈的', objects: '阳光 / 感情 / 对比', en: 'strong sunlight / strong feelings / a stark contrast' },
        { verb: '长途', objects: '旅行 / 汽车 / 电话', en: 'a long-distance trip / bus / phone call' },
        { verb: '一辈子', objects: '住在农村 / 没出过国', en: 'to live in the countryside one\'s whole life / to never leave the country in one\'s life' },
        { verb: '坚决', objects: '反对 / 改正', en: 'to firmly oppose / to firmly correct' },
        { verb: '打 / 挣 / 摔', objects: '断', en: 'to break something by hitting it / struggling free / falling' },
        { verb: '热得 / 累得 / 急得 / 兴奋得 / 热闹得', objects: '不得了', en: 'extremely hot / tired / anxious / excited / lively' },
        { verb: '一套', objects: '房子 / 家具 / 餐具 / 邮票 / 西服', en: 'a set of house / furniture / tableware / stamps / suit' },
        { verb: '一阵', objects: '风 / 雨 / 歌声 / 香味', en: 'a gust of wind / burst of rain / burst of singing / waft of fragrance' }
      ],
      reflection: {
        prompt_en: 'Writing prompt from the book: write at least 100 characters titled "最深的爱" (The Deepest Love) — give your view on how the parents in the story behaved, and describe your own relationship with your parents. Try to use this unit\'s vocabulary. Not graded by the app — just your own reflection.',
        questions: [
          '你同意"父母对子女的爱是无私和伟大的"这种说法吗？(Do you agree that "a parent\'s love for their child is selfless and great"?)',
          '你觉得课文中的这对父母一开始拒绝接受孩子新房钥匙的原因是什么？(Why do you think the parents in the story initially refused the keys?)',
          '请说说你记得最清楚的父母关心你、爱你的一件事。(Describe a moment you remember most clearly of your parents caring for you.)'
        ]
      },
      cfu: [
        {
          q: 'Why do the parents refuse to live in the city, even though relatives are there?',
          choices: [
            'They can\'t afford city housing',
            'They don\'t want to leave their old family home in the countryside',
            'They don\'t get along with their relatives',
            'The city is too far away to travel to'
          ],
          answer: 1
        },
        {
          q: 'What did Father quietly tell the son right before leaving (临走那天)?',
          choices: [
            'That they were moving to the city after all',
            'That the son should leave them a set of keys, so they could visit, air out the quilts, and clean',
            'That he didn\'t like the new house',
            'That the son should stop working away from home'
          ],
          answer: 1
        },
        {
          q: 'Why were the son and his wife dreading arriving home that winter night?',
          choices: [
            'They imagined the house would be dusty, cold, and empty since no one had been there',
            'They thought they had lost their keys',
            'They were worried about the neighbors',
            'They thought the heat would be broken'
          ],
          answer: 0
        },
        {
          q: 'What did they actually find when they got home?',
          choices: [
            'An empty, dusty house exactly as they feared',
            'Their parents there, smiling, having cleaned, warmed, and cooked for them',
            'A note from the parents saying they couldn\'t come',
            'Neighbors waiting to welcome them'
          ],
          answer: 1
        },
        {
          q: 'According to the ending, why did the parents really want a set of keys?',
          choices: [
            'So they could sell the house if needed',
            'So they could move in permanently',
            'So that whenever the son\'s family came home, they could feel the warmth of home right away',
            'So they could rent it out while the son was away'
          ],
          answer: 2
        },
        {
          q: '临走那天，父亲从老家赶来送我们。 — what does 临 mean here?',
          choices: ['about to, just before', 'to face, overlook', 'to arrive', 'to leave permanently'],
          answer: 0
        },
        {
          q: '因此长年以来，父母很少离开老屋。 — what does 以来 mark?',
          choices: ['a location', 'a period of time up to now', 'a comparison', 'a cause'],
          answer: 1
        },
        {
          q: '温暖的气息立刻扑面而来。 — what does 立刻 mean?',
          choices: ['immediately, at once', 'occasionally', 'almost', 'slowly'],
          answer: 0
        },
        {
          q: '他谁也没告诉，偷偷去旅行了。 — why 偷偷 here rather than 悄悄?',
          choices: [
            'Because it emphasizes hiding the ACTION itself from others, not just being quiet',
            'Because 偷偷 is more formal',
            'Because 悄悄 is only used for children',
            'There\'s no real difference'
          ],
          answer: 0
        },
        {
          q: '他的态度很____，恐怕不会改变主意了。 ("His attitude is very ___, he probably won\'t change his mind.")',
          choices: ['坚决 (resolute)', '坚持 (to persist, a verb)'],
          answer: 0
        },
        {
          q: '只有一个星期了，春节____就要到了。 ("Only one week left, Spring Festival is ___ arriving.")',
          choices: ['立刻', '马上'],
          answer: 1,
          explain: '立刻 pairs with a verb right after it (立刻+动词); 马上就要...了 is the natural pattern here.'
        },
        {
          q: '最近气温太低，河里的水都被____住了。 ("It\'s been so cold, the river water has ___ over.")',
          choices: ['冻 (to freeze — verb)', '冷 (cold — adjective)'],
          answer: 0
        },
        {
          q: '女服务员给了我一个____的微笑。 ("The waitress gave me a ___ smile.")',
          choices: ['暖和 (physically warm — weather, clothes)', '温暖 (emotionally warm)'],
          answer: 1
        },
        {
          q: '虽然她全身A瘫痪了，但B我会照顾C她D。 — where does 一辈子 go? ("Even though she\'s paralyzed, I\'ll take care of her for life.")',
          choices: ['A', 'B', 'C', 'D'],
          answer: 1,
          explain: '我会一辈子照顾她 — 一辈子 goes right before the verb it modifies, like in the collocation table (一辈子 + 住在农村).'
        },
        {
          q: '他A病了，B老师和同学们C把他D送进了医院。 — where does 立刻 go? ("He got sick, and the teacher and classmates immediately took him to the hospital.")',
          choices: ['A', 'B', 'C', 'D'],
          answer: 2,
          explain: '老师和同学们立刻把他送进了医院 — 立刻 goes right before a 把-construction.'
        },
        {
          q: 'A花园里B飘来C花D香。 — where does 一阵 go? ("A whiff of flower fragrance drifted from the garden.")',
          choices: ['A', 'B', 'C', 'D'],
          answer: 2,
          explain: '飘来一阵花香 — 一阵 goes right before the noun it counts.'
        },
        {
          q: '妈妈说她哥哥明天会从老家来，我还从来没见过这个____呢。 ("Mom says her older brother is coming tomorrow — I\'ve never met this ___.")',
          choices: ['舅舅 (mother\'s brother)', '姑姑 (father\'s sister)'],
          answer: 0
        },
        {
          q: '你怎么这么____啊？好朋友借点儿钱都不愿意。 ("How can you be so ___? You won\'t even lend a good friend a little money.")',
          choices: ['小气 (stingy)', '坦率 (frank)'],
          answer: 0
        }
      ]
    }
  ],

  /* FILL THE BLANK: short phrases built from this unit's vocabulary and reading passage.
     b = [start, length] pairs (character index into `s`), each one a puzzle (write the missing characters). */
  fill: [
    { s: '电台要选出一对最恩爱的夫妻', t: '電台要選出一對最恩愛的夫妻', py: 'dian4 tai2 yao4 xuan3 chu1 yi1 dui4 zui4 en1 ai4 de5 fu1 qi1', en: 'The radio station wants to select the most loving couple.', b: [[8, 2]] },
    { s: '她也想过要自杀', t: '她也想過要自殺', py: 'ta1 ye3 xiang3 guo4 yao4 zi4 sha1', en: 'She had even thought about committing suicide.', b: [[5, 2]] },
    { s: '他们从来没为任何事吵过架', t: '他們從來沒為任何事吵過架', py: 'ta1 men5 cong2 lai2 mei2 wei4 ren4 he2 shi4 chao3 guo4 jia4', en: 'They never once quarreled over anything.', b: [[9, 3]] },
    { s: '别人都觉得她的丈夫会跟她离婚', t: '別人都覺得她的丈夫會跟她離婚', py: 'bie2 ren2 dou1 jue2 de5 ta1 de5 zhang4 fu5 hui4 gen1 ta1 li2 hun1', en: 'Everyone thought her husband would divorce her.', b: [[12, 2]] },
    { s: '评委们听了都很感动', t: '評委們聽了都很感動', py: 'ping2 wei3 men5 ting1 le5 dou1 hen3 gan3 dong4', en: 'The judges were all very touched when they heard it.', b: [[0, 2]] },
    { s: '他们一直相敬如宾', t: '他們一直相敬如賓', py: 'ta1 men5 yi1 zhi2 xiang1 jing4 ru2 bin1', en: 'They always treated each other with the utmost respect.', b: [[4, 4]] },
    { s: '评委们等得有些不耐烦', t: '評委們等得有些不耐煩', py: 'ping2 wei3 men5 deng3 de5 you3 xie1 bu4 nai4 fan2', en: 'The judges got a little impatient waiting.', b: [[7, 3]] },
    { s: '她伸出手指做了个动作', t: '她伸出手指做了個動作', py: 'ta1 shen1 chu1 shou3 zhi3 zuo4 le5 ge4 dong4 zuo4', en: 'She stretched out a finger and made a gesture.', b: [[3, 2]] },
    { s: '她的字写得歪歪扭扭', t: '她的字寫得歪歪扭扭', py: 'ta1 de5 zi4 xie3 de5 wai1 wai1 niu3 niu3', en: 'Her handwriting came out crooked and shaky.', b: [[5, 4]] },
    { s: '他把纸条递给了评委', t: '他把紙條遞給了評委', py: 'ta1 ba3 zhi3 tiao2 di4 gei3 le5 ping2 wei3', en: 'He handed the note over to the judges.', b: [[4, 1]] },
    { s: '她被蚊子叮醒了', t: '她被蚊子叮醒了', py: 'ta1 bei4 wen2 zi5 ding1 xing3 le5', en: 'She was bitten awake by a mosquito.', b: [[2, 2]] },
    { s: '我怕老婆被吵醒', t: '我怕老婆被吵醒', py: 'wo3 pa4 lao3 po5 bei4 chao3 xing3', en: 'I was afraid my wife would be woken up by the noise.', b: [[2, 2]] },
    { s: '她从小就爱护小动物', t: '她從小就愛護小動物', py: 'ta1 cong2 xiao3 jiu4 ai4 hu4 xiao3 dong4 wu4', en: 'She\'s taken care of small animals since childhood.', b: [[3, 2]] },
    { s: '下面哪一项是正确的', t: '下面哪一項是正確的', py: 'xia4 mian4 na3 yi4 xiang4 shi4 zheng4 que4 de5', en: 'Which one of the following is correct?', b: [[4, 1]] },
    { s: '请大家耐心地等待一会儿', t: '請大家耐心地等待一會兒', py: 'qing3 da4 jia1 nai4 xin1 de5 deng3 dai4 yi4 hui4 er5', en: 'Please wait patiently for a while.', b: [[6, 2]] },
    { s: '请不要催他', t: '請不要催他', py: 'qing3 bu2 yao4 cui1 ta1', en: 'Please don\'t rush him.', b: [[3, 1]] },
    { s: '请把那本杂志递给我', t: '請把那本雜誌遞給我', py: 'qing3 ba3 na4 ben3 za2 zhi4 di4 gei3 wo3', en: 'Please hand me that magazine.', b: [[6, 1]] },
    { s: '火车快到的时候你喊我一声', t: '火車快到的時候你喊我一聲', py: 'huo3 che1 kuai4 dao4 de5 shi2 hou4 ni3 han3 wo3 yi1 sheng1', en: 'When the train is about to arrive, give me a shout.', b: [[8, 1]] },
    { s: '不要总是抱怨别人', t: '不要總是抱怨別人', py: 'bu2 yao4 zong3 shi4 bao4 yuan4 bie2 ren2', en: 'Don\'t always complain about others.', b: [[4, 2]] },
    { s: '你的肩膀一边高一边低', t: '你的肩膀一邊高一邊低', py: 'ni3 de5 jian1 bang3 yi4 bian1 gao1 yi2 bian4 di1', en: 'Your shoulders are uneven, one higher than the other.', b: [[2, 2]] },
    { s: '早上起来伸个懒腰真舒服', t: '早上起來伸個懶腰真舒服', py: 'zao3 shang4 qi3 lai2 shen1 ge4 lan3 yao1 zhen1 shu1 fu5', en: 'Getting up in the morning and stretching your back feels great!', b: [[7, 1]] },
    { s: '他长着两条又黑又粗的眉毛', t: '他長著兩條又黑又粗的眉毛', py: 'ta1 zhang3 zhe5 liang3 tiao2 you4 hei1 you4 cu1 de5 mei2 mao5', en: 'He has thick black eyebrows.', b: [[10, 2]] },
    { s: '讲了一天的课老师的嗓子都疼了', t: '講了一天的課老師的嗓子都疼了', py: 'jiang3 le5 yi4 tian1 de5 ke4 lao3 shi1 de5 sang3 zi5 dou1 teng2 le5', en: 'After lecturing all day, the teacher\'s throat was sore.', b: [[9, 2]] },
    { s: '父母一辈子住在农村老家', t: '父母一輩子住在農村老家', py: 'fu4 mu3 yi2 bei4 zi5 zhu4 zai4 nong2 cun1 lao3 jia1', en: 'My parents have lived their whole lives in their old home in the countryside.', b: [[2, 3]] },
    { s: '父母很少离开老屋', t: '父母很少離開老屋', py: 'fu4 mu3 hen3 shao3 li2 kai1 lao3 wu1', en: 'My parents rarely leave the old house.', b: [[6, 2]] },
    { s: '我们在县里买了新房', t: '我們在縣裡買了新房', py: 'wo3 men5 zai4 xian4 li3 mai3 le5 xin1 fang2', en: 'We bought a new place in the county town.', b: [[3, 1]] },
    { s: '我们买了一套新房', t: '我們買了一套新房', py: 'wo3 men5 mai3 le5 yi2 tao4 xin1 fang2', en: 'We bought a new place (measure word 套).', b: [[4, 1]] },
    { s: '父亲那天喝醉了', t: '父親那天喝醉了', py: 'fu4 qin1 na4 tian1 he1 zui4 le5', en: 'Father got drunk that day.', b: [[4, 1]] },
    { s: '新房只能上锁空着', t: '新房只能上鎖空著', py: 'xin1 fang2 zhi3 neng2 shang4 suo3 kong1 zhe5', en: 'The new place could only sit locked and empty.', b: [[4, 1]] },
    { s: '父亲悄悄把我拉到一边', t: '父親悄悄把我拉到一邊', py: 'fu4 qin1 qiao1 qiao1 ba3 wo3 la1 dao4 yi4 bian1', en: 'Father quietly pulled me aside.', b: [[2, 2]] },
    { s: '顺便给你们晒晒被子', t: '順便給你們曬曬被子', py: 'shun4 bian4 gei3 ni3 men5 shai4 shai4 bei4 zi5', en: 'And while at it, air out your quilts.', b: [[7, 2]] },
    { s: '儿子被冻得大哭', t: '兒子被凍得大哭', py: 'er2 zi5 bei4 dong4 de5 da4 ku1', en: 'Our son was crying hard from the cold.', b: [[3, 1]] },
    { s: '我们想象着打开家门', t: '我們想像著打開家門', py: 'wo3 men5 xiang3 xiang4 zhe5 da3 kai1 jia1 men2', en: 'We imagined opening the front door.', b: [[2, 2]] },
    { s: '家里满是灰尘', t: '家裡滿是灰塵', py: 'jia1 li3 man3 shi4 hui1 chen2', en: 'The house was covered in dust.', b: [[4, 2]] },
    { s: '自家亮着灯光', t: '自家亮著燈光', py: 'zi4 jia1 liang4 zhe5 deng1 guang1', en: 'Our own windows were lit up.', b: [[2, 1]] },
    { s: '开门的是微笑着的父母', t: '開門的是微笑著的父母', py: 'kai1 men2 de5 shi4 wei1 xiao4 zhe5 de5 fu4 mu3', en: 'The ones who opened the door were my smiling parents.', b: [[4, 2]] },
    { s: '温暖的气息立刻扑面而来', t: '溫暖的氣息立刻撲面而來', py: 'wen1 nuan3 de5 qi4 xi1 li4 ke4 pu1 mian4 er2 lai2', en: 'A wave of warmth hit us at once.', b: [[5, 2]] },
    { s: '卧室床上的被子已铺好', t: '臥室床上的被子已鋪好', py: 'wo4 shi4 chuang2 shang4 de5 bei4 zi5 yi3 pu1 hao3', en: 'The quilt on the bedroom bed was already laid out.', b: [[0, 2]] },
    { s: '厨房里飘来阵阵饭菜香', t: '廚房裡飄來陣陣飯菜香', py: 'chu2 fang2 li3 piao1 lai2 zhen4 zhen4 fan4 cai4 xiang1', en: 'Waves of cooking smells drifted from the kitchen.', b: [[3, 1]] },
    { s: '我立刻感受到家的温暖', t: '我立刻感受到家的溫暖', py: 'wo3 li4 ke4 gan3 shou4 dao4 jia1 de5 wen1 nuan3', en: 'I could immediately feel the warmth of home.', b: [[3, 2]] },
    { s: '我感动得流泪了', t: '我感動得流淚了', py: 'wo3 gan3 dong4 de5 liu2 lei4 le5', en: 'I was so moved I shed tears.', b: [[4, 2]] },
    { s: '我穿这套西服去电视台', t: '我穿這套西服去電視台', py: 'wo3 chuan1 zhe4 tao4 xi1 fu2 qu4 dian4 shi4 tai2', en: 'I\'m wearing this suit to go on TV.', b: [[2, 1]] },
    { s: '我不能想象她喝醉了会是什么样子', t: '我不能想像她喝醉了會是什麼樣子', py: 'wo3 bu4 neng2 xiang3 xiang4 ta1 he1 zui4 le5 hui4 shi4 shen2 me5 yang4 zi5', en: 'I can\'t imagine what she\'d be like drunk.', b: [[3, 2]] },
    { s: '国际长途电话很贵', t: '國際長途電話很貴', py: 'guo2 ji4 chang2 tu2 dian4 hua4 hen3 gui4', en: 'International long-distance calls are expensive.', b: [[2, 2]] },
    { s: '同学们强烈要求出去活动', t: '同學們強烈要求出去活動', py: 'tong2 xue2 men5 qiang2 lie4 yao1 qiu2 chu1 qu4 huo2 dong4', en: 'The students strongly requested going out for an activity.', b: [[3, 2]] },
    { s: '房门被反锁上了', t: '房門被反鎖上了', py: 'fang2 men2 bei4 fan3 suo3 shang4 le5', en: 'The door had been locked from inside.', b: [[3, 1]] },
    { s: '他把腿摔断了', t: '他把腿摔斷了', py: 'ta1 ba3 tui3 shuai1 duan4 le5', en: 'He broke his leg falling.', b: [[3, 1]] },
    { s: '我想去打工两个月', t: '我想去打工兩個月', py: 'wo3 xiang3 qu4 da3 gong1 liang3 ge4 yue4', en: 'I want to go work for two months.', b: [[3, 2]] },
    { s: '打工挣点儿钱', t: '打工掙點兒錢', py: 'da3 gong1 zheng4 dianr3 qian2', en: 'work to earn a little money.', b: [[2, 1]] },
    { s: '这次来北京你们照顾得非常周到', t: '這次來北京你們照顧得非常周到', py: 'zhe4 ci4 lai2 bei3 jing1 ni3 men5 zhao4 gu4 de5 fei1 chang2 zhou1 dao4', en: 'You took such thoughtful care of us this time in Beijing.', b: [[12, 2]] }
  ],

  /* SENTENCE BUILDER: complete example sentences from this unit's grammar notes, cut into chunks to put back in order. */
  sentences: [
    { chunks: ['评委', '叫', '第一对夫妻', '说说', '他俩', '是', '如何', '恩爱', '的'], tchunks: ['評委', '叫', '第一對夫妻', '說說', '他倆', '是', '如何', '恩愛', '的'], py: 'ping2 wei3 jiao4 di4 yi1 dui4 fu1 qi1 shuo1 shuo1 ta1 lia3 shi4 ru2 he2 en1 ai4 de5', en: 'The judges asked the first couple to describe how they loved each other so devotedly.' },
    { chunks: ['他们的', '月收入', '情况', '如何'], tchunks: ['他們的', '月收入', '情況', '如何'], py: 'ta1 men5 de5 yue4 shou1 ru4 qing2 kuang4 ru2 he2', en: 'What is their monthly income situation like?' },
    { chunks: ['王老师', '喜欢', '靠着', '桌子', '讲课'], tchunks: ['王老師', '喜歡', '靠著', '桌子', '講課'], py: 'wang2 lao3 shi1 xi3 huan5 kao4 zhe5 zhuo1 zi5 jiang3 ke4', en: 'Teacher Wang likes to lean against the desk while lecturing.' },
    { chunks: ['男人的', '头', '靠在', '女人的', '肩膀上'], tchunks: ['男人的', '頭', '靠在', '女人的', '肩膀上'], py: 'nan2 ren2 de5 tou2 kao4 zai4 nv3 ren2 de5 jian1 bang3 shang4', en: 'The man\'s head was leaning on the woman\'s shoulder.' },
    { chunks: ['我的座位', '是', '靠窗的', '座位'], tchunks: ['我的座位', '是', '靠窗的', '座位'], py: 'wo3 de5 zuo4 wei4 shi4 kao4 chuang1 de5 zuo4 wei4', en: 'My seat is a window seat.' },
    { chunks: ['这么简单的题', '你', '居然', '也不会', '做'], tchunks: ['這麼簡單的題', '你', '居然', '也不會', '做'], py: 'zhe4 me5 jian3 dan1 de5 ti2 ni3 ju1 ran2 ye3 bu2 hui4 zuo4', en: 'Such a simple problem, and you unexpectedly can\'t do it?' },
    { chunks: ['没想到', '居然', '在这儿', '碰到你'], tchunks: ['沒想到', '居然', '在這兒', '碰到你'], py: 'mei2 xiang3 dao4 ju1 ran2 zai4 zher4 peng4 dao4 ni3', en: 'I didn\'t expect to unexpectedly run into you here!' },
    { chunks: ['这个女人', '居然', '放弃了', '这次机会'], tchunks: ['這個女人', '居然', '放棄了', '這次機會'], py: 'zhe4 ge4 nv3 ren2 ju1 ran2 fang4 qi4 le5 zhe4 ci4 ji1 hui4', en: 'This woman unexpectedly gave up this opportunity.' },
    { chunks: ['改革开放', '以来', '中国', '发生了', '巨大的变化'], tchunks: ['改革開放', '以來', '中國', '發生了', '巨大的變化'], py: 'gai3 ge2 kai1 fang4 yi3 lai2 zhong1 guo2 fa1 sheng1 le5 ju4 da4 de5 bian4 hua4', en: 'Since the reform and opening-up, China has undergone tremendous changes.' },
    { chunks: ['因此', '长年以来', '父母', '很少', '离开', '老屋'], tchunks: ['因此', '長年以來', '父母', '很少', '離開', '老屋'], py: 'yin1 ci3 chang2 nian2 yi3 lai2 fu4 mu3 hen3 shao3 li2 kai1 lao3 wu1', en: 'Because of this, for years my parents have rarely left the old house.' },
    { chunks: ['我', '想买', '一套', '不临街的', '房子'], tchunks: ['我', '想買', '一套', '不臨街的', '房子'], py: 'wo3 xiang3 mai3 yi2 tao4 bu4 lin2 jie1 de5 fang2 zi5', en: 'I want to buy a place that doesn\'t face the street.' },
    { chunks: ['临江', '新修了', '一条路'], tchunks: ['臨江', '新修了', '一條路'], py: 'lin2 jiang1 xin1 xiu1 le5 yi4 tiao2 lu4', en: 'A new road was built along the river.' },
    { chunks: ['这是', '我', '临离开北京的时候', '买的'], tchunks: ['這是', '我', '臨離開北京的時候', '買的'], py: 'zhe4 shi4 wo3 lin2 li2 kai1 bei3 jing1 de5 shi2 hou4 mai3 de5', en: 'I bought this right before I left Beijing.' },
    { chunks: ['临走那天', '父亲', '从老家', '赶来', '送我们'], tchunks: ['臨走那天', '父親', '從老家', '趕來', '送我們'], py: 'lin2 zou3 na4 tian1 fu4 qin1 cong2 lao3 jia1 gan3 lai2 song4 wo3 men5', en: 'On the day we were about to leave, Father came all the way from the old home to see us off.' },
    { chunks: ['温暖的气息', '立刻', '扑面而来'], tchunks: ['溫暖的氣息', '立刻', '撲面而來'], py: 'wen1 nuan3 de5 qi4 xi1 li4 ke4 pu1 mian4 er2 lai2', en: 'A wave of warmth hit us at once.' },
    { chunks: ['那两只羊', '一见到青草', '就立刻', '去吃草了'], tchunks: ['那兩隻羊', '一見到青草', '就立刻', '去吃草了'], py: 'na4 liang3 zhi1 yang2 yi2 jian4 dao4 qing1 cao3 jiu4 li4 ke4 qu4 chi1 cao3 le5', en: 'As soon as those two goats saw the fresh grass, they immediately went to eat it.' }
  ]
};
