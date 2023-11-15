import merge from '../../util/merge';
import ictDark from './ictDark';
import ictLight from './ictLight';
import bpitLight from './bpitLight';
import cloudDark from './cloudDark';
import cloudLight from './cloudLight';
import HashMap from '../../util/hashMap';
import cloneDeep from '../../util/cloneDeep';
import validateTheme from './util/validateTheme';
import { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME } from './config';
import { ictLight2, ictDark2 } from './ict';
import { cloudLight2, cloudDark2 } from './cloud';

const theme = new HashMap({
  [THEMES.DARK]: ictDark,
  [THEMES.LIGHT]: ictLight,
  [THEMES.BPIT_LIGHT]: bpitLight,
  [THEMES.CLOUD_DARK]: cloudDark,
  [THEMES.CLOUD_LIGHT]: cloudLight,
  [CURRENT_THEME]: ictLight,
});

const themeConfig = new HashMap({
  [THEMES.DARK]: ictDark2,
  [THEMES.LIGHT]: ictLight2,
  [THEMES.BPIT_LIGHT]: bpitLight,
  [THEMES.CLOUD_DARK]: cloudDark2,
  [THEMES.CLOUD_LIGHT]: cloudLight2,
  [CURRENT_THEME]: ictLight2,
});

class Theme {
  // 当前主题名称
  static themeName = undefined;
  // 当前主题颜色
  static color;

  static config;

  static set(name, config) {
    const defaultConfig = cloneDeep(this.get(DEFAULT_THEME_NAME));
    merge(defaultConfig, config);
    theme.set(name, defaultConfig);
  }

  static get(name) {
    return theme.get(name);
  }

  static getConfig(name) {
    return themeConfig.get(name);
  }

  static setDefaultTheme(name) {
    const tempTheme = validateTheme(name, this.themeName, theme);
    if (this.themeName !== tempTheme) {
      this.themeName = tempTheme;
      theme.set(CURRENT_THEME, theme.get(tempTheme));
      this.color = this.get(CURRENT_THEME).color;
      // 以下config功能待完善
      themeConfig.set(CURRENT_THEME, themeConfig.get(tempTheme));
      this.config = this.getConfig(CURRENT_THEME);
      // console.log(this.config);
    }
  }
}

export { THEMES };

export default Theme;
