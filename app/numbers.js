if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      let binary = num.toString(2);
      return parseInt(binary[binary.length - bit], 10);
    },

    base10: function(str) {
      let decimalString = parseInt(str, 2).toString(10);
      return parseInt(decimalString, 10);
    },

    convertToBinary: function(num) {
      let binaryString = `0000000${num.toString(2)}`;
      return binaryString.substr(-8);
    },

    multiply: function(a, b) {
      let string = (a * b).toPrecision(1);
      return parseFloat(string);
    }
  };
});