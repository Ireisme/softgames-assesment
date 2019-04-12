if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(...arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return (secondString) => `${str}, ${secondString}`;
    },

    makeClosures : function(arr, fn) {
      return arr.map(item => () => fn(item));
    },

    partial : function(fn, str1, str2) {
      return fn.bind(null, str1, str2); 
    },

    useArguments : function() {
      return [...arguments].reduce((acc, v) => acc + v);
    },

    callIt : function(fn) {
      return fn.apply(null, [...arguments].filter(arg => arg !== fn));
    },

    partialUsingArguments : function(fn) {
      var nonFunctionArgs = [...arguments].filter(arg => arg !== fn);
      return fn.bind(null, ...nonFunctionArgs);
    },

    curryIt : function(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return fn(a, b, c);
          };
        };
      };
    }
  };
});
