'use strict';

const express = require('express');

const server = express(), ///
      staticRouter = express.static('public');

server.use(staticRouter);

server.listen(8000);


