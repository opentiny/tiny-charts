/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
function Register() {
  this.registeredComp = {};
}

function registerComp(options) {
  this.registeredComp[options.name] = options.component;
}

function getRegisteredComp(name) {
  if (name in this.registeredComp) {
    return this.registeredComp[name];
  }
  return null;
}

Register.prototype.registerComp = registerComp;
Register.prototype.getRegisteredComp = getRegisteredComp;

const register = new Register();

const components = [];

components.forEach(comp => {
  register.registerComp(comp);
});
export default register;
