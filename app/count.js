if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let shouldStop = false;
      let current = start;

      function increment() {
        console.log(current);

        if(current !== end && !shouldStop) {
          current = current + 1;
          setTimeout(increment, 100);
        }
      }

      increment();

      return {
        cancel: () => shouldStop = true
      };
    }
  };
});