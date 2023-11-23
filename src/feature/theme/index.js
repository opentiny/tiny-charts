import merge from '../../util/merge';
import ictDark from './ictDark';
import ictLight from './ictLight';
import bpitLight from './bpitLight';
import cloudDark from './cloudDark';
import cloudLight from './cloudLight';
import HashMap from '../../util/hashMap';
import cloneDeep from '../../util/cloneDeep';
import tips from '../../util/tips';
import ictLight2 from './ict/light';
import ictDark2 from './ict/dark';
import cloudLight2 from './cloud/light';
import cloudDark2 from './cloud/dark';
import { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME, THEME_ERROR_TIP_MESSAGE } from './config';

const theme = new HashMap({
  [THEMES.DARK]: ictDark,
  [THEMES.LIGHT]: ictLight,
  [THEMES.BPIT_LIGHT]: bpitLight,
  [THEMES.CLOUD_DARK]: cloudDark,
  [THEMES.CLOUD_LIGHT]: cloudLight,
  [CURRENT_THEME]: ictLight,
});

const themeToken = new HashMap({
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

  static config = ictLight2;

  static set(name, config) {
    const defaultConfig = cloneDeep(this.get(DEFAULT_THEME_NAME));
    merge(defaultConfig, config);
    theme.set(name, defaultConfig);
  }

  static get(name) {
    return theme.get(name);
  }

  static getConfig(name) {
    return themeToken.get(name);
  }

  static setDefaultTheme(name) {
    const tempTheme = this.validate(name);
    if (this.themeName !== tempTheme) {
      this.themeName = tempTheme;
      theme.set(CURRENT_THEME, theme.get(tempTheme));
      this.color = this.get(CURRENT_THEME).color;
      // 以下config功能待完善
      themeToken.set(CURRENT_THEME, themeToken.get(tempTheme));
      this.config = this.getConfig(CURRENT_THEME);
      // console.log(this.config);
    }
  }

  // 校验主题的合法性,将不合法的主题值重置为默认的light主题,并给与告警
  static validate(name) {
    // 如果没传并且没有全局注册过直接就是light主题
    let tempTheme = name || this.themeName || DEFAULT_THEME_NAME;

    if (tempTheme.toLowerCase().indexOf('cloud-light') !== -1) {
      tempTheme = THEMES.CLOUD_LIGHT;
    }

    if (tempTheme.toLowerCase().indexOf('cloud-dark') !== -1) {
      tempTheme = THEMES.CLOUD_DARK;
    }

    const themeKeys = theme.keys();

    const validate = themeKeys.includes(tempTheme);

    if (!validate) {
      tips.error(THEME_ERROR_TIP_MESSAGE);
      tempTheme = THEMES.LIGHT;
    }

    return tempTheme;
  }
}

export { THEMES };

export default Theme;
