import { Question } from '../types';

// 50 questions: 10 per dimension (6 forward, 4 reverse)
// Questions are designed to be randomized when presented to users

export const questions: Question[] = [
  // EXPLORATION (10 questions: 6 forward, 4 reverse)
  {
    id: 1,
    dimension: 'exploration',
    text: {
      en: 'I enjoy trying new things and exploring unfamiliar experiences.',
      zh: '我喜欢尝试新鲜事物，探索陌生的体验。'
    },
    reverse: false
  },
  {
    id: 2,
    dimension: 'exploration',
    text: {
      en: 'I am curious about ideas and concepts that challenge conventional thinking.',
      zh: '我对挑战传统思维的想法和概念感到好奇。'
    },
    reverse: false
  },
  {
    id: 3,
    dimension: 'exploration',
    text: {
      en: 'I prefer to stick with familiar ways of doing things.',
      zh: '我更喜欢按照熟悉的方式做事。'
    },
    reverse: true
  },
  {
    id: 4,
    dimension: 'exploration',
    text: {
      en: 'I find abstract and theoretical discussions fascinating.',
      zh: '我觉得抽象和理论性的讨论很有吸引力。'
    },
    reverse: false
  },
  {
    id: 5,
    dimension: 'exploration',
    text: {
      en: 'I value tradition and established methods over experimentation.',
      zh: '相比实验创新，我更看重传统和既定方法。'
    },
    reverse: true
  },
  {
    id: 6,
    dimension: 'exploration',
    text: {
      en: 'I actively seek out new perspectives and different viewpoints.',
      zh: '我主动寻求新的视角和不同的观点。'
    },
    reverse: false
  },
  {
    id: 7,
    dimension: 'exploration',
    text: {
      en: 'I am drawn to creative and artistic pursuits.',
      zh: '我被创意和艺术追求所吸引。'
    },
    reverse: false
  },
  {
    id: 8,
    dimension: 'exploration',
    text: {
      en: 'I prefer practical solutions over innovative approaches.',
      zh: '相比创新方法，我更喜欢实用的解决方案。'
    },
    reverse: true
  },
  {
    id: 9,
    dimension: 'exploration',
    text: {
      en: 'I enjoy imagining possibilities and thinking about the future.',
      zh: '我喜欢想象各种可能性，思考未来。'
    },
    reverse: false
  },
  {
    id: 10,
    dimension: 'exploration',
    text: {
      en: 'I feel most comfortable with routines and predictable patterns.',
      zh: '我在常规和可预测的模式中感到最舒适。'
    },
    reverse: true
  },

  // STRUCTURE (10 questions: 6 forward, 4 reverse)
  {
    id: 11,
    dimension: 'structure',
    text: {
      en: 'I like to plan my day in advance and stick to my schedule.',
      zh: '我喜欢提前规划我的一天，并坚持我的时间表。'
    },
    reverse: false
  },
  {
    id: 12,
    dimension: 'structure',
    text: {
      en: 'I prefer to keep my options open and adapt as situations unfold.',
      zh: '我更喜欢保持选择的开放性，随着情况的发展而调整。'
    },
    reverse: true
  },
  {
    id: 13,
    dimension: 'structure',
    text: {
      en: 'I feel satisfied when I complete tasks according to a clear plan.',
      zh: '当我按照明确的计划完成任务时，我感到满足。'
    },
    reverse: false
  },
  {
    id: 14,
    dimension: 'structure',
    text: {
      en: 'I organize my workspace and belongings systematically.',
      zh: '我系统地整理我的工作空间和物品。'
    },
    reverse: false
  },
  {
    id: 15,
    dimension: 'structure',
    text: {
      en: 'I work best when I can be spontaneous and flexible.',
      zh: '当我可以自发和灵活时，我工作得最好。'
    },
    reverse: true
  },
  {
    id: 16,
    dimension: 'structure',
    text: {
      en: 'I make to-do lists and follow them carefully.',
      zh: '我制定待办事项清单并认真遵循。'
    },
    reverse: false
  },
  {
    id: 17,
    dimension: 'structure',
    text: {
      en: 'I prefer to go with the flow rather than follow a strict schedule.',
      zh: '相比遵循严格的时间表，我更喜欢顺其自然。'
    },
    reverse: true
  },
  {
    id: 18,
    dimension: 'structure',
    text: {
      en: 'I set clear goals and create detailed plans to achieve them.',
      zh: '我设定明确的目标，并制定详细的计划来实现它们。'
    },
    reverse: false
  },
  {
    id: 19,
    dimension: 'structure',
    text: {
      en: 'I find rigid schedules limiting and prefer to improvise.',
      zh: '我觉得僵化的时间表很有限制性，更喜欢即兴发挥。'
    },
    reverse: true
  },
  {
    id: 20,
    dimension: 'structure',
    text: {
      en: 'I prepare thoroughly before starting important projects.',
      zh: '在开始重要项目之前，我会做充分的准备。'
    },
    reverse: false
  },

  // SOCIAL ENERGY (10 questions: 6 forward, 4 reverse)
  {
    id: 21,
    dimension: 'social',
    text: {
      en: 'I feel energized after spending time with groups of people.',
      zh: '与一群人相处后，我感到精力充沛。'
    },
    reverse: false
  },
  {
    id: 22,
    dimension: 'social',
    text: {
      en: 'I prefer quiet, solitary activities to recharge.',
      zh: '我更喜欢安静、独处的活动来恢复精力。'
    },
    reverse: true
  },
  {
    id: 23,
    dimension: 'social',
    text: {
      en: 'I enjoy being the center of attention in social situations.',
      zh: '我喜欢在社交场合成为关注的焦点。'
    },
    reverse: false
  },
  {
    id: 24,
    dimension: 'social',
    text: {
      en: 'I actively initiate conversations with new people.',
      zh: '我主动与陌生人发起对话。'
    },
    reverse: false
  },
  {
    id: 25,
    dimension: 'social',
    text: {
      en: 'I need time alone to feel refreshed and balanced.',
      zh: '我需要独处的时间来感到精神焕发和平衡。'
    },
    reverse: true
  },
  {
    id: 26,
    dimension: 'social',
    text: {
      en: 'I thrive in lively, social environments.',
      zh: '我在热闹的社交环境中如鱼得水。'
    },
    reverse: false
  },
  {
    id: 27,
    dimension: 'social',
    text: {
      en: 'I prefer deep one-on-one conversations over group gatherings.',
      zh: '相比群体聚会，我更喜欢深入的一对一交谈。'
    },
    reverse: true
  },
  {
    id: 28,
    dimension: 'social',
    text: {
      en: 'I find it easy to talk to strangers and make new friends.',
      zh: '我觉得与陌生人交谈和结交新朋友很容易。'
    },
    reverse: false
  },
  {
    id: 29,
    dimension: 'social',
    text: {
      en: 'I feel drained after extended social interactions.',
      zh: '长时间的社交互动后，我感到精疲力竭。'
    },
    reverse: true
  },
  {
    id: 30,
    dimension: 'social',
    text: {
      en: 'I seek out social activities and enjoy being around others.',
      zh: '我寻求社交活动，享受与他人在一起。'
    },
    reverse: false
  },

  // HARMONY (10 questions: 6 forward, 4 reverse)
  {
    id: 31,
    dimension: 'harmony',
    text: {
      en: 'I prioritize maintaining harmony in my relationships.',
      zh: '我优先考虑在人际关系中保持和谐。'
    },
    reverse: false
  },
  {
    id: 32,
    dimension: 'harmony',
    text: {
      en: 'I am comfortable challenging others when I disagree.',
      zh: '当我不同意时，我能自如地挑战他人。'
    },
    reverse: true
  },
  {
    id: 33,
    dimension: 'harmony',
    text: {
      en: 'I go out of my way to help others and support their needs.',
      zh: '我会不遗余力地帮助他人，支持他们的需求。'
    },
    reverse: false
  },
  {
    id: 34,
    dimension: 'harmony',
    text: {
      en: 'I value cooperation and teamwork over competition.',
      zh: '相比竞争，我更看重合作和团队协作。'
    },
    reverse: false
  },
  {
    id: 35,
    dimension: 'harmony',
    text: {
      en: 'I believe healthy conflict can lead to better outcomes.',
      zh: '我相信健康的冲突可以带来更好的结果。'
    },
    reverse: true
  },
  {
    id: 36,
    dimension: 'harmony',
    text: {
      en: 'I am empathetic and sensitive to others\' feelings.',
      zh: '我富有同理心，对他人的感受很敏感。'
    },
    reverse: false
  },
  {
    id: 37,
    dimension: 'harmony',
    text: {
      en: 'I speak my mind directly, even if it creates tension.',
      zh: '我直言不讳，即使这会造成紧张。'
    },
    reverse: true
  },
  {
    id: 38,
    dimension: 'harmony',
    text: {
      en: 'I avoid confrontation and seek peaceful resolutions.',
      zh: '我避免对抗，寻求和平的解决方案。'
    },
    reverse: false
  },
  {
    id: 39,
    dimension: 'harmony',
    text: {
      en: 'I prioritize my own goals over accommodating others.',
      zh: '相比迁就他人，我更优先考虑自己的目标。'
    },
    reverse: true
  },
  {
    id: 40,
    dimension: 'harmony',
    text: {
      en: 'I naturally consider how my actions affect others.',
      zh: '我自然而然地考虑我的行为如何影响他人。'
    },
    reverse: false
  },

  // RESILIENCE (10 questions: 6 forward, 4 reverse)
  {
    id: 41,
    dimension: 'resilience',
    text: {
      en: 'I remain calm and composed under pressure.',
      zh: '我在压力下保持冷静和镇定。'
    },
    reverse: false
  },
  {
    id: 42,
    dimension: 'resilience',
    text: {
      en: 'I often worry about things that might go wrong.',
      zh: '我经常担心可能出错的事情。'
    },
    reverse: true
  },
  {
    id: 43,
    dimension: 'resilience',
    text: {
      en: 'I bounce back quickly from setbacks and disappointments.',
      zh: '我能迅速从挫折和失望中恢复过来。'
    },
    reverse: false
  },
  {
    id: 44,
    dimension: 'resilience',
    text: {
      en: 'I maintain a stable mood throughout the day.',
      zh: '我一整天都保持稳定的情绪。'
    },
    reverse: false
  },
  {
    id: 45,
    dimension: 'resilience',
    text: {
      en: 'I am sensitive to criticism and take it personally.',
      zh: '我对批评很敏感，会往心里去。'
    },
    reverse: true
  },
  {
    id: 46,
    dimension: 'resilience',
    text: {
      en: 'I feel confident in my ability to handle challenges.',
      zh: '我对自己应对挑战的能力充满信心。'
    },
    reverse: false
  },
  {
    id: 47,
    dimension: 'resilience',
    text: {
      en: 'I experience frequent mood swings.',
      zh: '我经常情绪波动。'
    },
    reverse: true
  },
  {
    id: 48,
    dimension: 'resilience',
    text: {
      en: 'I stay optimistic even when things don\'t go as planned.',
      zh: '即使事情没有按计划进行，我也保持乐观。'
    },
    reverse: false
  },
  {
    id: 49,
    dimension: 'resilience',
    text: {
      en: 'I tend to dwell on negative experiences.',
      zh: '我倾向于纠结于负面经历。'
    },
    reverse: true
  },
  {
    id: 50,
    dimension: 'resilience',
    text: {
      en: 'I handle stress effectively without becoming overwhelmed.',
      zh: '我能有效地处理压力，不会感到不知所措。'
    },
    reverse: false
  }
];
