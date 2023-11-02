import { THEMES, DEFAULT_THEME_NAME } from '../config';
import tips from '../../../util/tips';

const THEME_ERROR_TIP_MESSAGE =
  'Theme must be one of dark, light, cloud-light,cloud-dark, or the theme name registered for calling HuiCharts.registerTheme()';

// 校验主题的合法性,将不合法的主题值重置为默认的light主题,并给与告警
export default function validateTheme(name, themeName, themeConfig) {
  // 如果没传并且没有全局注册过直接就是light主题
  let tempTheme = name || themeName || DEFAULT_THEME_NAME;

  if (tempTheme.toLowerCase().indexOf('cloud-light') !== -1) {
    tempTheme = THEMES.CLOUD_LIGHT;
  }

  if (tempTheme.toLowerCase().indexOf('cloud-dark') !== -1) {
    tempTheme = THEMES.CLOUD_DARK;
  }

  const themeKeys = themeConfig.keys();

  const validate = themeKeys.includes(tempTheme);

  if (!validate) {
    tips.error(THEME_ERROR_TIP_MESSAGE);
    tempTheme = THEMES.LIGHT;
  }

  return tempTheme;
}
