if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      function getFiles(dir, filterDirName) {
        if(!dir || !dir.files) {
          return [];
        }
        
        let files = [];

        for(let i = 0; i < dir.files.length; i++) {
          let item = dir.files[i];
          if(typeof item === 'string' && (dir.dir === filterDirName || !filterDirName)) {
            files.push(item);
          } else if(item.dir) {
            files.push(...getFiles(item, dir.dir === filterDirName ? null : filterDirName)); 
          }
        }

        return files;
      }

      return getFiles(data, dirName);
    },

    permute: function(arr) {
      let permutations = [];

      function getPermutations(array, index) {

        if(index === 1) {
          permutations.push([...array]);
        } else {
          getPermutations(array, index - 1);

          for(let i = 0; i < index - 1; i++) {
            if(index % 2 === 0) {
              [array[i], array[index-1]] = [array[index-1], array[i]];
            } else {
              [array[0], array[index-1]] = [array[index-1], array[0]];
            }

            getPermutations(array, index - 1);
          }
        }
      }

      getPermutations(arr, arr.length);
      return permutations;
    }
  };
});
