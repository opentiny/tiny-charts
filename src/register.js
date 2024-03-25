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
