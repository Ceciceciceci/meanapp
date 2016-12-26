var restful = require('node-restful');
module.exports = function(app, route) {

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};