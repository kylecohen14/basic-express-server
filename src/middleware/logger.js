'use strict';

module.exports = function (request, response, next) {
  console.log(request.method);

  let method = request.method;
  if (method === 'GET') {
    next();
  } else {
    next('Error - Something went wrong');
  }
};