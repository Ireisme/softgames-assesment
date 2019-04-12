if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      return (function (){
        let module = {
          greeting: str1,
          name: str2,
        };

        module.sayIt = () => `${module.greeting}, ${module.name}`;

        return module;
      }());
    }
  };
});