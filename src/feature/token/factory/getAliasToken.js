/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
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
