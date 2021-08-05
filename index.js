require('dotenv').config()

const express = require('express');

const { PORT } = require('./config')
const server = require('./api/server.js');
 
server.listen(PORT, () => {
   console.log(`LISTENING ON PORT :${PORT}`);
});