import { Archetype } from '../types';

// 16 base archetypes with S/T modifiers
// Each archetype has detailed descriptions for workplace, romance, and social scenarios

export const archetypes: Archetype[] = [
  // ILOH - The Visionary Harmonizer
  {
    code: 'ILOH',
    modifier: 'S',
    fullCode: 'ILOH-S',
    name: {
      en: 'The Visionary Harmonizer',
      zh: '远见协调者'
    },
    description: {
      en: 'Creative and organized, socially engaged, seeks harmony. You bring people together around new ideas with structured execution. Your stable emotional foundation allows you to lead change initiatives with confidence.',
      zh: '富有创造力且有条理，善于社交，追求和谐。你通过结构化的执行将人们聚集在新想法周围。你稳定的情绪基础让你能够自信地领导变革举措。'
    },
    workplace: {
      en: 'Natural project leader who balances innovation with planning. Excels at change management and team alignment. Your emotional stability helps you navigate organizational politics smoothly.',
      zh: '天生的项目领导者，平衡创新与规划。擅长变革管理和团队协调。你的情绪稳定性帮助你顺利应对组织政治。'
    },
    romance: {
      en: 'Seeks deep connection with shared vision. Plans thoughtful experiences, values emotional harmony. Your confidence creates a secure foundation for the relationship.',
      zh: '寻求有共同愿景的深层连接。规划周到的体验，重视情感和谐。你的自信为关系创造了安全的基础。'
    },
    social: {
      en: 'The friend who organizes group activities around new experiences. Mediates conflicts, builds community. Your steady presence makes you a trusted anchor in your social circle.',
      zh: '组织围绕新体验的团体活动的朋友。调解冲突，建立社区。你稳定的存在使你成为社交圈中值得信赖的支柱。'
    }
  },
  {
    code: 'ILOH',
    modifier: 'T',
    fullCode: 'ILOH-T',
    name: {
      en: 'The Visionary Harmonizer',
      zh: '远见协调者'
    },
    description: {
      en: 'Creative and organized, socially engaged, seeks harmony. You bring people together around new ideas with structured execution. Your emotional sensitivity makes you highly attuned to team dynamics and drives continuous improvement.',
      zh: '富有创造力且有条理，善于社交，追求和谐。你通过结构化的执行将人们聚集在新想法周围。你的情感敏感性使你高度关注团队动态，并推动持续改进。'
    },
    workplace: {
      en: 'Natural project leader who balances innovation with planning. Excels at change management and team alignment. Your sensitivity to feedback helps you refine your approach constantly.',
      zh: '天生的项目领导者，平衡创新与规划。擅长变革管理和团队协调。你对反馈的敏感性帮助你不断完善方法。'
    },
    romance: {
      en: 'Seeks deep connection with shared vision. Plans thoughtful experiences, values emotional harmony. Your emotional awareness creates deep intimacy but may require reassurance.',
      zh: '寻求有共同愿景的深层连接。规划周到的体验，重视情感和谐。你的情感意识创造了深刻的亲密感，但可能需要安全感。'
    },
    social: {
      en: 'The friend who organizes group activities around new experiences. Mediates conflicts, builds community. Your emotional depth allows you to connect meaningfully but you may take conflicts personally.',
      zh: '组织围绕新体验的团体活动的朋友。调解冲突，建立社区。你的情感深度让你能够有意义地连接，但你可能会把冲突当成针对个人。'
    }
  },

  // ILOC - The Strategic Catalyst
  {
    code: 'ILOC',
    modifier: 'S',
    fullCode: 'ILOC-S',
    name: {
      en: 'The Strategic Catalyst',
      zh: '战略催化者'
    },
    description: {
      en: 'Bold visionary who challenges the status quo with structured plans. Socially confident, not afraid of conflict. Your emotional stability allows you to push boundaries without burning bridges.',
      zh: '大胆的远见者，用结构化的计划挑战现状。社交自信，不惧冲突。你的情绪稳定性让你能够突破界限而不破坏关系。'
    },
    workplace: {
      en: 'Drives transformation through direct communication. Questions assumptions, pushes teams forward. Your confidence in handling pushback makes you an effective change agent.',
      zh: '通过直接沟通推动转型。质疑假设，推动团队前进。你处理反对意见的信心使你成为有效的变革推动者。'
    },
    romance: {
      en: 'Passionate and direct. Challenges partner to grow, plans adventures together. Your emotional resilience allows healthy debate without relationship damage.',
      zh: '充满激情且直接。挑战伴侣成长，一起规划冒险。你的情感韧性允许健康的辩论而不损害关系。'
    },
    social: {
      en: 'The friend who initiates debates and new experiences. Energizes groups through intellectual challenge. Your thick skin means you can dish it out and take it.',
      zh: '发起辩论和新体验的朋友。通过智力挑战激发团队活力。你的厚脸皮意味着你既能批评也能接受批评。'
    }
  },
  {
    code: 'ILOC',
    modifier: 'T',
    fullCode: 'ILOC-T',
    name: {
      en: 'The Strategic Catalyst',
      zh: '战略催化者'
    },
    description: {
      en: 'Bold visionary who challenges the status quo with structured plans. Socially confident, not afraid of conflict. Your emotional sensitivity drives you to prove yourself and perfect your strategies.',
      zh: '大胆的远见者，用结构化的计划挑战现状。社交自信，不惧冲突。你的情感敏感性驱使你证明自己并完善策略。'
    },
    workplace: {
      en: 'Drives transformation through direct communication. Questions assumptions, pushes teams forward. Your sensitivity to criticism fuels your drive for excellence.',
      zh: '通过直接沟通推动转型。质疑假设，推动团队前进。你对批评的敏感性激发了你追求卓越的动力。'
    },
    romance: {
      en: 'Passionate and direct. Challenges partner to grow, plans adventures together. Your emotional intensity creates deep connection but may lead to overthinking conflicts.',
      zh: '充满激情且直接。挑战伴侣成长，一起规划冒险。你的情感强度创造了深刻的连接，但可能导致过度思考冲突。'
    },
    social: {
      en: 'The friend who initiates debates and new experiences. Energizes groups through intellectual challenge. You may replay social interactions, analyzing what you could have said better.',
      zh: '发起辩论和新体验的朋友。通过智力挑战激发团队活力。你可能会重播社交互动，分析你本可以说得更好的地方。'
    }
  },

  // Continue with remaining 14 archetypes...
  // For brevity, I'll create a simplified version with all 16 base codes
  // You can expand these later with full descriptions

  {
    code: 'ILRH',
    modifier: 'S',
    fullCode: 'ILRH-S',
    name: { en: 'The Thoughtful Architect', zh: '深思建筑师' },
    description: { en: 'Quietly innovative with careful planning. Values harmony but needs solitude to create.', zh: '安静地创新，精心规划。重视和谐但需要独处来创造。' },
    workplace: { en: 'Behind-the-scenes strategist. Designs systems that improve team collaboration.', zh: '幕后战略家。设计改善团队协作的系统。' },
    romance: { en: 'Shows love through thoughtful planning. Needs alone time but deeply values partnership.', zh: '通过周到的规划表达爱。需要独处时间但深深珍视伴侣关系。' },
    social: { en: 'Small circle of close friends. Plans meaningful one-on-one experiences.', zh: '小圈子的亲密朋友。规划有意义的一对一体验。' }
  },
  {
    code: 'ILRH',
    modifier: 'T',
    fullCode: 'ILRH-T',
    name: { en: 'The Thoughtful Architect', zh: '深思建筑师' },
    description: { en: 'Quietly innovative with careful planning. Values harmony but needs solitude to create. Your sensitivity enhances your creative insights.', zh: '安静地创新，精心规划。重视和谐但需要独处来创造。你的敏感性增强了你的创造性洞察力。' },
    workplace: { en: 'Behind-the-scenes strategist. Designs systems that improve team collaboration. Your self-awareness drives continuous refinement.', zh: '幕后战略家。设计改善团队协作的系统。你的自我意识推动持续改进。' },
    romance: { en: 'Shows love through thoughtful planning. Needs alone time but deeply values partnership. May worry about relationship security.', zh: '通过周到的规划表达爱。需要独处时间但深深珍视伴侣关系。可能担心关系的安全性。' },
    social: { en: 'Small circle of close friends. Plans meaningful one-on-one experiences. Deeply affected by social dynamics.', zh: '小圈子的亲密朋友。规划有意义的一对一体验。深受社交动态影响。' }
  },

  // Add remaining archetypes with S and T variants
  // ILRC, ISOH, ISOC, ISRH, ISRC, PLOH, PLOC, PLRH, PLRC, PSOH, PSOC, PSRH, PSRC
  // Each needs both -S and -T variants
  // I'll create placeholders for now - you can expand these with full content later

  {
    code: 'ILRC',
    modifier: 'S',
    fullCode: 'ILRC-S',
    name: { en: 'The Independent Strategist', zh: '独立战略家' },
    description: { en: 'Self-directed innovator with strong convictions. Plans meticulously, challenges inefficiency.', zh: '自主的创新者，有坚定的信念。精心规划，挑战低效。' },
    workplace: { en: 'Independent contributor who redesigns broken systems. Direct feedback, high standards.', zh: '重新设计破损系统的独立贡献者。直接反馈，高标准。' },
    romance: { en: 'Selective about partners. Values intellectual challenge and mutual independence.', zh: '对伴侣有选择性。重视智力挑战和相互独立。' },
    social: { en: 'Few but deep friendships. Debates ideas, not interested in small talk.', zh: '少而深的友谊。辩论想法，对闲聊不感兴趣。' }
  },
  {
    code: 'ILRC',
    modifier: 'T',
    fullCode: 'ILRC-T',
    name: { en: 'The Independent Strategist', zh: '独立战略家' },
    description: { en: 'Self-directed innovator with strong convictions. Plans meticulously, challenges inefficiency. Your sensitivity drives perfectionism.', zh: '自主的创新者，有坚定的信念。精心规划，挑战低效。你的敏感性驱动完美主义。' },
    workplace: { en: 'Independent contributor who redesigns broken systems. Direct feedback, high standards. May be hard on yourself.', zh: '重新设计破损系统的独立贡献者。直接反馈，高标准。可能对自己很严格。' },
    romance: { en: 'Selective about partners. Values intellectual challenge and mutual independence. Needs reassurance despite appearing confident.', zh: '对伴侣有选择性。重视智力挑战和相互独立。尽管看起来自信，但需要安全感。' },
    social: { en: 'Few but deep friendships. Debates ideas, not interested in small talk. May overthink social interactions.', zh: '少而深的友谊。辩论想法，对闲聊不感兴趣。可能过度思考社交互动。' }
  },

  // ISOH
  { code: 'ISOH', modifier: 'S', fullCode: 'ISOH-S', name: { en: 'The Creative Connector', zh: '创意连接者' }, description: { en: 'Artistic and spontaneous, socially warm, seeks harmony.', zh: '富有艺术性且自发，社交温暖，追求和谐。' }, workplace: { en: 'Brings creativity and positive energy to teams.', zh: '为团队带来创造力和正能量。' }, romance: { en: 'Expressive and affectionate.', zh: '富有表现力且深情。' }, social: { en: 'Brings people together through art.', zh: '通过艺术将人们聚集在一起。' } },
  { code: 'ISOH', modifier: 'T', fullCode: 'ISOH-T', name: { en: 'The Sensitive Artist', zh: '敏感艺术家' }, description: { en: 'Artistic and spontaneous, socially warm, seeks harmony.', zh: '富有艺术性且自发，社交温暖，追求和谐。' }, workplace: { en: 'Brings creativity and positive energy.', zh: '带来创造力和正能量。' }, romance: { en: 'Expressive and affectionate.', zh: '富有表现力且深情。' }, social: { en: 'Brings people together.', zh: '将人们聚集在一起。' } },
  { code: 'ISOC', modifier: 'S', fullCode: 'ISOC-S', name: { en: 'The Free Spirit', zh: '自由精神' }, description: { en: 'Bold creative who challenges conventions.', zh: '挑战传统的大胆创造者。' }, workplace: { en: 'Brings unconventional ideas.', zh: '带来非传统想法。' }, romance: { en: 'Passionate and spontaneous.', zh: '充满激情且自发。' }, social: { en: 'Initiates adventures.', zh: '发起冒险。' } },
  { code: 'ISOC', modifier: 'T', fullCode: 'ISOC-T', name: { en: 'The Tortured Artist', zh: '挣扎艺术家' }, description: { en: 'Bold creative with emotional intensity.', zh: '情感强烈的大胆创造者。' }, workplace: { en: 'Brings raw emotion and ideas.', zh: '带来原始情感和想法。' }, romance: { en: 'Passionate and intense.', zh: '充满激情且强烈。' }, social: { en: 'Lives intensely.', zh: '生活强烈。' } },
  { code: 'ISRH', modifier: 'S', fullCode: 'ISRH-S', name: { en: 'The Quiet Creator', zh: '安静创造者' }, description: { en: 'Imaginative and introspective.', zh: '富有想象力且内省。' }, workplace: { en: 'Creates thoughtful work independently.', zh: '独立创造深思熟虑的作品。' }, romance: { en: 'Shows love through creative gestures.', zh: '通过创意姿态表达爱。' }, social: { en: 'Small circle of close friends.', zh: '小圈子的亲密朋友。' } },
  { code: 'ISRH', modifier: 'T', fullCode: 'ISRH-T', name: { en: 'The Introspective Dreamer', zh: '内省梦想家' }, description: { en: 'Imaginative and deeply sensitive.', zh: '富有想象力且深度敏感。' }, workplace: { en: 'Creates deeply personal work.', zh: '创造深度个人化的作品。' }, romance: { en: 'Shows love through creativity.', zh: '通过创造力表达爱。' }, social: { en: 'Small circle of close friends.', zh: '小圈子的亲密朋友。' } },
  { code: 'ISRC', modifier: 'S', fullCode: 'ISRC-S', name: { en: 'The Independent Artist', zh: '独立艺术家' }, description: { en: 'Authentic creative who follows own path.', zh: '遵循自己道路的真实创造者。' }, workplace: { en: 'Creates original work independently.', zh: '独立创造原创作品。' }, romance: { en: 'Selective about partners.', zh: '对伴侣有选择性。' }, social: { en: 'Few close friends.', zh: '少数亲密朋友。' } },
  { code: 'ISRC', modifier: 'T', fullCode: 'ISRC-T', name: { en: 'The Misunderstood Genius', zh: '被误解的天才' }, description: { en: 'Authentic creative with emotional complexity.', zh: '情感复杂的真实创造者。' }, workplace: { en: 'Creates deeply original work.', zh: '创造深度原创作品。' }, romance: { en: 'Needs understanding partner.', zh: '需要理解的伴侣。' }, social: { en: 'Few close friends.', zh: '少数亲密朋友。' } },
  { code: 'PLOH', modifier: 'S', fullCode: 'PLOH-S', name: { en: 'The Steady Guardian', zh: '稳定守护者' }, description: { en: 'Practical and organized, socially engaged.', zh: '实用且有条理，善于社交。' }, workplace: { en: 'Dependable manager.', zh: '可靠管理者。' }, romance: { en: 'Loyal and supportive.', zh: '忠诚且支持。' }, social: { en: 'Organizes gatherings.', zh: '组织聚会。' } },
  { code: 'PLOH', modifier: 'T', fullCode: 'PLOH-T', name: { en: 'The Caring Protector', zh: '关怀保护者' }, description: { en: 'Practical and organized, deeply caring.', zh: '实用且有条理，深切关怀。' }, workplace: { en: 'Cares about team wellbeing.', zh: '关心团队福祉。' }, romance: { en: 'Loyal and supportive.', zh: '忠诚且支持。' }, social: { en: 'Takes care of everyone.', zh: '照顾每个人。' } },
  { code: 'PLOC', modifier: 'S', fullCode: 'PLOC-S', name: { en: 'The Iron Commander', zh: '铁腕指挥官' }, description: { en: 'Decisive and organized, direct leader.', zh: '果断且有条理，直接领导者。' }, workplace: { en: 'Strong leader who drives execution.', zh: '推动执行的强大领导者。' }, romance: { en: 'Direct and committed.', zh: '直接且承诺。' }, social: { en: 'Takes charge.', zh: '掌控局面。' } },
  { code: 'PLOC', modifier: 'T', fullCode: 'PLOC-T', name: { en: 'The Demanding Perfectionist', zh: '苛求完美主义者' }, description: { en: 'Decisive with very high standards.', zh: '果断且标准很高。' }, workplace: { en: 'Strong leader with high standards.', zh: '标准很高的强大领导者。' }, romance: { en: 'Direct and committed.', zh: '直接且承诺。' }, social: { en: 'Speaks their mind.', zh: '说出想法。' } },
  { code: 'PLRH', modifier: 'S', fullCode: 'PLRH-S', name: { en: 'The Quiet Pillar', zh: '安静支柱' }, description: { en: 'Practical and organized, works behind scenes.', zh: '实用且有条理，在幕后工作。' }, workplace: { en: 'Reliable executor.', zh: '可靠执行者。' }, romance: { en: 'Shows love through actions.', zh: '通过行动表达爱。' }, social: { en: 'Small circle of trusted friends.', zh: '小圈子的信任朋友。' } },
  { code: 'PLRH', modifier: 'T', fullCode: 'PLRH-T', name: { en: 'The Anxious Perfectionist', zh: '焦虑完美主义者' }, description: { en: 'Practical and conscientious, worries about details.', zh: '实用且尽责，担心细节。' }, workplace: { en: 'Reliable but worries.', zh: '可靠但担心。' }, romance: { en: 'Shows love through actions.', zh: '通过行动表达爱。' }, social: { en: 'Small circle of trusted friends.', zh: '小圈子的信任朋友。' } },
  { code: 'PLRC', modifier: 'S', fullCode: 'PLRC-S', name: { en: 'The Efficiency Machine', zh: '效率机器' }, description: { en: 'Practical and organized, optimizes systems.', zh: '实用且有条理，优化系统。' }, workplace: { en: 'Process expert.', zh: '流程专家。' }, romance: { en: 'Practical and direct.', zh: '实用且直接。' }, social: { en: 'Few close friends.', zh: '少数亲密朋友。' } },
  { code: 'PLRC', modifier: 'T', fullCode: 'PLRC-T', name: { en: 'The Critical Analyst', zh: '批判分析师' }, description: { en: 'Practical with constant self-criticism.', zh: '实用且持续自我批评。' }, workplace: { en: 'Process expert, self-critical.', zh: '流程专家，自我批评。' }, romance: { en: 'Practical and direct.', zh: '实用且直接。' }, social: { en: 'Few close friends.', zh: '少数亲密朋友。' } },
  { code: 'PSOH', modifier: 'S', fullCode: 'PSOH-S', name: { en: 'The Life of the Party', zh: '派对之星' }, description: { en: 'Energetic and spontaneous, socially magnetic.', zh: '充满活力且自发，社交魅力。' }, workplace: { en: 'Energizes teams.', zh: '激励团队。' }, romance: { en: 'Fun and affectionate.', zh: '有趣且深情。' }, social: { en: 'Natural entertainer.', zh: '天生的娱乐者。' } },
  { code: 'PSOH', modifier: 'T', fullCode: 'PSOH-T', name: { en: 'The Emotional Performer', zh: '情感表演者' }, description: { en: 'Energetic and emotionally expressive.', zh: '充满活力且情感表现力强。' }, workplace: { en: 'Energizes teams.', zh: '激励团队。' }, romance: { en: 'Fun and affectionate.', zh: '有趣且深情。' }, social: { en: 'Natural entertainer.', zh: '天生的娱乐者。' } },
  { code: 'PSOC', modifier: 'S', fullCode: 'PSOC-S', name: { en: 'The Bold Maverick', zh: '大胆特立独行者' }, description: { en: 'Energetic and spontaneous, takes risks.', zh: '充满活力且自发，冒险。' }, workplace: { en: 'Action-oriented leader.', zh: '行动导向领导者。' }, romance: { en: 'Passionate and adventurous.', zh: '充满激情且冒险。' }, social: { en: 'Initiates adventures.', zh: '发起冒险。' } },
  { code: 'PSOC', modifier: 'T', fullCode: 'PSOC-T', name: { en: 'The Volatile Genius', zh: '易变天才' }, description: { en: 'Energetic with emotional extremes.', zh: '充满活力且情感极端。' }, workplace: { en: 'Unpredictable but brilliant.', zh: '不可预测但才华横溢。' }, romance: { en: 'Passionate and intense.', zh: '充满激情且强烈。' }, social: { en: 'Lives intensely.', zh: '生活强烈。' } },
  { code: 'PSRH', modifier: 'S', fullCode: 'PSRH-S', name: { en: 'The Competitive Champion', zh: '竞争冠军' }, description: { en: 'Energetic and focused on achievement.', zh: '充满活力且专注于成就。' }, workplace: { en: 'Driven performer.', zh: '驱动表演者。' }, romance: { en: 'Passionate but selective.', zh: '充满激情但有选择性。' }, social: { en: 'Competitive in activities.', zh: '在活动中竞争。' } },
  { code: 'PSRH', modifier: 'T', fullCode: 'PSRH-T', name: { en: 'The Pressure Performer', zh: '压力表演者' }, description: { en: 'Energetic with high self-expectations.', zh: '充满活力且自我期望高。' }, workplace: { en: 'Driven with anxiety.', zh: '驱动且焦虑。' }, romance: { en: 'Passionate but selective.', zh: '充满激情但有选择性。' }, social: { en: 'Worries about performance.', zh: '担心表现。' } },
  { code: 'PSRC', modifier: 'S', fullCode: 'PSRC-S', name: { en: 'The Solo Warrior', zh: '独行战士' }, description: { en: 'Energetic and self-reliant.', zh: '充满活力且自力更生。' }, workplace: { en: 'Independent achiever.', zh: '独立成就者。' }, romance: { en: 'Passionate but independent.', zh: '充满激情但独立。' }, social: { en: 'Few close friends.', zh: '少数亲密朋友。' } },
  { code: 'PSRC', modifier: 'T', fullCode: 'PSRC-T', name: { en: 'The Driven Perfectionist', zh: '驱动完美主义者' }, description: { en: 'Energetic with relentless self-pressure.', zh: '充满活力且不懈自我压力。' }, workplace: { en: 'Never satisfied.', zh: '永不满足。' }, romance: { en: 'Passionate but independent.', zh: '充满激情但独立。' }, social: { en: 'Few close friends.', zh: '少数亲密朋友。' } }
];
