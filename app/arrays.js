if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(p, t) { return p + t; });
    },

    remove : function(arr, item) {
      return arr.filter(i => i !== item);
    },

    removeWithoutCopy : function(arr, item) {
      let index = arr.indexOf(item);
      while(index !== -1) {
        arr.splice(index, 1);
        index = arr.indexOf(item);
      }
       
      return arr;
    },

    append : function(arr, item) {
      return arr.concat(item);
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      return arr.filter(i => i === item).length;
    },

    duplicates : function(arr) {
      let values = {};
      let duplicates = {};
      arr.forEach(item => {
        if(values[item]) {
          duplicates[item] = true;
        } else {
          values[item] = true;
        }
      });

      return Object.keys(duplicates);
    },

    square : function(arr) {
      for(let i = 0; i < arr.length; i++) {
        const value = parseInt(arr[i], 10);
        arr[i] = value * value;
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce((acc, item, index) => {
        if(item === target) {
          return [...acc, index];
        } else {
          return acc;
        }
      }, []);
    }
  };
});
