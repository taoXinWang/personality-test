// Signature traits for each personality type
// These are memorable, shareable characteristics that users can identify with

export interface SignatureTraits {
  emoji: string;
  tagline: {
    en: string;
    zh: string;
  };
  traits: {
    en: string[];
    zh: string[];
  };
}

export const signatureTraits: Record<string, SignatureTraits> = {
  'ILOH-S': {
    emoji: '🌟',
    tagline: {
      en: 'The Bridge Builder',
      zh: '桥梁建造者'
    },
    traits: {
      en: ['Visionary Leader', 'Team Harmonizer', 'Change Champion'],
      zh: ['远见领袖', '团队协调者', '变革推动者']
    }
  },
  'ILOH-T': {
    emoji: '🌟',
    tagline: {
      en: 'The Empathetic Innovator',
      zh: '共情创新者'
    },
    traits: {
      en: ['Deep Connector', 'Thoughtful Planner', 'Growth Seeker'],
      zh: ['深度连接者', '周到规划者', '成长追求者']
    }
  },
  'ILOC-S': {
    emoji: '⚡',
    tagline: {
      en: 'The Bold Disruptor',
      zh: '大胆颠覆者'
    },
    traits: {
      en: ['Fearless Innovator', 'Direct Communicator', 'Status Quo Challenger'],
      zh: ['无畏创新者', '直接沟通者', '现状挑战者']
    }
  },
  'ILOC-T': {
    emoji: '⚡',
    tagline: {
      en: 'The Passionate Reformer',
      zh: '热情改革者'
    },
    traits: {
      en: ['Intense Visionary', 'Perfectionist', 'Driven Achiever'],
      zh: ['强烈远见者', '完美主义者', '驱动成就者']
    }
  },
  'ILRH-S': {
    emoji: '🧠',
    tagline: {
      en: 'The Quiet Genius',
      zh: '安静天才'
    },
    traits: {
      en: ['Deep Thinker', 'System Designer', 'Calm Innovator'],
      zh: ['深度思考者', '系统设计师', '冷静创新者']
    }
  },
  'ILRH-T': {
    emoji: '🧠',
    tagline: {
      en: 'The Reflective Mastermind',
      zh: '反思策划者'
    },
    traits: {
      en: ['Introspective Genius', 'Detail Perfectionist', 'Self-Aware Creator'],
      zh: ['内省天才', '细节完美主义者', '自我觉察创造者']
    }
  },
  'ILRC-S': {
    emoji: '🎯',
    tagline: {
      en: 'The Strategic Lone Wolf',
      zh: '战略独行者'
    },
    traits: {
      en: ['Independent Thinker', 'Efficiency Expert', 'Logical Innovator'],
      zh: ['独立思考者', '效率专家', '逻辑创新者']
    }
  },
  'ILRC-T': {
    emoji: '🎯',
    tagline: {
      en: 'The Intense Perfectionist',
      zh: '强烈完美主义者'
    },
    traits: {
      en: ['Self-Critical Genius', 'Relentless Improver', 'Deep Analyzer'],
      zh: ['自我批判天才', '不懈改进者', '深度分析师']
    }
  },
  'ISOH-S': {
    emoji: '🎨',
    tagline: {
      en: 'The Creative Connector',
      zh: '创意连接者'
    },
    traits: {
      en: ['Artistic Soul', 'Warm Collaborator', 'Authentic Creator'],
      zh: ['艺术灵魂', '温暖合作者', '真实创造者']
    }
  },
  'ISOH-T': {
    emoji: '🎨',
    tagline: {
      en: 'The Sensitive Artist',
      zh: '敏感艺术家'
    },
    traits: {
      en: ['Emotional Depth', 'Creative Vulnerability', 'Passionate Creator'],
      zh: ['情感深度', '创造性脆弱', '热情创造者']
    }
  },
  'ISOC-S': {
    emoji: '🦋',
    tagline: {
      en: 'The Free Spirit',
      zh: '自由精神'
    },
    traits: {
      en: ['Spontaneous Creator', 'Bold Expresser', 'Unconventional Thinker'],
      zh: ['自发创造者', '大胆表达者', '非传统思考者']
    }
  },
  'ISOC-T': {
    emoji: '🦋',
    tagline: {
      en: 'The Tortured Artist',
      zh: '挣扎艺术家'
    },
    traits: {
      en: ['Intense Feeler', 'Raw Authenticity', 'Emotional Rebel'],
      zh: ['强烈感受者', '原始真实', '情感叛逆者']
    }
  },
  'ISRH-S': {
    emoji: '📚',
    tagline: {
      en: 'The Quiet Creator',
      zh: '安静创造者'
    },
    traits: {
      en: ['Imaginative Writer', 'Peaceful Innovator', 'Thoughtful Artist'],
      zh: ['富有想象力的作家', '和平创新者', '深思艺术家']
    }
  },
  'ISRH-T': {
    emoji: '📚',
    tagline: {
      en: 'The Introspective Dreamer',
      zh: '内省梦想家'
    },
    traits: {
      en: ['Deep Feeler', 'Self-Reflective', 'Sensitive Soul'],
      zh: ['深度感受者', '自我反思者', '敏感灵魂']
    }
  },
  'ISRC-S': {
    emoji: '🎭',
    tagline: {
      en: 'The Independent Artist',
      zh: '独立艺术家'
    },
    traits: {
      en: ['Authentic Rebel', 'Solo Creator', 'Uncompromising Visionary'],
      zh: ['真实叛逆者', '独立创造者', '不妥协远见者']
    }
  },
  'ISRC-T': {
    emoji: '🎭',
    tagline: {
      en: 'The Misunderstood Genius',
      zh: '被误解的天才'
    },
    traits: {
      en: ['Complex Soul', 'Emotional Intensity', 'Artistic Outsider'],
      zh: ['复杂灵魂', '情感强度', '艺术局外人']
    }
  },
  'PLOH-S': {
    emoji: '🏛️',
    tagline: {
      en: 'The Steady Guardian',
      zh: '稳定守护者'
    },
    traits: {
      en: ['Reliable Leader', 'Team Builder', 'Practical Harmonizer'],
      zh: ['可靠领导者', '团队建设者', '实用协调者']
    }
  },
  'PLOH-T': {
    emoji: '🏛️',
    tagline: {
      en: 'The Caring Protector',
      zh: '关怀保护者'
    },
    traits: {
      en: ['Empathetic Organizer', 'Dutiful Supporter', 'Sensitive Planner'],
      zh: ['共情组织者', '尽职支持者', '敏感规划者']
    }
  },
  'PLOC-S': {
    emoji: '⚔️',
    tagline: {
      en: 'The Iron Commander',
      zh: '铁腕指挥官'
    },
    traits: {
      en: ['Decisive Leader', 'No-Nonsense Manager', 'Results Driver'],
      zh: ['果断领导者', '务实管理者', '结果驱动者']
    }
  },
  'PLOC-T': {
    emoji: '⚔️',
    tagline: {
      en: 'The Demanding Perfectionist',
      zh: '苛求完美主义者'
    },
    traits: {
      en: ['High Standards', 'Intense Leader', 'Self-Critical Achiever'],
      zh: ['高标准', '强烈领导者', '自我批判成就者']
    }
  },
  'PLRH-S': {
    emoji: '🛡️',
    tagline: {
      en: 'The Quiet Pillar',
      zh: '安静支柱'
    },
    traits: {
      en: ['Dependable Supporter', 'Behind-the-Scenes Hero', 'Calm Organizer'],
      zh: ['可靠支持者', '幕后英雄', '冷静组织者']
    }
  },
  'PLRH-T': {
    emoji: '🛡️',
    tagline: {
      en: 'The Anxious Perfectionist',
      zh: '焦虑完美主义者'
    },
    traits: {
      en: ['Detail-Oriented', 'Worry-Prone Planner', 'Conscientious Worker'],
      zh: ['注重细节', '易焦虑规划者', '尽责工作者']
    }
  },
  'PLRC-S': {
    emoji: '📋',
    tagline: {
      en: 'The Efficiency Machine',
      zh: '效率机器'
    },
    traits: {
      en: ['Process Master', 'Independent Executor', 'Logical Organizer'],
      zh: ['流程大师', '独立执行者', '逻辑组织者']
    }
  },
  'PLRC-T': {
    emoji: '📋',
    tagline: {
      en: 'The Critical Analyst',
      zh: '批判分析师'
    },
    traits: {
      en: ['Self-Doubting Perfectionist', 'Meticulous Planner', 'Harsh Self-Critic'],
      zh: ['自我怀疑完美主义者', '细致规划者', '严厉自我批评者']
    }
  },
  'PSOH-S': {
    emoji: '🌞',
    tagline: {
      en: 'The Life of the Party',
      zh: '派对之星'
    },
    traits: {
      en: ['Energetic Connector', 'Spontaneous Leader', 'Positive Influencer'],
      zh: ['充满活力的连接者', '自发领导者', '积极影响者']
    }
  },
  'PSOH-T': {
    emoji: '🌞',
    tagline: {
      en: 'The Emotional Performer',
      zh: '情感表演者'
    },
    traits: {
      en: ['Sensitive Entertainer', 'Approval Seeker', 'Passionate Connector'],
      zh: ['敏感娱乐者', '认可寻求者', '热情连接者']
    }
  },
  'PSOC-S': {
    emoji: '🔥',
    tagline: {
      en: 'The Bold Maverick',
      zh: '大胆特立独行者'
    },
    traits: {
      en: ['Fearless Risk-Taker', 'Charismatic Rebel', 'Action-Oriented Leader'],
      zh: ['无畏冒险者', '魅力叛逆者', '行动导向领导者']
    }
  },
  'PSOC-T': {
    emoji: '🔥',
    tagline: {
      en: 'The Volatile Genius',
      zh: '易变天才'
    },
    traits: {
      en: ['Intense Performer', 'Emotional Extremes', 'Unpredictable Creator'],
      zh: ['强烈表演者', '情感极端', '不可预测创造者']
    }
  },
  'PSRH-S': {
    emoji: '🏆',
    tagline: {
      en: 'The Competitive Champion',
      zh: '竞争冠军'
    },
    traits: {
      en: ['Driven Achiever', 'Focused Performer', 'Goal-Oriented Winner'],
      zh: ['驱动成就者', '专注表演者', '目标导向赢家']
    }
  },
  'PSRH-T': {
    emoji: '🏆',
    tagline: {
      en: 'The Pressure Performer',
      zh: '压力表演者'
    },
    traits: {
      en: ['Self-Demanding', 'Performance Anxiety', 'Relentless Competitor'],
      zh: ['自我要求', '表现焦虑', '不懈竞争者']
    }
  },
  'PSRC-S': {
    emoji: '💪',
    tagline: {
      en: 'The Solo Warrior',
      zh: '独行战士'
    },
    traits: {
      en: ['Self-Reliant Fighter', 'Independent Achiever', 'Lone Competitor'],
      zh: ['自力更生战士', '独立成就者', '独行竞争者']
    }
  },
  'PSRC-T': {
    emoji: '💪',
    tagline: {
      en: 'The Driven Perfectionist',
      zh: '驱动完美主义者'
    },
    traits: {
      en: ['Never Satisfied', 'Intense Self-Critic', 'Obsessive Achiever'],
      zh: ['永不满足', '强烈自我批评', '痴迷成就者']
    }
  }
};
