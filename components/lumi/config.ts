export type LumiAnimationType =
    | 'E001'
    | 'E002'
    | 'E003'
    | 'E004'
    | 'E005'
    | 'E006'
    | 'E007'
    | 'E008'
    | 'E009'
    | 'E010'
    | 'E011'
    | 'E012'
    | 'E013'
    | 'E015'
    | 'E016'
    | 'E017'
    | 'E018'
    | 'E019'
    | 'E020'
    | 'E021'
    | 'E022'

// Mood动画类型（缺少E001、E004、E005、E014）
export type MoodAnimationType =
    | 'E002'
    | 'E003'
    | 'E006'
    | 'E007'
    | 'E008'
    | 'E009'
    | 'E010'
    | 'E011'
    | 'E012'
    | 'E013'
    | 'E015'
    | 'E016'
    | 'E017'
    | 'E018'
    | 'E019'
    | 'E020'
    | 'E021'
    | 'E022'

// Hand和Foot动画类型（与Lumi相同）
export type HandAnimationType = LumiAnimationType;
export type FootAnimationType = LumiAnimationType;

export type LumiColorType = 'blue' | 'green' | 'purple' | 'orange' | 'white';

// 蓝色动画资源
const blueAnimations = {
  E001: { 1: { uri: '/lumi/blue/E001.json' } },
  E002: { 1: { uri: '/lumi/blue/E002.json' } },
  E003: { 1: { uri: '/lumi/blue/E003.json' } },
  E004: { 1: { uri: '/lumi/blue/E004.json' } },
  E005: { 1: { uri: '/lumi/blue/E005.json' } },
  E006: { 1: { uri: '/lumi/blue/E006.json' } },
  E007: { 1: { uri: '/lumi/blue/E007.json' } },
  E008: { 1: { uri: '/lumi/blue/E008.json' } },
  E009: { 1: { uri: '/lumi/blue/E009.json' } },
  E010: { 1: { uri: '/lumi/blue/E010.json' } },
  E011: { 1: { uri: '/lumi/blue/E011.json' } },
  E012: { 1: { uri: '/lumi/blue/E012.json' } },
  E013: { 1: { uri: '/lumi/blue/E013.json' } },
  E015: { 1: { uri: '/lumi/blue/E015.json' } },
  E016: { 1: { uri: '/lumi/blue/E016.json' } },
  E017: { 1: { uri: '/lumi/blue/E017.json' } },
  E018: { 1: { uri: '/lumi/blue/E018.json' } },
  E019: { 1: { uri: '/lumi/blue/E019.json' } },
  E020: { 1: { uri: '/lumi/blue/E020.json' } },
  E021: { 1: { uri: '/lumi/blue/E021.json' } },
  E022: { 1: { uri: '/lumi/blue/E022.json' } },
};

