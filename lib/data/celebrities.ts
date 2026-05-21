// Famous people and fictional characters mapped to personality archetypes
// This makes results more engaging and shareable

export interface Celebrity {
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  category: 'historical' | 'business' | 'entertainment' | 'fictional' | 'sports';
}

export const celebrities: Record<string, Celebrity[]> = {
  'ILOH-S': [
    {
      name: { en: 'Oprah Winfrey', zh: '奥普拉·温弗瑞' },
      description: { en: 'Media mogul and philanthropist', zh: '媒体大亨和慈善家' },
      category: 'entertainment'
    },
    {
      name: { en: 'Barack Obama', zh: '巴拉克·奥巴马' },
      description: { en: 'Former US President', zh: '美国前总统' },
      category: 'historical'
    }
  ],
  'ILOH-T': [
    {
      name: { en: 'Emma Watson', zh: '艾玛·沃特森' },
      description: { en: 'Actress and activist', zh: '演员和活动家' },
      category: 'entertainment'
    }
  ],
  'ILOC-S': [
    {
      name: { en: 'Steve Jobs', zh: '史蒂夫·乔布斯' },
      description: { en: 'Apple co-founder', zh: '苹果公司联合创始人' },
      category: 'business'
    },
    {
      name: { en: 'Tony Stark (Iron Man)', zh: '托尼·斯塔克（钢铁侠）' },
      description: { en: 'Genius inventor and superhero', zh: '天才发明家和超级英雄' },
      category: 'fictional'
    }
  ],
  'ILOC-T': [
    {
      name: { en: 'Elon Musk', zh: '埃隆·马斯克' },
      description: { en: 'Tesla and SpaceX CEO', zh: '特斯拉和SpaceX首席执行官' },
      category: 'business'
    }
  ],
  'ILRH-S': [
    {
      name: { en: 'Albert Einstein', zh: '阿尔伯特·爱因斯坦' },
      description: { en: 'Theoretical physicist', zh: '理论物理学家' },
      category: 'historical'
    },
    {
      name: { en: 'Mark Zuckerberg', zh: '马克·扎克伯格' },
      description: { en: 'Facebook founder', zh: 'Facebook创始人' },
      category: 'business'
    }
  ],
  'ILRH-T': [
    {
      name: { en: 'Isaac Newton', zh: '艾萨克·牛顿' },
      description: { en: 'Mathematician and physicist', zh: '数学家和物理学家' },
      category: 'historical'
    }
  ],
  'ILRC-S': [
    {
      name: { en: 'Sherlock Holmes', zh: '夏洛克·福尔摩斯' },
      description: { en: 'Master detective', zh: '大侦探' },
      category: 'fictional'
    },
    {
      name: { en: 'Bill Gates', zh: '比尔·盖茨' },
      description: { en: 'Microsoft co-founder', zh: '微软联合创始人' },
      category: 'business'
    }
  ],
  'ILRC-T': [
    {
      name: { en: 'Nikola Tesla', zh: '尼古拉·特斯拉' },
      description: { en: 'Inventor and engineer', zh: '发明家和工程师' },
      category: 'historical'
    }
  ],
  'ISOH-S': [
    {
      name: { en: 'Taylor Swift', zh: '泰勒·斯威夫特' },
      description: { en: 'Singer-songwriter', zh: '创作型歌手' },
      category: 'entertainment'
    }
  ],
  'ISOH-T': [
    {
      name: { en: 'Vincent van Gogh', zh: '文森特·梵高' },
      description: { en: 'Post-impressionist painter', zh: '后印象派画家' },
      category: 'historical'
    }
  ],
  'ISOC-S': [
    {
      name: { en: 'David Bowie', zh: '大卫·鲍伊' },
      description: { en: 'Musician and artist', zh: '音乐家和艺术家' },
      category: 'entertainment'
    }
  ],
  'ISOC-T': [
    {
      name: { en: 'Kurt Cobain', zh: '科特·柯本' },
      description: { en: 'Nirvana frontman', zh: 'Nirvana乐队主唱' },
      category: 'entertainment'
    }
  ],
  'ISRH-S': [
    {
      name: { en: 'J.K. Rowling', zh: 'J.K.罗琳' },
      description: { en: 'Harry Potter author', zh: '《哈利·波特》作者' },
      category: 'entertainment'
    }
  ],
  'ISRH-T': [
    {
      name: { en: 'Emily Dickinson', zh: '艾米莉·狄金森' },
      description: { en: 'Poet', zh: '诗人' },
      category: 'historical'
    }
  ],
  'ISRC-S': [
    {
      name: { en: 'Bob Dylan', zh: '鲍勃·迪伦' },
      description: { en: 'Singer-songwriter', zh: '创作型歌手' },
      category: 'entertainment'
    }
  ],
  'ISRC-T': [
    {
      name: { en: 'Frida Kahlo', zh: '弗里达·卡罗' },
      description: { en: 'Painter', zh: '画家' },
      category: 'historical'
    }
  ],
  'PLOH-S': [
    {
      name: { en: 'Warren Buffett', zh: '沃伦·巴菲特' },
      description: { en: 'Investor and philanthropist', zh: '投资家和慈善家' },
      category: 'business'
    }
  ],
  'PLOH-T': [
    {
      name: { en: 'Princess Diana', zh: '戴安娜王妃' },
      description: { en: 'British royal and humanitarian', zh: '英国王室成员和人道主义者' },
      category: 'historical'
    }
  ],
  'PLOC-S': [
    {
      name: { en: 'Margaret Thatcher', zh: '玛格丽特·撒切尔' },
      description: { en: 'Former UK Prime Minister', zh: '英国前首相' },
      category: 'historical'
    }
  ],
  'PLOC-T': [
    {
      name: { en: 'Gordon Ramsay', zh: '戈登·拉姆齐' },
      description: { en: 'Celebrity chef', zh: '名厨' },
      category: 'entertainment'
    }
  ],
  'PLRH-S': [
    {
      name: { en: 'Angela Merkel', zh: '安格拉·默克尔' },
      description: { en: 'Former German Chancellor', zh: '德国前总理' },
      category: 'historical'
    }
  ],
  'PLRH-T': [
    {
      name: { en: 'George Washington', zh: '乔治·华盛顿' },
      description: { en: 'First US President', zh: '美国第一任总统' },
      category: 'historical'
    }
  ],
  'PLRC-S': [
    {
      name: { en: 'Judge Judy', zh: '朱迪法官' },
      description: { en: 'TV judge', zh: '电视法官' },
      category: 'entertainment'
    }
  ],
  'PLRC-T': [
    {
      name: { en: 'Dwight Schrute', zh: '德怀特·施鲁特' },
      description: { en: 'The Office character', zh: '《办公室》角色' },
      category: 'fictional'
    }
  ],
  'PSOH-S': [
    {
      name: { en: 'Dwayne "The Rock" Johnson', zh: '道恩·强森（巨石）' },
      description: { en: 'Actor and former wrestler', zh: '演员和前摔跤手' },
      category: 'entertainment'
    }
  ],
  'PSOH-T': [
    {
      name: { en: 'Robin Williams', zh: '罗宾·威廉姆斯' },
      description: { en: 'Actor and comedian', zh: '演员和喜剧演员' },
      category: 'entertainment'
    }
  ],
  'PSOC-S': [
    {
      name: { en: 'Muhammad Ali', zh: '穆罕默德·阿里' },
      description: { en: 'Boxing legend', zh: '拳击传奇' },
      category: 'sports'
    }
  ],
  'PSOC-T': [
    {
      name: { en: 'Kanye West', zh: '坎耶·韦斯特' },
      description: { en: 'Rapper and producer', zh: '说唱歌手和制作人' },
      category: 'entertainment'
    }
  ],
  'PSRH-S': [
    {
      name: { en: 'Serena Williams', zh: '塞雷娜·威廉姆斯' },
      description: { en: 'Tennis champion', zh: '网球冠军' },
      category: 'sports'
    }
  ],
  'PSRH-T': [
    {
      name: { en: 'Michael Jordan', zh: '迈克尔·乔丹' },
      description: { en: 'Basketball legend', zh: '篮球传奇' },
      category: 'sports'
    }
  ],
  'PSRC-S': [
    {
      name: { en: 'Cristiano Ronaldo', zh: '克里斯蒂亚诺·罗纳尔多' },
      description: { en: 'Football superstar', zh: '足球巨星' },
      category: 'sports'
    }
  ],
  'PSRC-T': [
    {
      name: { en: 'Kobe Bryant', zh: '科比·布莱恩特' },
      description: { en: 'Basketball legend', zh: '篮球传奇' },
      category: 'sports'
    }
  ]
};
