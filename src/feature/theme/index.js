import merge from '../../util/merge';
import ictDark from './ictDark';
import ictLight from './ictLight';
import cloudDark from './cloudDark';
import cloudLight from './cloudLight';
import HashMap from '../../util/hashMap';
import cloneDeep from '../../util/cloneDeep';
import validateTheme from './util/validateTheme';
import { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME } from './config';
// import basicTheme  from './basicTheme';
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
  
  // static config=basicTheme

  static set(name, config) {
    const defaultConfig = cloneDeep(this.get(DEFAULT_THEME_NAME));
    merge(defaultConfig, config);
    theme.set(name, defaultConfig);
  }

  static get(name) {
    return theme.get(name);
  }

  static setDefaultTheme(name) {
    const tempTheme = validateTheme(name, this.themeName, theme);
    if (this.themeName !== tempTheme) {
      this.themeName = tempTheme;
      theme.set(CURRENT_THEME, theme.get(tempTheme));
      this.color = this.get(CURRENT_THEME).color;
    }
  }
}

export { THEMES };

export default Theme;