const greenAnimations = {
  E001: { 1: { uri: '/lumi/green/E001.json' } },
  E002: { 1: { uri: '/lumi/green/E002.json' } },
  E003: { 1: { uri: '/lumi/green/E003.json' } },
  E004: { 1: { uri: '/lumi/green/E004.json' } },
  E005: { 1: { uri: '/lumi/green/E005.json' } },
  E006: { 1: { uri: '/lumi/green/E006.json' } },
  E007: { 1: { uri: '/lumi/green/E007.json' } },
  E008: { 1: { uri: '/lumi/green/E008.json' } },
  E009: { 1: { uri: '/lumi/green/E009.json' } },
  E010: { 1: { uri: '/lumi/green/E010.json' } },
  E011: { 1: { uri: '/lumi/green/E011.json' } },
  E012: { 1: { uri: '/lumi/green/E012.json' } },
  E013: { 1: { uri: '/lumi/green/E013.json' } },
  E015: { 1: { uri: '/lumi/green/E015.json' } },
  E016: { 1: { uri: '/lumi/green/E016.json' } },
  E017: { 1: { uri: '/lumi/green/E017.json' } },
  E018: { 1: { uri: '/lumi/green/E018.json' } },
  E019: { 1: { uri: '/lumi/green/E019.json' } },
  E020: { 1: { uri: '/lumi/green/E020.json' } },
  E021: { 1: { uri: '/lumi/green/E021.json' } },
  E022: { 1: { uri: '/lumi/green/E022.json' } },
};
const purpleAnimations = {
  E001: { 1: { uri: '/lumi/purple/E001.json' } },
  E002: { 1: { uri: '/lumi/purple/E002.json' } },
  E003: { 1: { uri: '/lumi/purple/E003.json' } },
  E004: { 1: { uri: '/lumi/purple/E004.json' } },
  E005: { 1: { uri: '/lumi/purple/E005.json' } },
  E006: { 1: { uri: '/lumi/purple/E006.json' } },
  E007: { 1: { uri: '/lumi/purple/E007.json' } },
  E008: { 1: { uri: '/lumi/purple/E008.json' } },
  E009: { 1: { uri: '/lumi/purple/E009.json' } },
  E010: { 1: { uri: '/lumi/purple/E010.json' } },
  E011: { 1: { uri: '/lumi/purple/E011.json' } },
  E012: { 1: { uri: '/lumi/purple/E012.json' } },
  E013: { 1: { uri: '/lumi/purple/E013.json' } },
  E015: { 1: { uri: '/lumi/purple/E015.json' } },
  E016: { 1: { uri: '/lumi/purple/E016.json' } },
  E017: { 1: { uri: '/lumi/purple/E017.json' } },
  E018: { 1: { uri: '/lumi/purple/E018.json' } },
  E019: { 1: { uri: '/lumi/purple/E019.json' } },
  E020: { 1: { uri: '/lumi/purple/E020.json' } },
  E021: { 1: { uri: '/lumi/purple/E021.json' } },
  E022: { 1: { uri: '/lumi/purple/E022.json' } },
};

const orangeAnimations = {
  E001: { 1: { uri: '/lumi/orange/E001.json' } },
  E002: { 1: { uri: '/lumi/orange/E002.json' } },
  E003: { 1: { uri: '/lumi/orange/E003.json' } },
  E004: { 1: { uri: '/lumi/orange/E004.json' } },
  E005: { 1: { uri: '/lumi/orange/E005.json' } },
  E006: { 1: { uri: '/lumi/orange/E006.json' } },
  E007: { 1: { uri: '/lumi/orange/E007.json' } },
  E008: { 1: { uri: '/lumi/orange/E008.json' } },
  E009: { 1: { uri: '/lumi/orange/E009.json' } },
  E010: { 1: { uri: '/lumi/orange/E010.json' } },
  E011: { 1: { uri: '/lumi/orange/E011.json' } },
  E012: { 1: { uri: '/lumi/orange/E012.json' } },
  E013: { 1: { uri: '/lumi/orange/E013.json' } },
  E015: { 1: { uri: '/lumi/orange/E015.json' } },
  E016: { 1: { uri: '/lumi/orange/E016.json' } },
  E017: { 1: { uri: '/lumi/orange/E017.json' } },
  E018: { 1: { uri: '/lumi/orange/E018.json' } },
  E019: { 1: { uri: '/lumi/orange/E019.json' } },
  E020: { 1: { uri: '/lumi/orange/E020.json' } },
  E021: { 1: { uri: '/lumi/orange/E021.json' } },
  E022: { 1: { uri: '/lumi/orange/E022.json' } },
};

