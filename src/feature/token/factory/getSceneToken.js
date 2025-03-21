/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { THEMES } from '../../../util/constants';
import { getIctSceneToken } from '../theme/ict/getSceneToken';
import { getCloudSceneToken } from '../theme/cloud/getSceneToken';
import { getHdesignSceneToken } from '../theme/hdesign/getSceneToken';
import { getDpuiSceneToken } from '../theme/dpui/getSceneToken'

const sceneTokenMap = {
    [THEMES.LIGHT]: getIctSceneToken,
    [THEMES.DARK]: globalToken => getIctSceneToken(globalToken, false),
    [THEMES.BPIT_LIGHT]: getHdesignSceneToken,
    [THEMES.BPIT_DARK]: globalToken => getHdesignSceneToken(globalToken, false),
    [THEMES.CLOUD_LIGHT]: getCloudSceneToken,
    [THEMES.CLOUD_DARK]: globalToken => getCloudSceneToken(globalToken, false),
    [THEMES.HDESIGN_LIGHT]: getHdesignSceneToken,
    [THEMES.HDESIGN_DARK]: globalToken => getHdesignSceneToken(globalToken, false),
    [THEMES.DPUI_LIGHT]: getDpuiSceneToken,
    [THEMES.DPUI_DARK]: globalToken => getDpuiSceneToken(globalToken, false),
};


/**
 *  根据globalToken获取aliasToken
 * @param {string} themeName  主题名称
 * @param {object} globalToken  globalToken
 */
function getSceneToken(themeName, globalToken) {
    return {
        ...sceneTokenMap[themeName](globalToken),
    };
}

export default getSceneToken;
export { sceneTokenMap };
