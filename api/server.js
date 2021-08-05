const express = require('express');
const cors = require('cors');
const helmet =require('helmet');

const server = express();

server.use(express.json()) // teaches express to parse.req.body
server.use(cors())
server.use(helmet())

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.get('/', (req, res) => {
    res.send(`<h2>Hi, my name is Chucky!</h2>`);
  });

module.exports = server;
