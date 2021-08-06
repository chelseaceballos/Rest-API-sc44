const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { actionsLogger } = require('../api/actions/actions-middlware.js')
const { projectsLogger } = require('../api/projects/projects-middleware.js')

const actions = require('./actions/actions-router.js');
const projects = require('./projects/projects-router.js');

const server = express();

server.use(express.json()) 
server.use(projectsLogger)
server.use(actionsLogger)

server.use(cors())
server.use(helmet())

server.use('/api/actions', actions);
server.use('/api/projects', projects);

server.get('*', (req, res) => {
  res.status(404).json({
    message: "not found"
  })
});

module.exports = server;

