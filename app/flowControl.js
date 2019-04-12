if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      let number = parseInt(num);
      if(!number) {
        return false;
      }

      let fizz = num % 3 === 0 ? 'fizz' : '';
      let buzz = num % 5 === 0 ? 'buzz' : '';

      if(!fizz && !buzz) {
        return num;
      } else {
        return `${fizz}${buzz}`;
      }
    }
  };
});
