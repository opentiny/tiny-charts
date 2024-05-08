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
function throttle(delay, callback) {
  let timeoutID;
  let lastExec = 0;
  function clearExistingTimeout() {
    timeoutID && clearTimeout(timeoutID);
  }
  return function wrapper(...arguments_) {
    const __self = this;
    const elapsed = Date.now() - lastExec;
    function exec() {
      lastExec = Date.now();
      callback.apply(__self, arguments_);
    }
    clearExistingTimeout();
    if (elapsed > delay) {
      exec();
    } else {
      timeoutID = setTimeout(exec, delay - elapsed);
    }
  }
}

export default throttle;