'use strict';

module.exports = function(error, request, response, next) {
  response.status(404).send('Bad route');
  response.end();
};