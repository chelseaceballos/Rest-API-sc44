// add middlewares here related to actions
const express = require('express');
const Actions = require('./actions-model.js');

function actionsLogger(req, res, next) {
    // DO YOUR MAGIC
    const method = req.method
    const timestamp = new Date().toLocaleString()
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`);
    next()
  };

//export
module.exports = {
    actionsLogger
}