// add middlewares here related to projects
// add middlewares here related to actions
const express = require('express');
const Projects = require('./projects-model.js');

function projectsLogger(req, res, next) {
    // DO YOUR MAGIC
    const method = req.method
    const timestamp = new Date().toLocaleString()
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`);
    next()
  };

//export
module.exports = {
    projectsLogger
}