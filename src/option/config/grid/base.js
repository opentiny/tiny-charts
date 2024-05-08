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
import cloneDeep from '../../../util/cloneDeep';

const baseGridOption = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  containLabel: true,
};

function base() {
  const option = cloneDeep(baseGridOption);
  return option;
}

export default base;
