'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var options = {};
  if (process.env.EMBER_ENV === 'production') {
      options.fingerprint = {
        prepend: '/ember-format-json/',
      };
  }

  var app = new EmberAddon(defaults, options);
  app.import("node_modules/json-formatter-js/dist/json-formatter.js");
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
