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
    },
    {
      "id": "u3",
      "number": 3,
      "sticker": "⛵",
      "accent": "#34c9a3",
      "title": {
        "s": "人生有选择，一切可改变",
        "t": "人生有選擇，一切可改變"
      },
      "py": "ren2 sheng1 you3 xuan3 ze2 yi2 qie4 ke3 gai3 bian4",
      "en": "Having Choices in Life Makes Change Possible",
      "characters": [],
      "words": [
        {
          "s": "人生",
          "t": "人生",
          "py": "ren2 sheng1",
          "en": "life"
        },
        {
          "s": "工人",
          "t": "工人",
          "py": "gong1 ren2",
          "en": "worker"
        },
        {
          "s": "稳定",
          "t": "穩定",
          "py": "wen3 ding4",
          "en": "stable"
        },
        {
          "s": "待遇",
          "t": "待遇",
          "py": "dai4 yu4",
          "en": "pay and perks"
        },
        {
          "s": "发愁",
          "t": "發愁",
          "py": "fa1 chou2",
          "en": "to worry"
        },
        {
          "s": "平静",
          "t": "平靜",
          "py": "ping2 jing4",
          "en": "quiet, peaceful"
        },
        {
          "s": "帆船",
          "t": "帆船",
          "py": "fan1 chuan2",
          "en": "sailing boat/ship"
        },
        {
          "s": "撞",
          "t": "撞",
          "py": "zhuang4",
          "en": "to bump against"
        },
        {
          "s": "艘",
          "t": "艘",
          "py": "sou1",
          "en": "measure word for boats/ships"
        },
        {
          "s": "航行",
          "t": "航行",
          "py": "hang2 xing2",
          "en": "to sail, to navigate by air or water"
        },
        {
          "s": "积蓄",
          "t": "積蓄",
          "py": "ji1 xu4",
          "en": "savings; to save"
        },
        {
          "s": "二手",
          "t": "二手",
          "py": "er4 shou3",
          "en": "second-hand"
        },
        {
          "s": "彩虹",
          "t": "彩虹",
          "py": "cai3 hong2",
          "en": "rainbow"
        },
        {
          "s": "包括",
          "t": "包括",
          "py": "bao1 kuo4",
          "en": "to include"
        },
        {
          "s": "疯",
          "t": "瘋",
          "py": "feng1",
          "en": "to be crazy, to go mad"
        },
        {
          "s": "辞职",
          "t": "辭職",
          "py": "ci2 zhi2",
          "en": "to quit a job"
        },
        {
          "s": "驾驶",
          "t": "駕駛",
          "py": "jia4 shi3",
          "en": "to drive, to pilot"
        },
        {
          "s": "轮流",
          "t": "輪流",
          "py": "lun2 liu2",
          "en": "to take turns"
        },
        {
          "s": "钓",
          "t": "釣",
          "py": "diao4",
          "en": "to fish with a hook and line"
        },
        {
          "s": "顿",
          "t": "頓",
          "py": "dun4",
          "en": "measure word for meals"
        },
        {
          "s": "海鲜",
          "t": "海鮮",
          "py": "hai3 xian1",
          "en": "seafood"
        },
        {
          "s": "傍晚",
          "t": "傍晚",
          "py": "bang4 wan3",
          "en": "towards evening, at dusk"
        },
        {
          "s": "舒适",
          "t": "舒適",
          "py": "shu1 shi4",
          "en": "comfortable, cozy"
        },
        {
          "s": "干活儿",
          "t": "幹活兒",
          "py": "gan4 huor2",
          "en": "to work"
        },
        {
          "s": "盼望",
          "t": "盼望",
          "py": "pan4 wang4",
          "en": "to look forward to"
        },
        {
          "s": "陆地",
          "t": "陸地",
          "py": "lu4 di4",
          "en": "land"
        },
        {
          "s": "各自",
          "t": "各自",
          "py": "ge4 zi4",
          "en": "each, respective"
        },
        {
          "s": "勿",
          "t": "勿",
          "py": "wu4",
          "en": "(used in imperative sentences) don't"
        },
        {
          "s": "时刻",
          "t": "時刻",
          "py": "shi2 ke4",
          "en": "moment"
        },
        {
          "s": "着火",
          "t": "著火",
          "py": "zhao2 huo3",
          "en": "to catch fire"
        },
        {
          "s": "漏",
          "t": "漏",
          "py": "lou4",
          "en": "(of a container) to leak"
        },
        {
          "s": "雷",
          "t": "雷",
          "py": "lei2",
          "en": "thunder"
        },
        {
          "s": "随时",
          "t": "隨時",
          "py": "sui2 shi2",
          "en": "at any time"
        },
        {
          "s": "闪电",
          "t": "閃電",
          "py": "shan3 dian4",
          "en": "lightning"
        },
        {
          "s": "击",
          "t": "擊",
          "py": "ji1",
          "en": "to hit, to strike"
        },
        {
          "s": "拥抱",
          "t": "擁抱",
          "py": "yong1 bao4",
          "en": "to hug, to embrace"
        },
        {
          "s": "海里",
          "t": "海里",
          "py": "hai3 li3",
          "en": "nautical mile"
        },
        {
          "s": "台阶",
          "t": "台階",
          "py": "tai2 jie1",
          "en": "flight of steps"
        },
        {
          "s": "未来",
          "t": "未來",
          "py": "wei4 lai2",
          "en": "future"
        },
        {
          "s": "太太",
          "t": "太太",
          "py": "tai4 tai5",
          "en": "wife"
        },
        {
          "s": "时代",
          "t": "時代",
          "py": "shi2 dai4",
          "en": "era, age, epoch"
        },
        {
          "s": "翟峰",
          "t": "翟峰",
          "py": "zhai2 feng1",
          "en": "Zhai Feng (a person's name)",
          "topic": "names"
        },
        {
          "s": "澳大利亚",
          "t": "澳大利亞",
          "py": "ao4 da4 li4 ya4",
          "en": "Australia",
          "topic": "names"
        },
        {
          "s": "新西兰",
          "t": "新西蘭",
          "py": "xin1 xi1 lan2",
          "en": "New Zealand",
          "topic": "names"
        }
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
            "s": "电台要选出一对最恩爱的夫妻。对比后，有三对夫妻入围。",
            "t": "電台要選出一對最恩愛的夫妻。對比後，有三對夫妻入圍。",
            "en": "A radio station wanted to select the most loving couple. After comparing entries, three couples were shortlisted.",
            "sentences": [
              {
                "s": "电台要选出一对最恩爱的夫妻。",
                "t": "電台要選出一對最恩愛的夫妻。",
                "en": "A radio station wanted to select the most loving couple."
              },
              {
                "s": "对比后，有三对夫妻入围。",
                "t": "對比後，有三對夫妻入圍。",
                "en": "After comparing entries, three couples were shortlisted."
              }
            ]
          },
          {
            "s": "评委叫第一对夫妻说说他俩是如何恩爱的。妻子说，前几年她全身瘫痪了，医生说她站起来的可能性很小。别人都觉得她的丈夫会跟她离婚，她也想过要自杀。但丈夫一直鼓励她，为她不知找了多少家医院，并且几年如一日地照顾她，从不抱怨。在丈夫的爱护和努力下，她终于又站了起来。她的故事十分感人，评委们听了都很感动。",
            "t": "評委叫第一對夫妻說說他倆是如何恩愛的。妻子說，前幾年她全身癱瘓了，醫生說她站起來的可能性很小。別人都覺得她的丈夫會跟她離婚，她也想過要自殺。但丈夫一直鼓勵她，為她不知找了多少家醫院，並且幾年如一日地照顧她，從不抱怨。在丈夫的愛護和努力下，她終於又站了起來。她的故事十分感人，評委們聽了都很感動。",
            "en": "The judges asked the first couple to describe how they loved each other so devotedly. The wife said that a few years earlier she had become completely paralyzed, and doctors said the chances of her ever standing up again were very slim. Everyone assumed her husband would divorce her, and she herself had even thought about suicide. But her husband kept encouraging her — there was no telling how many hospitals he had gone to for help — and for years, day after day, he took care of her without ever complaining once. Thanks to her husband's loving care and effort, she finally stood up again. Her story was deeply moving, and the judges were all touched hearing it.",
            "sentences": [
              {
                "s": "评委叫第一对夫妻说说他俩是如何恩爱的。",
                "t": "評委叫第一對夫妻說說他倆是如何恩愛的。",
                "en": "The judges asked the first couple to describe how they loved each other so devotedly."
              },
              {
                "s": "妻子说，前几年她全身瘫痪了，医生说她站起来的可能性很小。",
                "t": "妻子說，前幾年她全身癱瘓了，醫生說她站起來的可能性很小。",
                "en": "The wife said that a few years earlier she had become completely paralyzed, and doctors said the chances of her ever standing up again were very slim."
              },
              {
                "s": "别人都觉得她的丈夫会跟她离婚，她也想过要自杀。",
                "t": "別人都覺得她的丈夫會跟她離婚，她也想過要自殺。",
                "en": "Everyone assumed her husband would divorce her, and she herself had even thought about suicide."
              },
              {
                "s": "但丈夫一直鼓励她，为她不知找了多少家医院，并且几年如一日地照顾她，从不抱怨。",
                "t": "但丈夫一直鼓勵她，為她不知找了多少家醫院，並且幾年如一日地照顧她，從不抱怨。",
                "en": "But her husband kept encouraging her — there was no telling how many hospitals he had gone to for help — and for years, day after day, he took care of her without ever complaining once."
              },
              {
                "s": "在丈夫的爱护和努力下，她终于又站了起来。",
                "t": "在丈夫的愛護和努力下，她終於又站了起來。",
                "en": "Thanks to her husband's loving care and effort, she finally stood up again."
              },
              {
                "s": "她的故事十分感人，评委们听了都很感动。",
                "t": "她的故事十分感人，評委們聽了都很感動。",
                "en": "Her story was deeply moving, and the judges were all touched hearing it."
              }
            ]
          },
          {
            "s": "随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵过架，一直相亲相爱、相敬如宾。评委们听了暗暗点头。",
            "t": "隨後進來的是第二對夫妻，他倆說，十幾年的婚姻生活中，他們從來沒為任何事紅過臉、吵過架，一直相親相愛、相敬如賓。評委們聽了暗暗點頭。",
            "en": "Next came the second couple. They said that in over ten years of marriage, they had never once gotten upset or quarreled over anything — they had always loved each other dearly and treated each other with the utmost respect. The judges nodded quietly to themselves as they listened.",
            "sentences": [
              {
                "s": "随后进来的是第二对夫妻，",
                "t": "隨後進來的是第二對夫妻，",
                "en": "Next came the second couple."
              },
              {
                "s": "他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵过架，一直相亲相爱、相敬如宾。",
                "t": "他倆說，十幾年的婚姻生活中，他們從來沒為任何事紅過臉、吵過架，一直相親相愛、相敬如賓。",
                "en": "They said that in over ten years of marriage, they had never once gotten upset or quarreled over anything — they had always loved each other dearly and treated each other with the utmost respect."
              },
              {
                "s": "评委们听了暗暗点头。",
                "t": "評委們聽了暗暗點頭。",
                "en": "The judges nodded quietly to themselves as they listened."
              }
            ]
          },
          {
            "s": "轮到第三对夫妻了，却很长时间不见人。评委们等得有些不耐烦，就走出来看个究竟。只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。评委们看那纸条上面写着：别出声，他昨晚没睡好。一个评委提起笔在后面续写了一句话：但是女士，我们得听你们夫妻俩的叙述啊！女人又写：那我们就不参加了。",
            "t": "輪到第三對夫妻了，卻很長時間不見人。評委們等得有些不耐煩，就走出來看個究竟。只見第三對夫妻仍然坐在門口，男人的頭靠在女人的肩膀上，睡著了。一個評委要上前喊醒那個男的，女的卻伸出手指做了個小聲的動作，然後小心地從包裡拿出紙筆，用左手歪歪扭扭寫下一行字遞給評委，而她的右肩一直讓丈夫的腦袋靠著。評委們看那紙條上面寫著：別出聲，他昨晚沒睡好。一個評委提起筆在後面續寫了一句話：但是女士，我們得聽你們夫妻倆的敘述啊！女人又寫：那我們就不參加了。",
            "en": "Then it was the third couple's turn, but no one appeared for a long time. The judges grew a little impatient waiting, so they went out to see what was going on. There they found the third couple still sitting by the door — the man's head resting on the woman's shoulder, fast asleep. One judge started to step forward to wake the man, but the woman held up a finger in a \"shh\" gesture. Then she carefully took paper and pen out of her bag, and with her left hand wrote a wobbly line of characters and handed it to the judges — all the while keeping her right shoulder still, so her husband's head could keep resting on it. The note read: \"Please don't make a sound, he didn't sleep well last night.\" One judge picked up the pen and added a line underneath: \"But madam, we still need to hear the two of you tell your story!\" The woman wrote back: \"Then we'll just withdraw.\"",
            "sentences": [
              {
                "s": "轮到第三对夫妻了，却很长时间不见人。",
                "t": "輪到第三對夫妻了，卻很長時間不見人。",
                "en": "Then it was the third couple's turn, but no one appeared for a long time."
              },
              {
                "s": "评委们等得有些不耐烦，就走出来看个究竟。",
                "t": "評委們等得有些不耐煩，就走出來看個究竟。",
                "en": "The judges grew a little impatient waiting, so they went out to see what was going on."
              },
              {
                "s": "只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。",
                "t": "只見第三對夫妻仍然坐在門口，男人的頭靠在女人的肩膀上，睡著了。",
                "en": "There they found the third couple still sitting by the door — the man's head resting on the woman's shoulder, fast asleep."
              },
              {
                "s": "一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，",
                "t": "一個評委要上前喊醒那個男的，女的卻伸出手指做了個小聲的動作，",
                "en": "One judge started to step forward to wake the man, but the woman held up a finger in a \"shh\" gesture."
              },
              {
                "s": "然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。",
                "t": "然後小心地從包裡拿出紙筆，用左手歪歪扭扭寫下一行字遞給評委，而她的右肩一直讓丈夫的腦袋靠著。",
                "en": "Then she carefully took paper and pen out of her bag, and with her left hand wrote a wobbly line of characters and handed it to the judges — all the while keeping her right shoulder still, so her husband's head could keep resting on it."
              },
              {
                "s": "评委们看那纸条上面写着：别出声，他昨晚没睡好。",
                "t": "評委們看那紙條上面寫著：別出聲，他昨晚沒睡好。",
                "en": "The note read: \"Please don't make a sound, he didn't sleep well last night.\""
              },
              {
                "s": "一个评委提起笔在后面续写了一句话：但是女士，我们得听你们夫妻俩的叙述啊！",
                "t": "一個評委提起筆在後面續寫了一句話：但是女士，我們得聽你們夫妻倆的敘述啊！",
                "en": "One judge picked up the pen and added a line underneath: \"But madam, we still need to hear the two of you tell your story!\""
              },
              {
                "s": "女人又写：那我们就不参加了。",
                "t": "女人又寫：那我們就不參加了。",
                "en": "The woman wrote back: \"Then we'll just withdraw.\""
              }
            ]
          },
          {
            "s": "大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！但评委们还是决定先不催他们，而是再等待一段时间。过了一会儿，男人醒了。评委们问他怎么那么累。男人不好意思地笑笑说：\"我家住一楼，蚊子多。昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。\"",
            "t": "大家很吃驚，這個女人為了不影響丈夫睡覺，居然放棄這次機會！但評委們還是決定先不催他們，而是再等待一段時間。過了一會兒，男人醒了。評委們問他怎麼那麼累。男人不好意思地笑笑說：「我家住一樓，蚊子多。昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以後半夜就在為她趕蚊子。」",
            "en": "Everyone was stunned — this woman, just so as not to disturb her husband's sleep, had unexpectedly given up this opportunity! But the judges decided not to rush them, and to wait a while longer instead. After a while, the man woke up. The judges asked him why he seemed so tired. Embarrassed, the man laughed and said: \"I live on the first floor, so there are a lot of mosquitoes. Last night around midnight a mosquito bit me awake, and I was afraid my wife would get bitten and woken up too — so I spent the rest of the night swatting mosquitoes away for her.\"",
            "sentences": [
              {
                "s": "大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！",
                "t": "大家很吃驚，這個女人為了不影響丈夫睡覺，居然放棄這次機會！",
                "en": "Everyone was stunned — this woman, just so as not to disturb her husband's sleep, had unexpectedly given up this opportunity!"
              },
              {
                "s": "但评委们还是决定先不催他们，而是再等待一段时间。",
                "t": "但評委們還是決定先不催他們，而是再等待一段時間。",
                "en": "But the judges decided not to rush them, and to wait a while longer instead."
              },
              {
                "s": "过了一会儿，男人醒了。",
                "t": "過了一會兒，男人醒了。",
                "en": "After a while, the man woke up."
              },
              {
                "s": "评委们问他怎么那么累。",
                "t": "評委們問他怎麼那麼累。",
                "en": "The judges asked him why he seemed so tired."
              },
              {
                "s": "男人不好意思地笑笑说：\"我家住一楼，蚊子多。",
                "t": "男人不好意思地笑笑說：「我家住一樓，蚊子多。",
                "en": "Embarrassed, the man laughed and said: \"I live on the first floor, so there are a lot of mosquitoes."
              },
              {
                "s": "昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。\"",
                "t": "昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以後半夜就在為她趕蚊子。」",
                "en": "Last night around midnight a mosquito bit me awake, and I was afraid my wife would get bitten and woken up too — so I spent the rest of the night swatting mosquitoes away for her.\""
              }
            ]
          },
          {
            "s": "最后的结果是，电台增加了两项奖项，将第一对夫妻评为\"患难与共夫妻\"，将第二对夫妻评为\"相敬如宾夫妻\"，而真正的\"最恩爱夫妻\"奖，却给了第三对夫妻。",
            "t": "最後的結果是，電台增加了兩項獎項，將第一對夫妻評為「患難與共夫妻」，將第二對夫妻評為「相敬如賓夫妻」，而真正的「最恩愛夫妻」獎，卻給了第三對夫妻。",
            "en": "In the end, the radio station added two new awards. They named the first couple \"Through Thick and Thin Couple,\" and the second couple \"Mutual Respect Couple.\" The real \"Most Loving Couple\" award, though, went to the third couple.",
            "sentences": [
              {
                "s": "最后的结果是，电台增加了两项奖项，",
                "t": "最後的結果是，電台增加了兩項獎項，",
                "en": "In the end, the radio station added two new awards."
              },
              {
                "s": "将第一对夫妻评为\"患难与共夫妻\"，将第二对夫妻评为\"相敬如宾夫妻\"，",
                "t": "將第一對夫妻評為「患難與共夫妻」，將第二對夫妻評為「相敬如賓夫妻」，",
                "en": "They named the first couple \"Through Thick and Thin Couple,\" and the second couple \"Mutual Respect Couple.\""
              },
              {
                "s": "而真正的\"最恩爱夫妻\"奖，却给了第三对夫妻。",
                "t": "而真正的「最恩愛夫妻」獎，卻給了第三對夫妻。",
                "en": "The real \"Most Loving Couple\" award, though, went to the third couple."
              }
            ]
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
            "s": "父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。因此长年以来，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。",
            "t": "父母一輩子住在農村老家，對老屋的感情，就像沒斷奶的孩子對母親一樣。因此長年以來，父母很少離開老屋，儘管姥姥、舅舅和姑姑都在城裡，父母也堅決不在城裡住。",
            "en": "My parents have lived their whole lives in their old home in the countryside; their feelings for that old house are just like an unweaned child's feelings for its mother. Because of this, for years they have rarely left the old house — even though my grandmother, uncle, and aunt all live in the city, my parents have firmly refused to live there too.",
            "sentences": [
              {
                "s": "父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。",
                "t": "父母一輩子住在農村老家，對老屋的感情，就像沒斷奶的孩子對母親一樣。",
                "en": "My parents have lived their whole lives in their old home in the countryside; their feelings for that old house are just like an unweaned child's feelings for its mother."
              },
              {
                "s": "因此长年以来，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。",
                "t": "因此長年以來，父母很少離開老屋，儘管姥姥、舅舅和姑姑都在城裡，父母也堅決不在城裡住。",
                "en": "Because of this, for years they have rarely left the old house — even though my grandmother, uncle, and aunt all live in the city, my parents have firmly refused to live there too."
              }
            ]
          },
          {
            "s": "去年，在我和妻子的努力下，我们终于用打工挣的钱，在县里买了一套新房。新房装修完，父母第一次走进新房时，高兴得不得了。妻子提出留一串钥匙给父母，可他们拒绝了。那天，父亲喝醉了，等他醒时，天色已晚。我和妻子强烈留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。",
            "t": "去年，在我和妻子的努力下，我們終於用打工掙的錢，在縣裡買了一套新房。新房裝修完，父母第一次走進新房時，高興得不得了。妻子提出留一串鑰匙給父母，可他們拒絕了。那天，父親喝醉了，等他醒時，天色已晚。我和妻子強烈留父母在新房住一夜，第二天再回，但他們仍堅持坐上了最後一趟回老家的車。",
            "en": "Last year, through my wife's and my effort, we finally used the money we'd earned working to buy a new place in the county town. Once the new place was decorated, the first time my parents walked in they were happier than words could say. My wife suggested leaving a set of keys with my parents, but they refused. That day, my father got drunk, and by the time he woke up it was already late. My wife and I urged them strongly to stay the night in the new place and go back the next day, but they still insisted on catching the last bus back to the old home.",
            "sentences": [
              {
                "s": "去年，在我和妻子的努力下，我们终于用打工挣的钱，在县里买了一套新房。",
                "t": "去年，在我和妻子的努力下，我們終於用打工掙的錢，在縣裡買了一套新房。",
                "en": "Last year, through my wife's and my effort, we finally used the money we'd earned working to buy a new place in the county town."
              },
              {
                "s": "新房装修完，父母第一次走进新房时，高兴得不得了。",
                "t": "新房裝修完，父母第一次走進新房時，高興得不得了。",
                "en": "Once the new place was decorated, the first time my parents walked in they were happier than words could say."
              },
              {
                "s": "妻子提出留一串钥匙给父母，可他们拒绝了。",
                "t": "妻子提出留一串鑰匙給父母，可他們拒絕了。",
                "en": "My wife suggested leaving a set of keys with my parents, but they refused."
              },
              {
                "s": "那天，父亲喝醉了，等他醒时，天色已晚。",
                "t": "那天，父親喝醉了，等他醒時，天色已晚。",
                "en": "That day, my father got drunk, and by the time he woke up it was already late."
              },
              {
                "s": "我和妻子强烈留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。",
                "t": "我和妻子強烈留父母在新房住一夜，第二天再回，但他們仍堅持坐上了最後一趟回老家的車。",
                "en": "My wife and I urged them strongly to stay the night in the new place and go back the next day, but they still insisted on catching the last bus back to the old home."
              }
            ]
          },
          {
            "s": "一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。临走那天，父亲从老家赶来送我们。父亲悄悄把我拉到一边说：\"你妈说了，你还是留一串新房的钥匙给我们，要是我和你妈什么时候想来了，就来住上几天，顺便给你们晒晒被子，打扫打扫卫生。\"父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。",
            "t": "一段時間後，我和妻子又準備去外地打工，新房只能上鎖空著。臨走那天，父親從老家趕來送我們。父親悄悄把我拉到一邊說：「你媽說了，你還是留一串新房的鑰匙給我們，要是我和你媽什麼時候想來了，就來住上幾天，順便給你們曬曬被子，打掃打掃衛生。」父親說這話時，輕聲細語，還紅著臉，像個害羞的孩子。",
            "en": "After a while, my wife and I were getting ready to go work away from home again, so the new place would just have to sit locked and empty. On the day we were about to leave, Father came all the way from the old home to see us off. He quietly pulled me aside and said: \"Your mother says you should leave us a set of keys to the new place after all — if she and I ever feel like coming, we can stay a few days, and while we're at it, air out your quilts and clean up a bit.\" As he said this, he spoke softly, his face turning red, like a shy child.",
            "sentences": [
              {
                "s": "一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。",
                "t": "一段時間後，我和妻子又準備去外地打工，新房只能上鎖空著。",
                "en": "After a while, my wife and I were getting ready to go work away from home again, so the new place would just have to sit locked and empty."
              },
              {
                "s": "临走那天，父亲从老家赶来送我们。",
                "t": "臨走那天，父親從老家趕來送我們。",
                "en": "On the day we were about to leave, Father came all the way from the old home to see us off."
              },
              {
                "s": "父亲悄悄把我拉到一边说：\"你妈说了，你还是留一串新房的钥匙给我们，要是我和你妈什么时候想来了，就来住上几天，顺便给你们晒晒被子，打扫打扫卫生。\"",
                "t": "父親悄悄把我拉到一邊說：「你媽說了，你還是留一串新房的鑰匙給我們，要是我和你媽什麼時候想來了，就來住上幾天，順便給你們曬曬被子，打掃打掃衛生。」",
                "en": "He quietly pulled me aside and said: \"Your mother says you should leave us a set of keys to the new place after all — if she and I ever feel like coming, we can stay a few days, and while we're at it, air out your quilts and clean up a bit.\""
              },
              {
                "s": "父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。",
                "t": "父親說這話時，輕聲細語，還紅著臉，像個害羞的孩子。",
                "en": "As he said this, he spoke softly, his face turning red, like a shy child."
              }
            ]
          },
          {
            "s": "转眼又是半年，我们回家时是一个深冬的夜里。下了长途车，儿子被冻得大哭。我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。来到楼下，抬头一看，却发现自家亮着灯光。上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来：室内打扫得干干净净，暖气开着，水已温热，卧室床上的被子已铺好，厨房里飘来阵阵饭菜香……",
            "t": "轉眼又是半年，我們回家時是一個深冬的夜裡。下了長途車，兒子被凍得大哭。我和妻子想像著打開家門滿是灰塵、冷冷清清的景象，覺得心裡發寒。來到樓下，抬頭一看，卻發現自家亮著燈光。上了樓，開門的竟是微笑著的父母，溫暖的氣息立刻撲面而來：室內打掃得乾乾淨淨，暖氣開著，水已溫熱，臥室床上的被子已鋪好，廚房裡飄來陣陣飯菜香……",
            "en": "In the blink of an eye, another half year had passed, and we came home late one deep-winter night. After getting off the long-distance bus, our son was crying hard from the cold. My wife and I pictured opening our front door onto a dusty, cold, empty scene, and felt a chill in our hearts. But when we got downstairs and looked up, we found our own windows lit up. We went upstairs, and the ones who opened the door turned out to be my smiling parents — a wave of warmth hit us at once: the rooms were spotlessly clean, the heat was on, the water was already warm, the quilt on the bedroom bed was already laid out, and waves of cooking smells drifted from the kitchen...",
            "sentences": [
              {
                "s": "转眼又是半年，我们回家时是一个深冬的夜里。",
                "t": "轉眼又是半年，我們回家時是一個深冬的夜裡。",
                "en": "In the blink of an eye, another half year had passed, and we came home late one deep-winter night."
              },
              {
                "s": "下了长途车，儿子被冻得大哭。",
                "t": "下了長途車，兒子被凍得大哭。",
                "en": "After getting off the long-distance bus, our son was crying hard from the cold."
              },
              {
                "s": "我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。",
                "t": "我和妻子想像著打開家門滿是灰塵、冷冷清清的景象，覺得心裡發寒。",
                "en": "My wife and I pictured opening our front door onto a dusty, cold, empty scene, and felt a chill in our hearts."
              },
              {
                "s": "来到楼下，抬头一看，却发现自家亮着灯光。",
                "t": "來到樓下，抬頭一看，卻發現自家亮著燈光。",
                "en": "But when we got downstairs and looked up, we found our own windows lit up."
              },
              {
                "s": "上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来：室内打扫得干干净净，暖气开着，水已温热，卧室床上的被子已铺好，厨房里飘来阵阵饭菜香……",
                "t": "上了樓，開門的竟是微笑著的父母，溫暖的氣息立刻撲面而來：室內打掃得乾乾淨淨，暖氣開著，水已溫熱，臥室床上的被子已鋪好，廚房裡飄來陣陣飯菜香……",
                "en": "We went upstairs, and the ones who opened the door turned out to be my smiling parents — a wave of warmth hit us at once: the rooms were spotlessly clean, the heat was on, the water was already warm, the quilt on the bedroom bed was already laid out, and waves of cooking smells drifted from the kitchen..."
              }
            ]
          },
          {
            "s": "父亲说：\"你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。\"原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！我鼻子一酸，流下了热泪……",
            "t": "父親說：「你媽昨天接到電話，知道你們今晚回來，今天來新房忙了一天了。」原來父母要我留下串鑰匙，只是為了讓我們回來時，能立刻感受到家的溫暖！我鼻子一酸，流下了熱淚……",
            "en": "Father said: \"Your mother got a call yesterday, found out you were coming home tonight, so she came to the new place today and worked hard all day.\" It turned out that the whole reason my parents wanted me to leave them a set of keys was so that when we came back, we could feel the warmth of home right away! My nose stung, and hot tears rolled down my face...",
            "sentences": [
              {
                "s": "父亲说：\"你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。\"",
                "t": "父親說：「你媽昨天接到電話，知道你們今晚回來，今天來新房忙了一天了。」",
                "en": "Father said: \"Your mother got a call yesterday, found out you were coming home tonight, so she came to the new place today and worked hard all day.\""
              },
              {
                "s": "原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！",
                "t": "原來父母要我留下串鑰匙，只是為了讓我們回來時，能立刻感受到家的溫暖！",
                "en": "It turned out that the whole reason my parents wanted me to leave them a set of keys was so that when we came back, we could feel the warmth of home right away!"
              },
              {
                "s": "我鼻子一酸，流下了热泪……",
                "t": "我鼻子一酸，流下了熱淚……",
                "en": "My nose stung, and hot tears rolled down my face..."
              }
            ]
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
    },
    {
      "id": "u3",
      "lessonId": "u3",
      "title": {
        "s": "人生有选择，一切可改变",
        "t": "人生有選擇，一切可改變"
      },
      "en": "Having Choices in Life Makes Change Possible",
      "source": "Adapted from 《都市快报》(Metro Express), by 黄小星 — HSK 标准教程 5 (上), Unit 3",
      "reading": {
        "paragraphs": [
          {
            "s": "翟峰和妻子都是铁路工人，工作稳定，待遇不错。他们有房有车，从不用为生活发愁。可翟峰却不想一辈子过这样平静的生活。通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。",
            "t": "翟峰和妻子都是鐵路工人，工作穩定，待遇不錯。他們有房有車，從不用為生活發愁。可翟峰卻不想一輩子過這樣平靜的生活。通過電視，翟峰迷上了帆船，他覺得帆船能帶他撞開「世界之門」：只要有一艘船，就能航行在無邊無際的海上，到任何自己想去的地方。",
            "en": "Zhai Feng and his wife were both railway workers, with steady jobs and decent pay. They owned a home and a car and never had to worry about making a living. But Zhai Feng did not want to spend his whole life in such a quiet, uneventful way. Through TV, Zhai Feng became hooked on sailing. He felt a sailboat could take him crashing through \"the door to the world\": as long as he had a boat, he could sail the boundless sea to any place he wanted to go.",
            "sentences": [
              {
                "s": "翟峰和妻子都是铁路工人，工作稳定，待遇不错。",
                "t": "翟峰和妻子都是鐵路工人，工作穩定，待遇不錯。",
                "en": "Zhai Feng and his wife were both railway workers, with steady jobs and decent pay."
              },
              {
                "s": "他们有房有车，从不用为生活发愁。",
                "t": "他們有房有車，從不用為生活發愁。",
                "en": "They owned a home and a car and never had to worry about making a living."
              },
              {
                "s": "可翟峰却不想一辈子过这样平静的生活。",
                "t": "可翟峰卻不想一輩子過這樣平靜的生活。",
                "en": "But Zhai Feng did not want to spend his whole life in such a quiet, uneventful way."
              },
              {
                "s": "通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：",
                "t": "通過電視，翟峰迷上了帆船，他覺得帆船能帶他撞開「世界之門」：",
                "en": "Through TV, Zhai Feng became hooked on sailing. He felt a sailboat could take him crashing through \"the door to the world\":"
              },
              {
                "s": "只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。",
                "t": "只要有一艘船，就能航行在無邊無際的海上，到任何自己想去的地方。",
                "en": "as long as he had a boat, he could sail the boundless sea to any place he wanted to go."
              }
            ]
          },
          {
            "s": "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。出发前，翟峰自学了航海知识。然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。",
            "t": "由於翟峰和妻子沒有積蓄，於是賣房賣車，買下了一艘二手船，翟峰叫它「彩虹號」。出發前，翟峰自學了航海知識。然而，包括翟峰的父母，所有人都覺得，翟峰「瘋了」。",
            "en": "Because Zhai Feng and his wife had no savings, they sold their house and car and bought a second-hand boat, which Zhai Feng named \"Rainbow\". Before setting out, Zhai Feng taught himself navigation. However, everyone, including Zhai Feng's own parents, thought he had \"gone crazy.\"",
            "sentences": [
              {
                "s": "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。",
                "t": "由於翟峰和妻子沒有積蓄，於是賣房賣車，買下了一艘二手船，翟峰叫它「彩虹號」。",
                "en": "Because Zhai Feng and his wife had no savings, they sold their house and car and bought a second-hand boat, which Zhai Feng named \"Rainbow\"."
              },
              {
                "s": "出发前，翟峰自学了航海知识。",
                "t": "出發前，翟峰自學了航海知識。",
                "en": "Before setting out, Zhai Feng taught himself navigation."
              },
              {
                "s": "然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。",
                "t": "然而，包括翟峰的父母，所有人都覺得，翟峰「瘋了」。",
                "en": "However, everyone, including Zhai Feng's own parents, thought he had \"gone crazy.\""
              }
            ]
          },
          {
            "s": "2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。白天，翟峰和妻子轮流驾船。女儿在船上看书、学习、画画儿。下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。该吃饭时，妻子会给全家人做一顿美味的海鲜。",
            "t": "2012年11月24日，辭了職的翟峰和妻子帶著休學的女兒，第一次駕駛帆船出海了。白天，翟峰和妻子輪流駕船。女兒在船上看書、學習、畫畫兒。下午海面平靜時，翟峰會和妻子下海游泳或者釣魚。該吃飯時，妻子會給全家人做一頓美味的海鮮。",
            "en": "On November 24, 2012, Zhai Feng, who had quit his job, and his wife, taking along their daughter who had taken time off school, set out to sea for the first time in the sailboat. During the day, Zhai Feng and his wife took turns piloting the boat. Their daughter read, studied and drew on board. In the afternoon, when the sea was calm, Zhai Feng and his wife would go into the water to swim or would fish. When it was time to eat, his wife would cook a delicious seafood meal for the whole family.",
            "sentences": [
              {
                "s": "2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。",
                "t": "2012年11月24日，辭了職的翟峰和妻子帶著休學的女兒，第一次駕駛帆船出海了。",
                "en": "On November 24, 2012, Zhai Feng, who had quit his job, and his wife, taking along their daughter who had taken time off school, set out to sea for the first time in the sailboat."
              },
              {
                "s": "白天，翟峰和妻子轮流驾船。",
                "t": "白天，翟峰和妻子輪流駕船。",
                "en": "During the day, Zhai Feng and his wife took turns piloting the boat."
              },
              {
                "s": "女儿在船上看书、学习、画画儿。",
                "t": "女兒在船上看書、學習、畫畫兒。",
                "en": "Their daughter read, studied and drew on board."
              },
              {
                "s": "下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。",
                "t": "下午海面平靜時，翟峰會和妻子下海游泳或者釣魚。",
                "en": "In the afternoon, when the sea was calm, Zhai Feng and his wife would go into the water to swim or would fish."
              },
              {
                "s": "该吃饭时，妻子会给全家人做一顿美味的海鲜。",
                "t": "該吃飯時，妻子會給全家人做一頓美味的海鮮。",
                "en": "When it was time to eat, his wife would cook a delicious seafood meal for the whole family."
              }
            ]
          },
          {
            "s": "傍晚是一家人最舒适的时候。干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。这样的生活，是翟峰盼望已久的。以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。",
            "t": "傍晚是一家人最舒適的時候。幹完活兒，一家人坐在一起，用電腦看看電影，或者聊聊天兒。這樣的生活，是翟峰盼望已久的。以前陸地上的夜晚，他們在各自的房間，一家人沒有更多的交流。",
            "en": "Evening was the family's most comfortable time of day. After finishing the chores, the family would sit together, watch a movie on the computer, or chat. This was the kind of life Zhai Feng had long hoped for. In the past, on land at night, they were each in their own rooms, and the family had little communication.",
            "sentences": [
              {
                "s": "傍晚是一家人最舒适的时候。",
                "t": "傍晚是一家人最舒適的時候。",
                "en": "Evening was the family's most comfortable time of day."
              },
              {
                "s": "干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。",
                "t": "幹完活兒，一家人坐在一起，用電腦看看電影，或者聊聊天兒。",
                "en": "After finishing the chores, the family would sit together, watch a movie on the computer, or chat."
              },
              {
                "s": "这样的生活，是翟峰盼望已久的。",
                "t": "這樣的生活，是翟峰盼望已久的。",
                "en": "This was the kind of life Zhai Feng had long hoped for."
              },
              {
                "s": "以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。",
                "t": "以前陸地上的夜晚，他們在各自的房間，一家人沒有更多的交流。",
                "en": "In the past, on land at night, they were each in their own rooms, and the family had little communication."
              }
            ]
          },
          {
            "s": "中国有句老话：可上山，勿下海。美好的时刻过去后是一个个紧张的夜晚。一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。他们最怕雷电交加的时刻，因为小船随时有可能被下一道闪电击到，一家三口只能紧紧拥抱在一起，希望闪电快快过去。",
            "t": "中國有句老話：可上山，勿下海。美好的時刻過去後是一個個緊張的夜晚。一路上，翟峰一家經歷了船身著火、漏水等大大小小十多次險情。他們最怕雷電交加的時刻，因為小船隨時有可能被下一道閃電擊到，一家三口只能緊緊擁抱在一起，希望閃電快快過去。",
            "en": "There is an old Chinese saying: \"You may go up the mountain, but don't go down to the sea.\" After the beautiful moments passed came night after tense night. Along the way, Zhai Feng's family went through more than ten dangerous situations, big and small, such as the boat catching fire and leaking. What they feared most was when thunder and lightning struck together, because the little boat could be hit by the next bolt at any moment; the family of three could only hold each other tightly and hope the lightning would pass quickly.",
            "sentences": [
              {
                "s": "中国有句老话：可上山，勿下海。",
                "t": "中國有句老話：可上山，勿下海。",
                "en": "There is an old Chinese saying: \"You may go up the mountain, but don't go down to the sea.\""
              },
              {
                "s": "美好的时刻过去后是一个个紧张的夜晚。",
                "t": "美好的時刻過去後是一個個緊張的夜晚。",
                "en": "After the beautiful moments passed came night after tense night."
              },
              {
                "s": "一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。",
                "t": "一路上，翟峰一家經歷了船身著火、漏水等大大小小十多次險情。",
                "en": "Along the way, Zhai Feng's family went through more than ten dangerous situations, big and small, such as the boat catching fire and leaking."
              },
              {
                "s": "他们最怕雷电交加的时刻，因为小船随时有可能被下一道闪电击到，",
                "t": "他們最怕雷電交加的時刻，因為小船隨時有可能被下一道閃電擊到，",
                "en": "What they feared most was when thunder and lightning struck together, because the little boat could be hit by the next bolt at any moment;"
              },
              {
                "s": "一家三口只能紧紧拥抱在一起，希望闪电快快过去。",
                "t": "一家三口只能緊緊擁抱在一起，希望閃電快快過去。",
                "en": "the family of three could only hold each other tightly and hope the lightning would pass quickly."
              }
            ]
          },
          {
            "s": "在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。",
            "t": "在經歷了八個月、航行了4000多海里之後，翟峰一家終於回到了家。",
            "en": "After eight months and more than 4,000 nautical miles, Zhai Feng's family finally made it back home.",
            "sentences": [
              {
                "s": "在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。",
                "t": "在經歷了八個月、航行了4000多海里之後，翟峰一家終於回到了家。",
                "en": "After eight months and more than 4,000 nautical miles, Zhai Feng's family finally made it back home."
              }
            ]
          },
          {
            "s": "翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。“我和太太想要看看这个时代、这个世界到底是什么样子。人生有选择，一切可改变。”下一站，他们想去澳大利亚和新西兰。等待今年11月的北风南下之时，他们将再次出发。",
            "t": "翟峰相信，一切只是開始，航海就是他人生道路上一段長長的台階，通向他想要的未來。「我和太太想要看看這個時代、這個世界到底是什麼樣子。人生有選擇，一切可改變。」下一站，他們想去澳大利亞和新西蘭。等待今年11月的北風南下之時，他們將再次出發。",
            "en": "Zhai Feng believes it is only the beginning: sailing is a long flight of steps on his life's road, leading to the future he wants. \"My wife and I want to see what this era and this world are really like. Life has choices, and everything can change.\" Their next stop: they want to go to Australia and New Zealand. When this November's north wind blows southward, they will set out again.",
            "sentences": [
              {
                "s": "翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。",
                "t": "翟峰相信，一切只是開始，航海就是他人生道路上一段長長的台階，通向他想要的未來。",
                "en": "Zhai Feng believes it is only the beginning: sailing is a long flight of steps on his life's road, leading to the future he wants."
              },
              {
                "s": "“我和太太想要看看这个时代、这个世界到底是什么样子。",
                "t": "「我和太太想要看看這個時代、這個世界到底是什麼樣子。",
                "en": "\"My wife and I want to see what this era and this world are really like."
              },
              {
                "s": "人生有选择，一切可改变。”",
                "t": "人生有選擇，一切可改變。」",
                "en": "Life has choices, and everything can change.\""
              },
              {
                "s": "下一站，他们想去澳大利亚和新西兰。",
                "t": "下一站，他們想去澳大利亞和新西蘭。",
                "en": "Their next stop: they want to go to Australia and New Zealand."
              },
              {
                "s": "等待今年11月的北风南下之时，他们将再次出发。",
                "t": "等待今年11月的北風南下之時，他們將再次出發。",
                "en": "When this November's north wind blows southward, they will set out again."
              }
            ]
          }
        ]
      },
      "background": {
        "title": "背景分析",
        "en": "Background",
        "paragraphs": [
          {
            "s": "在多数人眼里，工作、家庭、汽车、住房，这些都是我们生活中不可缺少的东西。当我们想要在人生道路上做出一些选择或改变时，却发现这些东西常常会影响我们的决定。",
            "t": "在多數人眼裡，工作、家庭、汽車、住房，這些都是我們生活中不可缺少的東西。當我們想要在人生道路上做出一些選擇或改變時，卻發現這些東西常常會影響我們的決定。",
            "en": "In most people's eyes, work, family, a car and a home are all things we cannot do without in life. But when we want to make some choice or change on life's road, we find that these things often affect our decisions.",
            "sentences": [
              {
                "s": "在多数人眼里，工作、家庭、汽车、住房，这些都是我们生活中不可缺少的东西。",
                "t": "在多數人眼裡，工作、家庭、汽車、住房，這些都是我們生活中不可缺少的東西。",
                "en": "In most people's eyes, work, family, a car and a home are all things we cannot do without in life."
              },
              {
                "s": "当我们想要在人生道路上做出一些选择或改变时，却发现这些东西常常会影响我们的决定。",
                "t": "當我們想要在人生道路上做出一些選擇或改變時，卻發現這些東西常常會影響我們的決定。",
                "en": "But when we want to make some choice or change on life's road, we find that these things often affect our decisions."
              }
            ]
          },
          {
            "s": "在中国，帆船运动现在还不是很普及。帆船的价钱很贵，个人购买帆船的情况还很少。然而，课文中迷上帆船的翟峰做出了一个勇敢的决定，包括翟峰的父母，所有人都觉得他“疯了”。你是怎么看这件事情的呢？",
            "t": "在中國，帆船運動現在還不是很普及。帆船的價錢很貴，個人購買帆船的情況還很少。然而，課文中迷上帆船的翟峰做出了一個勇敢的決定，包括翟峰的父母，所有人都覺得他「瘋了」。你是怎麼看這件事情的呢？",
            "en": "In China, sailing is still not very popular. Sailboats are expensive, and individuals buying one is still rare. Yet in the text, Zhai Feng, who fell for sailing, made a brave decision — and everyone, including his parents, thought he had \"gone mad.\" What do you think of this?",
            "sentences": [
              {
                "s": "在中国，帆船运动现在还不是很普及。",
                "t": "在中國，帆船運動現在還不是很普及。",
                "en": "In China, sailing is still not very popular."
              },
              {
                "s": "帆船的价钱很贵，个人购买帆船的情况还很少。",
                "t": "帆船的價錢很貴，個人購買帆船的情況還很少。",
                "en": "Sailboats are expensive, and individuals buying one is still rare."
              },
              {
                "s": "然而，课文中迷上帆船的翟峰做出了一个勇敢的决定，包括翟峰的父母，所有人都觉得他“疯了”。",
                "t": "然而，課文中迷上帆船的翟峰做出了一個勇敢的決定，包括翟峰的父母，所有人都覺得他「瘋了」。",
                "en": "Yet in the text, Zhai Feng, who fell for sailing, made a brave decision — and everyone, including his parents, thought he had \"gone mad.\""
              },
              {
                "s": "你是怎么看这件事情的呢？",
                "t": "你是怎麼看這件事情的呢？",
                "en": "What do you think of this?"
              }
            ]
          }
        ]
      },
      "grammar": [
        {
          "point": "包括",
          "py": "bao1 kuo4",
          "en": "Verb: \"to include.\" It shows that something contains all of its parts (examples 1–2). It can also spotlight one particular part, to give an example, add information or explain (examples 3–4).",
          "examples": [
            {
              "s": "汉语技能教学包括听、说、读、写四个方面。",
              "t": "漢語技能教學包括聽、說、讀、寫四個方面。",
              "py": "han4 yu3 ji4 neng2 jiao4 xue2 bao1 kuo4 ting1 shuo1 du2 xie3 si4 ge4 fang1 mian4",
              "en": "Teaching Chinese skills includes four areas: listening, speaking, reading and writing.",
              "sense": "includes all parts"
            },
            {
              "s": "“学习”，其实包括“学”与“习”两层意思。学，就是学习知识；习，就是实践、练习。",
              "t": "「學習」，其實包括「學」與「習」兩層意思。學，就是學習知識；習，就是實踐、練習。",
              "py": "xue2 xi2 qi2 shi2 bao1 kuo4 xue2 yu3 xi2 liang3 ceng2 yi4 si5 xue2 jiu4 shi4 xue2 xi2 zhi1 shi2 xi2 jiu4 shi4 shi2 jian4 lian4 xi2",
              "en": "\"学习\" actually contains two layers of meaning, \"学\" and \"习\". 学 means learning knowledge; 习 means putting it into practice and drilling it.",
              "sense": "includes all parts"
            },
            {
              "s": "然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。",
              "t": "然而，包括翟峰的父母，所有人都覺得，翟峰「瘋了」。",
              "py": "ran2 er2 bao1 kuo4 zhai2 feng1 de5 fu4 mu3 suo3 you3 ren2 dou1 jue2 de5 zhai2 feng1 feng1 le5",
              "en": "However, everyone — including Zhai Feng's parents — thought he had \"gone mad.\"",
              "sense": "spotlights one part"
            },
            {
              "s": "我们班所有人，包括最不爱运动的刘方，也都参加了这次运动会。",
              "t": "我們班所有人，包括最不愛運動的劉方，也都參加了這次運動會。",
              "py": "wo3 men5 ban1 suo3 you3 ren2 bao1 kuo4 zui4 bu2 ai4 yun4 dong4 de5 liu2 fang1 ye3 dou1 can1 jia1 le5 zhe4 ci4 yun4 dong4 hui4",
              "en": "Everyone in our class, even Liu Fang, who likes sports the least, took part in the sports meet.",
              "sense": "spotlights one part"
            }
          ]
        },
        {
          "point": "各自",
          "py": "ge4 zi4",
          "en": "Pronoun: \"each, respective.\" It points to each person or each side acting for itself. It usually goes together with the group it refers to, as the subject or as a modifier before a noun.",
          "examples": [
            {
              "s": "中场休息时间到了，比赛双方队员各自回场外休息。",
              "t": "中場休息時間到了，比賽雙方隊員各自回場外休息。",
              "py": "zhong1 chang3 xiu1 xi1 shi2 jian1 dao4 le5 bi3 sai4 shuang1 fang1 dui4 yuan2 ge4 zi4 hui2 chang3 wai4 xiu1 xi1",
              "en": "Halftime came, and the players on both sides each went off the field to rest."
            },
            {
              "s": "刘经理认真看了三家广告公司各自提交的计划。",
              "t": "劉經理認真看了三家廣告公司各自提交的計劃。",
              "py": "liu2 jing1 li3 ren4 zhen1 kan4 le5 san1 jia1 guang3 gao4 gong1 si1 ge4 zi4 ti2 jiao1 de5 ji4 hua4",
              "en": "Manager Liu carefully read the plans that each of the three advertising companies had submitted."
            },
            {
              "s": "以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。",
              "t": "以前陸地上的夜晚，他們在各自的房間，一家人沒有更多的交流。",
              "py": "yi3 qian2 lu4 di4 shang4 de5 ye4 wan3 ta1 men5 zai4 ge4 zi4 de5 fang2 jian1 yi4 jia1 ren2 mei2 you3 geng4 duo1 de5 jiao1 liu2",
              "en": "In the past, on land at night, they were each in their own rooms, and the family had little communication."
            }
          ]
        },
        {
          "point": "勿",
          "py": "wu4",
          "en": "Adverb: \"don't.\" It forbids or advises against something. It belongs to written language and is equivalent to 不要. You will see it on signs and hear it in old sayings. 切勿 means \"be sure never to.\"",
          "examples": [
            {
              "s": "非工作人员，请勿入内。",
              "t": "非工作人員，請勿入內。",
              "py": "fei1 gong1 zuo4 ren2 yuan2 qing3 wu4 ru4 nei4",
              "en": "Staff only — please do not enter."
            },
            {
              "s": "网上购票者须注意网站的安全性，切勿上当受骗。",
              "t": "網上購票者須注意網站的安全性，切勿上當受騙。",
              "py": "wang3 shang4 gou4 piao4 zhe3 xu1 zhu4 yi4 wang3 zhan4 de5 an1 quan2 xing4 qie4 wu4 shang4 dang4 shou4 pian4",
              "en": "People buying tickets online must watch the security of the website and be sure never to get taken in by a scam."
            },
            {
              "s": "中国有句老话：可上山，勿下海。",
              "t": "中國有句老話：可上山，勿下海。",
              "py": "zhong1 guo2 you3 ju4 lao3 hua4 ke3 shang4 shan1 wu4 xia4 hai3",
              "en": "There is an old Chinese saying: \"You may go up the mountain, but don't go down to the sea.\""
            }
          ]
        },
        {
          "point": "时刻",
          "py": "shi2 ke4",
          "en": "Two uses. (1) Noun: \"a moment,\" a point in time or a stretch of time (examples 1–2). (2) Adverb: \"at every moment, constantly.\" As an adverb it can be doubled into 时时刻刻 (examples 3–4).",
          "examples": [
            {
              "s": "在最后时刻，他为本队踢进了赢得比赛的关键一球。",
              "t": "在最後時刻，他為本隊踢進了贏得比賽的關鍵一球。",
              "py": "zai4 zui4 hou4 shi2 ke4 ta1 wei4 ben3 dui4 ti1 jin4 le5 ying2 de2 bi3 sai4 de5 guan1 jian4 yi4 qiu2",
              "en": "At the last moment, he kicked in the key goal that won the match for his team.",
              "sense": "noun"
            },
            {
              "s": "美好的时刻过去后是一个个紧张的夜晚。",
              "t": "美好的時刻過去後是一個個緊張的夜晚。",
              "py": "mei3 hao3 de5 shi2 ke4 guo4 qu4 hou4 shi4 yi2 ge4 ge4 jin3 zhang1 de5 ye4 wan3",
              "en": "After the beautiful moments passed came night after tense night.",
              "sense": "noun"
            },
            {
              "s": "我们非常需要你这样的人才，只要你愿意，公司的大门时刻都为你开着。",
              "t": "我們非常需要你這樣的人才，只要你願意，公司的大門時刻都為你開著。",
              "py": "wo3 men5 fei1 chang2 xu1 yao4 ni3 zhe4 yang4 de5 ren2 cai2 zhi3 yao4 ni3 yuan4 yi4 gong1 si1 de5 da4 men2 shi2 ke4 dou1 wei4 ni3 kai1 zhe5",
              "en": "We badly need talented people like you. As long as you are willing, the company's doors are always open to you.",
              "sense": "adverb"
            },
            {
              "s": "工作中，他时时刻刻提醒自己：乘客的安全是最重要的。",
              "t": "工作中，他時時刻刻提醒自己：乘客的安全是最重要的。",
              "py": "gong1 zuo4 zhong1 ta1 shi2 shi2 ke4 ke4 ti2 xing3 zi4 ji3 cheng2 ke4 de5 an1 quan2 shi4 zui4 zhong4 yao4 de5",
              "en": "At work he reminds himself at every moment: passengers' safety is the most important thing.",
              "sense": "adverb"
            }
          ]
        },
        {
          "point": "舒适 vs. 舒服",
          "py": "shu1 shi4 · shu1 fu5",
          "en": "Word discrimination. Both are adjectives meaning relaxed and pleasant, e.g. 饭店为入住的客人准备了舒适/舒服的房间 (\"The hotel prepared comfortable rooms for the guests checking in\"). But they differ in three ways:",
          "labels": [
            "舒适",
            "舒服"
          ],
          "discrimination": [
            {
              "a": "1. Mostly used in written language.\ne.g. 这款车内部空间宽大，乘坐舒适。(\"This car has roomy interior space, and it is comfortable to ride in.\")",
              "b": "1. Mostly used in spoken language.\ne.g. 他靠在沙发上舒舒服服地看电视。(\"He leaned back on the sofa and watched TV in comfort.\")"
            },
            {
              "a": "2. Focuses on the overall feeling an environment gives a person.\ne.g. 我们都需要一个轻松舒适的生活环境。(\"We all need a relaxed, comfortable living environment.\")",
              "b": "2. Focuses on a person's subjective, specific physical or mental feelings.\ne.g. 听了他的话，我心里很不舒服。(\"After hearing what he said, I felt very uneasy inside.\")"
            },
            {
              "a": "3. Rarely reduplicated.",
              "b": "3. Can be doubled as AABB (舒舒服服), and can also work as a verb, doubled as ABAB.\ne.g. 踢完球了？洗个热水澡舒服舒服吧。(\"Done playing ball? Take a hot shower and freshen up.\")"
            }
          ],
          "examples": []
        }
      ],
      "collocations": [
        {
          "verb": "轮流",
          "objects": "驾船 / 休息 / 照看",
          "en": "to take turns steering the boat / resting / looking after (someone)"
        },
        {
          "verb": "盼望",
          "objects": "（好）消息 / 过年 / 成功",
          "en": "to look forward to (good) news / the New Year / success"
        },
        {
          "verb": "稳定的",
          "objects": "工作 / 生活 / 关系 / 收入",
          "en": "a stable job / life / relationship / income"
        },
        {
          "verb": "平静的",
          "objects": "海面 / 心情 / 生活",
          "en": "a calm sea surface / a peaceful mood / a quiet life"
        },
        {
          "verb": "为 + 生活 / 工作 / 考试",
          "objects": "发愁",
          "en": "to worry about making a living / work / exams"
        },
        {
          "verb": "紧紧（地）/ 热情（地）",
          "objects": "拥抱",
          "en": "to hug tightly / warmly"
        },
        {
          "verb": "撞（倒 / 伤 / 断 / 开）",
          "objects": "— (中心语+补语)",
          "en": "to bump into and knock over / injure / break / knock open (verb + complement)"
        },
        {
          "verb": "漏（光 / 掉 / 出来）",
          "objects": "— (中心语+补语)",
          "en": "to leak out completely / leak away / leak out (verb + complement)"
        },
        {
          "verb": "一顿",
          "objects": "饭 / 海鲜",
          "en": "a meal / a seafood meal"
        },
        {
          "verb": "一道",
          "objects": "闪电",
          "en": "a bolt of lightning"
        }
      ],
      "reflection": {
        "prompt_en": "Writing prompt from the book: write a paragraph of at least 100 characters titled \"如果我是翟峰，我会（不会）……\" (If I were Zhai Feng, I would (would not)…), using this chapter's vocabulary. The app does not grade it. Copy your writing and paste it to Claude for feedback.",
        "questions": [
          "你有什么爱好吗？它给你的生活带来了什么好处？(Do you have a hobby? What good has it brought to your life?)",
          "你觉得应该怎么处理爱好和工作、家庭、生活的关系？举例说明。(How do you think a hobby should be balanced with work, family and life? Give examples.)",
          "如果你的爱好影响了你的正常生活，你会怎么办呢？(If your hobby affected your normal life, what would you do?)"
        ]
      },
      "warmup": {
        "weather": [
          {
            "s": "晴",
            "t": "晴",
            "py": "qing2",
            "en": "sunny, clear",
            "icon": "☀️"
          },
          {
            "s": "多云",
            "t": "多雲",
            "py": "duo1 yun2",
            "en": "cloudy (partly)",
            "icon": "⛅"
          },
          {
            "s": "雨转晴",
            "t": "雨轉晴",
            "py": "yu3 zhuan3 qing2",
            "en": "rain turning to sunshine",
            "icon": "🌦️"
          },
          {
            "s": "雨后彩虹",
            "t": "雨後彩虹",
            "py": "yu3 hou4 cai3 hong2",
            "en": "rainbow after the rain",
            "icon": "🌈"
          },
          {
            "s": "雷阵雨",
            "t": "雷陣雨",
            "py": "lei2 zhen4 yu3",
            "en": "thunder shower",
            "icon": "⛈️"
          },
          {
            "s": "阴",
            "t": "陰",
            "py": "yin1",
            "en": "overcast",
            "icon": "☁️"
          }
        ],
        "questions": [
          "你喜欢旅行吗？你喜欢什么样的旅行方式？不同的旅行方式你会选择什么交通工具？(Do you like to travel? What kind of travel do you like? For different ways of traveling, what transportation would you choose?)"
        ]
      },
      "cfu": [
        {
          "q": "What did Zhai Feng and his wife do for work at the start?",
          "choices": [
            "They were sailors",
            "They were railway workers",
            "They were TV reporters",
            "They ran a fishing business"
          ],
          "answer": 1
        },
        {
          "q": "Why did they sell their house and car?",
          "choices": [
            "They wanted to move overseas",
            "They had no savings, and needed money to buy a boat",
            "Their parents made them",
            "They were tired of driving"
          ],
          "answer": 1,
          "explain": "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船。"
        },
        {
          "q": "What did everyone, even his parents, think of Zhai Feng's plan?",
          "choices": [
            "It was a brave and wise idea",
            "It was too expensive but fun",
            "He had gone crazy",
            "They didn't care"
          ],
          "answer": 2,
          "explain": "包括翟峰的父母，所有人都觉得，翟峰“疯了”。"
        },
        {
          "q": "What did the family do in the evening at sea?",
          "choices": [
            "They studied navigation",
            "They sat together, watched movies or chatted",
            "They fished until midnight",
            "They went back to shore"
          ],
          "answer": 1
        },
        {
          "q": "What scared the family the most on the trip?",
          "choices": [
            "Running out of food",
            "Sharks",
            "Thunder and lightning together",
            "Cold weather"
          ],
          "answer": 2,
          "explain": "他们最怕雷电交加的时刻。"
        },
        {
          "q": "How long was the voyage, and how far?",
          "choices": [
            "Eight months, over 4,000 nautical miles",
            "Four months, 8,000 nautical miles",
            "One year, 400 nautical miles",
            "Eight days, 4,000 nautical miles"
          ],
          "answer": 0
        },
        {
          "q": "Where does the family want to go next?",
          "choices": [
            "Japan and Korea",
            "Australia and New Zealand",
            "Back to the railway",
            "Around the world in one trip"
          ],
          "answer": 1
        },
        {
          "q": "早晨收拾完房间后，妈妈喜欢____地坐在那把躺椅上休息一下。 Which fits?",
          "choices": [
            "舒舒服服 (from 舒服)",
            "舒舒适适 (from 舒适)"
          ],
          "answer": 0,
          "explain": "舒服 can double as AABB (舒舒服服); 舒适 is rarely doubled."
        },
        {
          "q": "这家餐厅装修精美、环境____。 Which fits?",
          "choices": [
            "舒适 (comfortable — about the environment)",
            "舒服 (comfortable — about a person's feeling)"
          ],
          "answer": 0,
          "explain": "舒适 focuses on the overall feeling an environment gives."
        },
        {
          "q": "我今天脖子有点儿不____，左右转动时有点儿疼。 Which fits?",
          "choices": [
            "舒适",
            "舒服"
          ],
          "answer": 1,
          "explain": "不舒服 is a person's own physical feeling, so it takes 舒服."
        },
        {
          "q": "这艘客船就像高级宾馆一样，除了有____的客舱外，还有餐厅、电影院、商店、舞厅、游泳池等。 Which fits?",
          "choices": [
            "舒适",
            "舒服"
          ],
          "answer": 0,
          "explain": "舒适 is the more written word, and it describes the cabins (the environment)."
        },
        {
          "q": "Which one is the written-language word for \"don't,\" usually seen on signs?",
          "choices": [
            "勿",
            "没",
            "别"
          ],
          "answer": 0,
          "explain": "勿 is formal and written; in speech people say 不要."
        }
      ]
    }
  ],

  /* COLLOCATION MATCH (from the book's 词语搭配 tables): the left word + the words the book pairs it with */
  collGame: [{"id": "u1-抱怨", "chapter": "u1", "type": "verb", "left": {"s": "抱怨", "t": "抱怨"}, "rights": [{"s": "别人", "t": "別人"}, {"s": "妻子", "t": "妻子"}], "en": "to complain about"}, {"id": "u1-爱护", "chapter": "u1", "type": "verb", "left": {"s": "爱护", "t": "愛護"}, "rights": [{"s": "环境", "t": "環境"}, {"s": "花草树木", "t": "花草樹木"}, {"s": "公物", "t": "公物"}, {"s": "学生", "t": "學生"}], "en": "to take good care of"}, {"id": "u1-电台的", "chapter": "u1", "type": "adj", "left": {"s": "电台的", "t": "電臺的"}, "rights": [{"s": "记者", "t": "記者"}, {"s": "广播", "t": "廣播"}, {"s": "新闻", "t": "新聞"}], "en": "a radio station's …"}, {"id": "u1-一项", "chapter": "u1", "type": "measure", "left": {"s": "一项", "t": "一項"}, "rights": [{"s": "运动", "t": "運動"}, {"s": "工作", "t": "工作"}, {"s": "任务", "t": "任務"}, {"s": "计划", "t": "計劃"}, {"s": "技术", "t": "技術"}, {"s": "研究", "t": "研究"}, {"s": "调查", "t": "調查"}, {"s": "奖项", "t": "獎項"}], "en": "one item of …"}, {"id": "u2-断", "chapter": "u2", "type": "verb", "left": {"s": "断", "t": "斷"}, "rights": [{"s": "水", "t": "水"}, {"s": "电", "t": "電"}, {"s": "联系", "t": "聯繫"}], "en": "to cut off"}, {"id": "u2-晒", "chapter": "u2", "type": "verb", "left": {"s": "晒", "t": "曬"}, "rights": [{"s": "被子", "t": "被子"}, {"s": "衣服", "t": "衣服"}, {"s": "太阳", "t": "太陽"}], "en": "to dry in the sun"}, {"id": "u2-强烈的", "chapter": "u2", "type": "adj", "left": {"s": "强烈的", "t": "強烈的"}, "rights": [{"s": "阳光", "t": "陽光"}, {"s": "感情", "t": "感情"}, {"s": "对比", "t": "對比"}], "en": "strong, intense …"}, {"id": "u2-长途", "chapter": "u2", "type": "adj", "left": {"s": "长途", "t": "長途"}, "rights": [{"s": "旅行", "t": "旅行"}, {"s": "汽车", "t": "汽車"}, {"s": "电话", "t": "電話"}], "en": "long-distance …"}, {"id": "u2-坚决", "chapter": "u2", "type": "verb", "left": {"s": "坚决", "t": "堅決"}, "rights": [{"s": "反对", "t": "反對"}, {"s": "改正", "t": "改正"}], "en": "resolutely …"}, {"id": "u2-一套", "chapter": "u2", "type": "measure", "left": {"s": "一套", "t": "一套"}, "rights": [{"s": "房子", "t": "房子"}, {"s": "家具", "t": "傢俱"}, {"s": "餐具", "t": "餐具"}, {"s": "邮票", "t": "郵票"}, {"s": "西服", "t": "西服"}], "en": "a set / suite of …"}, {"id": "u2-一阵", "chapter": "u2", "type": "measure", "left": {"s": "一阵", "t": "一陣"}, "rights": [{"s": "风", "t": "風"}, {"s": "雨", "t": "雨"}, {"s": "歌声", "t": "歌聲"}, {"s": "香味", "t": "香味"}], "en": "a spell / whiff of …"}, {"id": "u3-轮流", "chapter": "u3", "type": "verb", "left": {"s": "轮流", "t": "輪流"}, "rights": [{"s": "驾船", "t": "駕船"}, {"s": "休息", "t": "休息"}, {"s": "照看", "t": "照看"}], "en": "to take turns …"}, {"id": "u3-盼望", "chapter": "u3", "type": "verb", "left": {"s": "盼望", "t": "盼望"}, "rights": [{"s": "消息", "t": "消息"}, {"s": "过年", "t": "過年"}, {"s": "成功", "t": "成功"}], "en": "to look forward to …"}, {"id": "u3-稳定的", "chapter": "u3", "type": "adj", "left": {"s": "稳定的", "t": "穩定的"}, "rights": [{"s": "工作", "t": "工作"}, {"s": "生活", "t": "生活"}, {"s": "关系", "t": "關係"}, {"s": "收入", "t": "收入"}], "en": "a stable …"}, {"id": "u3-平静的", "chapter": "u3", "type": "adj", "left": {"s": "平静的", "t": "平靜的"}, "rights": [{"s": "海面", "t": "海面"}, {"s": "心情", "t": "心情"}, {"s": "生活", "t": "生活"}], "en": "a calm / peaceful …"}, {"id": "u3-一顿", "chapter": "u3", "type": "measure", "left": {"s": "一顿", "t": "一頓"}, "rights": [{"s": "饭", "t": "飯"}, {"s": "海鲜", "t": "海鮮"}], "en": "a meal of …"}],

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
    { s: '这次来北京你们照顾得非常周到', t: '這次來北京你們照顧得非常周到', py: 'zhe4 ci4 lai2 bei3 jing1 ni3 men5 zhao4 gu4 de5 fei1 chang2 zhou1 dao4', en: 'You took such thoughtful care of us this time in Beijing.', b: [[12, 2]] },
    {"s": "翟峰和妻子都是铁路工人", "t": "翟峰和妻子都是鐵路工人", "py": "zhai2 feng1 he2 qi1 zi3 dou1 shi4 tie3 lu4 gong1 ren2", "en": "Zhai Feng and his wife were both railway workers.", "b": [[9, 2]]},
    {"s": "他们有房有车从不用为生活发愁", "t": "他們有房有車從不用為生活發愁", "py": "ta1 men5 you3 fang2 you3 che1 cong2 bu2 yong4 wei4 sheng1 huo2 fa1 chou2", "en": "They had a home and a car and never had to worry about making a living.", "b": [[12, 2]]},
    {"s": "翟峰不想过这样平静的生活", "t": "翟峰不想過這樣平靜的生活", "py": "zhai2 feng1 bu4 xiang3 guo4 zhe4 yang4 ping2 jing4 de5 sheng1 huo2", "en": "Zhai Feng did not want a life this quiet.", "b": [[7, 2]]},
    {"s": "翟峰迷上了帆船", "t": "翟峰迷上了帆船", "py": "zhai2 feng1 mi2 shang4 le5 fan1 chuan2", "en": "Zhai Feng got hooked on sailing.", "b": [[5, 2]]},
    {"s": "他们买下了一艘二手船", "t": "他們買下了一艘二手船", "py": "ta1 men5 mai3 xia4 le5 yi4 sou1 er4 shou3 chuan2", "en": "They bought a second-hand boat.", "b": [[7, 2]]},
    {"s": "翟峰和妻子轮流驾船", "t": "翟峰和妻子輪流駕船", "py": "zhai2 feng1 he2 qi1 zi3 lun2 liu2 jia4 chuan2", "en": "Zhai Feng and his wife took turns piloting the boat.", "b": [[5, 2]]},
    {"s": "妻子会给全家人做一顿美味的海鲜", "t": "妻子會給全家人做一頓美味的海鮮", "py": "qi1 zi3 hui4 gei3 quan2 jia1 ren2 zuo4 yi2 dun4 mei3 wei4 de5 hai3 xian1", "en": "His wife would cook a delicious seafood meal for the whole family.", "b": [[13, 2]]},
    {"s": "傍晚是一家人最舒适的时候", "t": "傍晚是一家人最舒適的時候", "py": "bang4 wan3 shi4 yi4 jia1 ren2 zui4 shu1 shi4 de5 shi2 hou4", "en": "Evening was the family's most comfortable time.", "b": [[7, 2]]},
    {"s": "他们在各自的房间", "t": "他們在各自的房間", "py": "ta1 men5 zai4 ge4 zi4 de5 fang2 jian1", "en": "They were each in their own rooms.", "b": [[3, 2]]},
    {"s": "中国有句老话可上山勿下海", "t": "中國有句老話可上山勿下海", "py": "zhong1 guo2 you3 ju4 lao3 hua4 ke3 shang4 shan1 wu4 xia4 hai3", "en": "There is an old Chinese saying: go up the mountain, but don't go down to the sea.", "b": [[9, 1]]},
    {"s": "小船随时有可能被闪电击到", "t": "小船隨時有可能被閃電擊到", "py": "xiao3 chuan2 sui2 shi2 you3 ke3 neng2 bei4 shan3 dian4 ji1 dao4", "en": "The little boat could be struck by lightning at any moment.", "b": [[8, 2]]},
    {"s": "一家三口紧紧拥抱在一起", "t": "一家三口緊緊擁抱在一起", "py": "yi4 jia1 san1 kou3 jin3 jin3 yong1 bao4 zai4 yi4 qi3", "en": "The family of three held each other tightly.", "b": [[6, 2]]},
    {"s": "航海通向他想要的未来", "t": "航海通向他想要的未來", "py": "hang2 hai3 tong1 xiang4 ta1 xiang3 yao4 de5 wei4 lai2", "en": "Sailing leads to the future he wants.", "b": [[8, 2]]},
    {"s": "他们想看看这个时代到底是什么样子", "t": "他們想看看這個時代到底是什麼樣子", "py": "ta1 men5 xiang3 kan4 kan4 zhe4 ge4 shi2 dai4 dao4 di3 shi4 shen2 me5 yang4 zi5", "en": "They want to see what this era is really like.", "b": [[7, 2]]}
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
    { chunks: ['那两只羊', '一见到青草', '就立刻', '去吃草了'], tchunks: ['那兩隻羊', '一見到青草', '就立刻', '去吃草了'], py: 'na4 liang3 zhi1 yang2 yi2 jian4 dao4 qing1 cao3 jiu4 li4 ke4 qu4 chi1 cao3 le5', en: 'As soon as those two goats saw the fresh grass, they immediately went to eat it.' },
    {"chunks": ["翟峰和妻子", "都是", "铁路工人"], "tchunks": ["翟峰和妻子", "都是", "鐵路工人"], "py": "zhai2 feng1 he2 qi1 zi3 dou1 shi4 tie3 lu4 gong1 ren2", "en": "Zhai Feng and his wife were both railway workers."},
    {"chunks": ["他们有房有车", "从不用", "为生活", "发愁"], "tchunks": ["他們有房有車", "從不用", "為生活", "發愁"], "py": "ta1 men5 you3 fang2 you3 che1 cong2 bu2 yong4 wei4 sheng1 huo2 fa1 chou2", "en": "They had a home and a car and never had to worry about making a living."},
    {"chunks": ["翟峰", "迷上了", "帆船"], "tchunks": ["翟峰", "迷上了", "帆船"], "py": "zhai2 feng1 mi2 shang4 le5 fan1 chuan2", "en": "Zhai Feng got hooked on sailing."},
    {"chunks": ["翟峰和妻子", "轮流", "驾船"], "tchunks": ["翟峰和妻子", "輪流", "駕船"], "py": "zhai2 feng1 he2 qi1 zi3 lun2 liu2 jia4 chuan2", "en": "Zhai Feng and his wife took turns piloting the boat."},
    {"chunks": ["妻子", "会给全家人", "做", "一顿美味的", "海鲜"], "tchunks": ["妻子", "會給全家人", "做", "一頓美味的", "海鮮"], "py": "qi1 zi3 hui4 gei3 quan2 jia1 ren2 zuo4 yi2 dun4 mei3 wei4 de5 hai3 xian1", "en": "His wife would cook a delicious seafood meal for the whole family."},
    {"chunks": ["傍晚", "是", "一家人", "最舒适的", "时候"], "tchunks": ["傍晚", "是", "一家人", "最舒適的", "時候"], "py": "bang4 wan3 shi4 yi4 jia1 ren2 zui4 shu1 shi4 de5 shi2 hou4", "en": "Evening was the family's most comfortable time."},
    {"chunks": ["所有人", "都觉得", "翟峰", "疯了"], "tchunks": ["所有人", "都覺得", "翟峰", "瘋了"], "py": "suo3 you3 ren2 dou1 jue2 de5 zhai2 feng1 feng1 le5", "en": "Everyone thought Zhai Feng had gone crazy."},
    {"chunks": ["他们", "在各自的", "房间"], "tchunks": ["他們", "在各自的", "房間"], "py": "ta1 men5 zai4 ge4 zi4 de5 fang2 jian1", "en": "They were each in their own rooms."},
    {"chunks": ["中国", "有句", "老话", "可上山", "勿下海"], "tchunks": ["中國", "有句", "老話", "可上山", "勿下海"], "py": "zhong1 guo2 you3 ju4 lao3 hua4 ke3 shang4 shan1 wu4 xia4 hai3", "en": "There is an old Chinese saying: go up the mountain, but don't go down to the sea."},
    {"chunks": ["翟峰一家", "终于", "回到了", "家"], "tchunks": ["翟峰一家", "終於", "回到了", "家"], "py": "zhai2 feng1 yi4 jia1 zhong1 yu2 hui2 dao4 le5 jia1", "en": "Zhai Feng's family finally made it back home."},
    {"chunks": ["他们", "将", "再次", "出发"], "tchunks": ["他們", "將", "再次", "出發"], "py": "ta1 men5 jiang1 zai4 ci4 chu1 fa1", "en": "They will set out again."}
  ]
};

