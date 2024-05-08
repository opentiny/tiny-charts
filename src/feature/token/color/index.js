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
import ict from './ict';
import bpit from './bpit';
import cloud from './cloud';
import hdesign from './hdesign';

const color = {
  [THEMES.LIGHT]: ict.light,
  [THEMES.DARK]: ict.dark,
  [THEMES.BPIT_LIGHT]: bpit.light,
  [THEMES.BPIT_DARK]: bpit.dark,
  [THEMES.CLOUD_LIGHT]: cloud.light,
  [THEMES.CLOUD_DARK]: cloud.dark,
  [THEMES.HDESIGN_LIGHT]: hdesign.light,
  [THEMES.HDESIGN_DARK]: hdesign.dark,
};

export default color;
