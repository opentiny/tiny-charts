// 当前支持主题
const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
  CLOUD_DARK: 'cloud-dark',
  CLOUD_LIGHT: 'cloud-light',
};

// 该值表示当前主题键名，内部使用，防止外部更改
const CURRENT_THEME = Symbol('current_theme');

// 默认主题
const DEFAULT_THEME_NAME = THEMES.LIGHT;

export { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME  };