/* EXPRESSIONS: idioms and set phrases worth knowing, found inside each reading (soft-tinted, tap for the card) */
window.CONTENT.expressions = {"u1": [{"s": "前几年", "t": "前幾年", "py": "qian2 ji3 nian2", "lit": "the previous few years", "mean": "a few years ago", "use": "A casual way to point back at the recent past. It works with other units too: 前几天 (a few days ago), 前几个月 (a few months ago)."}, {"s": "几年如一日", "t": "幾年如一日", "py": "ji3 nian2 ru2 yi1 ri4", "lit": "several years like a single day", "mean": "year after year, with no change and no letting up", "use": "Praise for someone who keeps up the same effort or care for a long time. The classic form is 十年如一日 (ten years like one day). Here 几年 replaces the number, and the phrase takes 地 before the verb."}, {"s": "不知找了多少家医院", "t": "不知找了多少家醫院", "py": "bu4 zhi1 zhao3 le5 duo1 shao3 jia1 yi1 yuan4", "lit": "(he) did not know how many hospitals he sought out", "mean": "he went to countless hospitals", "use": "Pattern 不知 + verb + 多少 + measure word: the speaker will not even guess a number, which makes it mean \"countless\". Compare 不知花了多少钱 (spent who knows how much money)."}, {"s": "十几年", "t": "十幾年", "py": "shi2 ji3 nian2", "lit": "ten-some years", "mean": "more than ten years (somewhere from 11 to 19)", "use": "十几 means 11 to 19: 十几个人 is 11 to 19 people. Close to 十多年 but a bit more specific."}, {"s": "红过脸", "t": "紅過臉", "py": "hong2 guo4 lian3", "lit": "has turned red in the face", "mean": "to have gotten angry, to have had a quarrel", "use": "Nearly always negative: 从来没红过脸 means \"never even had a spat\". Do not confuse it with 红着脸 in Chapter 2, which is blushing from shyness."}, {"s": "相亲相爱", "t": "相親相愛", "py": "xiang1 qin1 xiang1 ai4", "lit": "close to each other, love each other", "mean": "to love each other dearly", "use": "A warm set phrase for couples, families or friends. It sits right next to 相敬如宾 in this text."}, {"s": "看个究竟", "t": "看個究竟", "py": "kan4 ge4 jiu1 jing4", "lit": "take a look at the real story", "mean": "to go and see what is really going on", "use": "The 个 makes the action light and casual: 看个究竟, 问个明白. Here 究竟 is a noun, the real story behind something."}, {"s": "别出声", "t": "別出聲", "py": "bie2 chu1 sheng1", "lit": "do not put out a sound", "mean": "do not make a sound, shh", "use": "出声 means to make a sound or to speak up. A quick, quiet command."}, {"s": "赶蚊子", "t": "趕蚊子", "py": "gan3 wen2 zi5", "lit": "chase mosquitoes", "mean": "to shoo mosquitoes away", "use": "赶 here means to chase or drive away: 赶苍蝇 (shoo flies). It is a different 赶 from 赶火车 (hurry to catch a train)."}], "u2": [{"s": "长年以来", "t": "長年以來", "py": "chang2 nian2 yi3 lai2", "lit": "long years since then", "mean": "for many years now, for years on end", "use": "以来 marks a stretch of time up to the present, and 长年 stresses that it has been years."}, {"s": "外地打工", "t": "外地打工", "py": "wai4 di4 da3 gong1", "lit": "outside place, do labor", "mean": "to work away from home", "use": "外地 means anywhere outside your own hometown or region, and 外地人 is an outsider or migrant. 打工 is the word for working a job for others, often migrant work."}, {"s": "晒晒", "t": "曬曬", "py": "shai4 shai4", "lit": "sun it, sun it", "mean": "to give (it) a good airing in the sun", "use": "Doubling a verb (AA) makes the action light and casual: 看看, 想想. Airing quilts in the sun is a familiar sight in Chinese homes."}, {"s": "打扫打扫", "t": "打掃打掃", "py": "da3 sao3 da3 sao3", "lit": "sweep it, sweep it", "mean": "to tidy up a bit", "use": "ABAB doubling softens the verb, like \"give it a bit of a clean\". Parents use it a lot when offering to help."}, {"s": "轻声细语", "t": "輕聲細語", "py": "qing1 sheng1 xi4 yu3", "lit": "light voice, thin words", "mean": "speaking softly and gently", "use": "A four-character set phrase, usually praise, for a gentle manner of speaking."}, {"s": "红着脸", "t": "紅著臉", "py": "hong2 zhe5 lian3", "lit": "with the face red", "mean": "blushing", "use": "Here it is shyness or embarrassment (compare 红过脸 in Chapter 1, which is anger). 着 shows the state is ongoing."}, {"s": "转眼", "t": "轉眼", "py": "zhuan3 yan3", "lit": "turn the eyes", "mean": "in the blink of an eye", "use": "A time-passing marker, often at the start of a sentence: 转眼又是一年 (in a blink, another year)."}, {"s": "深冬", "t": "深冬", "py": "shen1 dong1", "lit": "deep winter", "mean": "the depth of winter", "use": "深 + season: 深秋 (late autumn), and 深夜 (the dead of night)."}, {"s": "冷冷清清", "t": "冷冷清清", "py": "leng3 leng3 qing1 qing1", "lit": "cold-cold clear-clear", "mean": "desolate, deserted and chilly", "use": "AABB doubling of 冷清. It describes a place with no people and no warmth, like an empty house."}, {"s": "心里发寒", "t": "心裡發寒", "py": "xin1 li3 fa1 han2", "lit": "in the heart, give off cold", "mean": "to feel a chill, a sinking feeling", "use": "发 + feeling: 发冷, 发抖, and 发愁 (Chapter 3). 发寒 covers both a physical chill and unease."}, {"s": "扑面而来", "t": "撲面而來", "py": "pu1 mian4 er2 lai2", "lit": "pounce on the face and come", "mean": "to hit you in the face, to rush at you", "use": "A fixed pattern whose subject is usually air, a smell or a mood: 春风扑面而来 (spring wind on your face)."}, {"s": "干干净净", "t": "乾乾淨淨", "py": "gan1 gan1 jing4 jing4", "lit": "dry-dry clean-clean", "mean": "spotlessly clean", "use": "AABB doubling of 干净 makes it vivid. Same pattern in 高高兴兴 (cheerful) and 舒舒服服 (nice and comfortable)."}, {"s": "天色已晚", "t": "天色已晚", "py": "tian1 se4 yi3 wan3", "lit": "the sky color is already late", "mean": "it was already late (it was getting dark)", "use": "Written and slightly literary. In speech you would say 天已经黑了 or 已经很晚了."}, {"s": "鼻子一酸", "t": "鼻子一酸", "py": "bi2 zi5 yi4 suan1", "lit": "the nose gives one sour", "mean": "to feel a sting in the nose, close to tears, moved", "use": "The body reaction of being touched. 一 + adjective marks a sudden change: 心里一酸."}], "u3": [{"s": "迷上", "t": "迷上", "py": "mi2 shang4", "lit": "fascinated, get on to", "mean": "to get hooked on, to fall for", "use": "迷 means to be fascinated, and 迷上 marks the moment you get hooked: 迷上了篮球 (got hooked on basketball)."}, {"s": "世界之门", "t": "世界之門", "py": "shi4 jie4 zhi1 men2", "lit": "the door of the world", "mean": "the gateway to the world", "use": "Figurative and literary. 之 links two nouns like \"of\", and you will see it in slogans and titles."}, {"s": "无边无际", "t": "無邊無際", "py": "wu2 bian1 wu2 ji4", "lit": "no edge, no border", "mean": "boundless, endless", "use": "A set phrase for the sea, the sky, a desert or something abstract. It follows the 无…无… pattern, like 无穷无尽."}, {"s": "有房有车", "t": "有房有車", "py": "you3 fang2 you3 che1", "lit": "have a house, have a car", "mean": "owning a home and a car", "use": "Shorthand for a comfortable, settled life in China, and often the checklist for a good marriage prospect. Pattern 有A有B."}, {"s": "卖房卖车", "t": "賣房賣車", "py": "mai4 fang2 mai4 che1", "lit": "sell the house, sell the car", "mean": "to sell everything you own, a drastic step", "use": "Two parallel verb-object phrases give a bold, all-in feeling."}, {"s": "大大小小", "t": "大大小小", "py": "da4 da4 xiao3 xiao3", "lit": "big-big small-small", "mean": "big and small, of all sizes", "use": "Doubling both halves means \"all kinds of\": 大大小小的问题 (problems large and small)."}, {"s": "雷电交加", "t": "雷電交加", "py": "lei2 dian4 jiao1 jia1", "lit": "thunder, lightning, join and add", "mean": "thunder and lightning at the same time", "use": "A storm set phrase, often seen next to 风雨交加. 交加 means happening together, usually unpleasant things."}, {"s": "一家三口", "t": "一家三口", "py": "yi4 jia1 san1 kou3", "lit": "one family, three mouths", "mean": "a family of three", "use": "口 counts family members: 一家五口 is a family of five. A warm, everyday way to describe a household."}, {"s": "可上山，勿下海", "t": "可上山，勿下海", "py": "ke3 shang4 shan1 wu4 xia4 hai3", "lit": "may go up the mountain, do not go down to the sea", "mean": "old saying: better the mountain than the sea, because the sea is more dangerous", "use": "It warns about the dangers of the sea. Bonus: 下海 also has a second meaning, \"to quit a secure job and go into business\", which was a buzzword in the 1990s."}, {"s": "北风南下", "t": "北風南下", "py": "bei3 feng1 nan2 xia4", "lit": "the north wind goes south", "mean": "the cold north wind sweeping south", "use": "It is the sailing-season cue in this story: when the northerly winds come in November, it is time to set out. 南下 means to head south."}]};
