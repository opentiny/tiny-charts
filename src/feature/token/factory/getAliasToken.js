import { THEMES } from '../constants';
import { getIctAliasToken, getIctDarkAliasToken } from '../theme/ict/getAliasToken';
import { getCloudAliasToken, getCloudDarkAliasToken } from '../theme/cloud/getAliasToken';
import { getHdesignAliasToken, getHdesignDarkAliasToken } from '../theme/hdesign/getAliasToken';

// aliasToken的回调映射,bit先和hdesign拉齐原先那套暂不删除
const aliasTokenMap = {
  [THEMES.LIGHT]: getIctAliasToken,
  [THEMES.DARK]: getIctDarkAliasToken,
  [THEMES.BPIT_LIGHT]: getHdesignAliasToken,
  [THEMES.BPIT_DARK]: getHdesignDarkAliasToken,
  [THEMES.CLOUD_LIGHT]: getCloudAliasToken,
  [THEMES.CLOUD_DARK]: getCloudDarkAliasToken,
  [THEMES.HDESIGN_LIGHT]: getHdesignAliasToken,
  [THEMES.HDESIGN_DARK]: getHdesignDarkAliasToken,
};

/**
 *  根据globalToken获取aliasToken
 * @param {string} themeName  主题名称
 * @param {object} globalToken  globalToken
 */
function getAliasToken(themeName, globalToken) {
  return {
    ...aliasTokenMap[themeName](globalToken),
  };
}

export default getAliasToken;
export { aliasTokenMap };