// 白色动画资源
const whiteAnimations = {
  E001: { 1: { uri: '/lumi/white/E001.json' } },
  E002: { 1: { uri: '/lumi/white/E002.json' } },
  E003: { 1: { uri: '/lumi/white/E003.json' } },
  E004: { 1: { uri: '/lumi/white/E004.json' } },
  E005: { 1: { uri: '/lumi/white/E005.json' } },
  E006: { 1: { uri: '/lumi/white/E006.json' } },
  E007: { 1: { uri: '/lumi/white/E007.json' } },
  E008: { 1: { uri: '/lumi/white/E008.json' } },
  E009: { 1: { uri: '/lumi/white/E009.json' } },
  E010: { 1: { uri: '/lumi/white/E010.json' } },
  E011: { 1: { uri: '/lumi/white/E011.json' } },
  E012: { 1: { uri: '/lumi/white/E012.json' } },
  E013: { 1: { uri: '/lumi/white/E013.json' } },
  E015: { 1: { uri: '/lumi/white/E015.json' } },
  E016: { 1: { uri: '/lumi/white/E016.json' } },
  E017: { 1: { uri: '/lumi/white/E017.json' } },
  E018: { 1: { uri: '/lumi/white/E018.json' } },
  E019: { 1: { uri: '/lumi/white/E019.json' } },
  E020: { 1: { uri: '/lumi/white/E020.json' } },
  E021: { 1: { uri: '/lumi/white/E021.json' } },
  E022: { 1: { uri: '/lumi/white/E022.json' } },
};

// 动画配置映射
export const animationConfigs: Record<LumiColorType, Record<LumiAnimationType, Record<number, any>>> = {
    blue: blueAnimations,
    green: greenAnimations,
    purple: purpleAnimations,
    orange: orangeAnimations,
    white: whiteAnimations,
};

// Mood动画资源配置
export const moodAnimations: Record<MoodAnimationType, string> = {
  E002: '/mood/E002.json',
  E003: '/mood/E003.json',
  E006: '/mood/E006.json',
  E007: '/mood/E007.json',
  E008: '/mood/E008.json',
  E009: '/mood/E009.json',
  E010: '/mood/E010.json',
  E011: '/mood/E011.json',
  E012: '/mood/E012.json',
  E013: '/mood/E013.json',
  E015: '/mood/E015.json',
  E016: '/mood/E016.json',
  E017: '/mood/E017.json',
  E018: '/mood/E018.json',
  E019: '/mood/E019.json',
  E020: '/mood/E020.json',
  E021: '/mood/E021.json',
  E022: '/mood/E022.json',
};

// Hand动画资源配置
export const handAnimations: Record<HandAnimationType, string> = {
  E001: '/hand/E001.json',
  E002: '/hand/E002.json',
  E003: '/hand/E003.json',
  E004: '/hand/E004.json',
  E005: '/hand/E005.json',
  E006: '/hand/E006.json',
  E007: '/hand/E007.json',
  E008: '/hand/E008.json',
  E009: '/hand/E009.json',
  E010: '/hand/E010.json',
  E011: '/hand/E011.json',
  E012: '/hand/E012.json',
  E013: '/hand/E013.json',
  E015: '/hand/E015.json',
  E016: '/hand/E016.json',
  E017: '/hand/E017.json',
  E018: '/hand/E018.json',
  E019: '/hand/E019.json',
  E020: '/hand/E020.json',
  E021: '/hand/E021.json',
  E022: '/hand/E022.json',
};

// Foot动画资源配置
export const footAnimations: Record<FootAnimationType, string> = {
  E001: '/foot/E001.json',
  E002: '/foot/E002.json',
  E003: '/foot/E003.json',
  E004: '/foot/E004.json',
  E005: '/foot/E005.json',
  E006: '/foot/E006.json',
  E007: '/foot/E007.json',
  E008: '/foot/E008.json',
  E009: '/foot/E009.json',
  E010: '/foot/E010.json',
  E011: '/foot/E011.json',
  E012: '/foot/E012.json',
  E013: '/foot/E013.json',
  E015: '/foot/E015.json',
  E016: '/foot/E016.json',
  E017: '/foot/E017.json',
  E018: '/foot/E018.json',
  E019: '/foot/E019.json',
  E020: '/foot/E020.json',
  E021: '/foot/E021.json',
  E022: '/foot/E022.json',
};

// 兼容性导出（保持原有的MOOD导出）
export const MOOD = moodAnimations;




// VIP版本的动画配置（目前与普通版本相同，可以后续扩展不同的VIP动画）
export const vipAnimationConfigs: Record<LumiColorType, Record<LumiAnimationType, Record<number, any>>> = {
    blue: blueAnimations,
    green: greenAnimations,
    purple: purpleAnimations,
    orange: orangeAnimations,
    white: whiteAnimations,
};