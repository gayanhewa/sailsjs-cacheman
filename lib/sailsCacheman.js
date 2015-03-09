// Wrapper

module.exports = function () {
   var Cacheman = require('cacheman');
   var cache = new Cacheman();

   return cache;
}
