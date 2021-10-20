'use strict';

const express = require('express');
const server = express();

const logger = require('./src/middleware/logger.js');
const validator = require('./src/middleware/validator.js');

const error404 = require('./src/error-handlers/404.js');
const error500 = require('./src/error-handlers/500.js');

server.use(express.json());
server.use(logger);

server.get('/person', validator, handlePerson);

function handlePerson(request, response) {
  let { name } = request.query;
  response.status(200).send(name);
}


server.use('*', error404);
server.use(error500);

module.exports = {
  server,
  start: server.listen(PORT, () => console.log(`Server Is Running on ${PORT}`))
};

