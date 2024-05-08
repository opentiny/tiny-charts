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
import color from '../color';
import getGlobalToken from './getGlobalToken';
import getAliasToken from './getAliasToken';
import getModelToken from './getModelToken';
import getChartsToken from './chartsToken';

/**
 * 获取相应的主题的token
 * @param {string} themeName  主题名称
 */
function getToken(themeName) {
  const globalToken = getGlobalToken(themeName);
  const aliasToken = getAliasToken(themeName, globalToken);
  const modelToken = getModelToken(aliasToken);
  const chartsToken = getChartsToken(aliasToken);
  return {
    ...color[themeName].colorSet,
    ...modelToken,
    ...chartsToken,
    colorBoard:color[themeName].colorBoard,
  };
}

export default getToken;
