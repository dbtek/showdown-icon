/**
 * Showdown Icon Extension, Glyphicon and FontAwesome support for showdown
 * http://github.com/dbtek/showdown-icon
 * 2014, Ismail Demirbilek
 * License: MIT
 */
(function (extension) {
  'use strict';

  // UML - Universal Module Loader
  // This enables the extension to be loaded in different environments
  if (typeof showdown !== 'undefined') {
    // global (browser or nodejs global)
    extension(showdown);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['showdown'], extension);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = extension(require('showdown'));
  } else {
    // showdown was not found so we throw
    throw Error('Could not find showdown library');
  }

}(function (showdown) {
  'use strict';

  //This is the extension code per se

  // Here you have a safe sandboxed environment where you can use "static code"
  // that is, code and data that is used accros instances of the extension itself
  // If you have regexes or some piece of calculation that is immutable
  // this is the best place to put them.

  // The following method will register the extension with showdown
  showdown.extension('icon', function() {
    'use strict';

    return [{
      type: "lang",
      regex: "\\B(\\\\)?@glyphicon-([\\S]+)\\b",
      replace: function(a, b, c) {
        return b === "\\" ? a : '<span class="glyphicon glyphicon-' + c + '">' + "</span>"
      }
    }, {
      type: "lang",
      regex: "\\B(\\\\)?@fa-([\\S]+)\\b",
      replace: function(a, b, c) {
        return b === "\\" ? a : '<i class="fa fa-' + c + '">' + "</i>"
      }
    }];
  });
}));
