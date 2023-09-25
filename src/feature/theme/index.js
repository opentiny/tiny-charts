import megre from '../../util/megre';
import ictDark from './ictDark';
import ictLight from './ictLight';
import cloudDark from './cloudDark';
import cloudLight from './cloudLight';
import HashMap from '../../util/hashMap';
import cloneDeep from '../../util/cloneDeep';
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

const theme = new HashMap({
  [THEMES.DARK]: ictDark,
  [THEMES.LIGHT]: ictLight,
  [THEMES.CLOUD_DARK]: cloudDark,
  [THEMES.CLOUD_LIGHT]: cloudLight,
  [CURRENT_THEME]: ictLight,
});

class Theme {
  // 当前主题名称
  static themeName = undefined;
  // 当前主题颜色
  static color;

  static set(name, config) {
    const defaultConfig = cloneDeep(this.get(DEFAULT_THEME_NAME));
    megre(defaultConfig, config);
    theme.set(name, defaultConfig);
  }

  static get(name) {
    return theme.get(name);
  }

  static setDefaultTheme(name) {
    // 如果没传并且没有全局注册过直接就是light主题
    let tempTheme = name || this.themeName || DEFAULT_THEME_NAME;
    // 脱敏敏感词汇
    if (tempTheme.toLowerCase().indexOf('cloud-light') !== -1) {
      tempTheme = THEMES.CLOUD_LIGHT;
    }
    if (tempTheme.toLowerCase().indexOf('cloud-dark') !== -1) {
      tempTheme = THEMES.CLOUD_DARK;
    }
    if (this.themeName !== tempTheme) {
      this.themeName = tempTheme;
      theme.set(CURRENT_THEME, theme.get(tempTheme));
      this.color = this.get(CURRENT_THEME).color;
    }
  }
}

export {THEMES};
export default Theme;
