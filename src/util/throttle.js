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