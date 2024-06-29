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
// 柱状图的响应式配置
import axis from "../utils/axis"
import { rectSysLabel } from "../utils/label"
import { rectSysLegend } from "../utils/legend";
import { rectSysTitle } from "../utils/title";
import { rectSysTooltip } from "../utils/tooltip";

const BarChartOption = [
    axis,
    rectSysLabel,
    rectSysLegend,
    rectSysTitle,
    rectSysTooltip
  ]

export default BarChartOption;