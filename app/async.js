if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return Promise.resolve(value);
    },

    manipulateRemoteData : function(url) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/json');
  
        request.onload = () => {
          if(request.readyState === 4 && request.status === 200) {
            const response = JSON.parse(request.responseText);
            let names = response.people.map(person => person.name);
            resolve(names.sort());
          } else {
            reject(request.statusText);
          }
        };
        request.onerror = () => reject(request.statusText);
        request.send();
      });
    }
  };
});
