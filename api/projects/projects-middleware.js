// add middlewares here related to projects
// add middlewares here related to actions
const express = require('express');
const Projects = require('./projects-model.js');

function projectsLogger(req, res, next) {
    const method = req.method
    const timestamp = new Date().toLocaleString()
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`);
    next()
  };

//  async function validateProjId (req, res, next) {
//   try{
//     const project = await Projects.get(req.body.name || req.body.description)
//     if(!project) {
//       res.status(400).json({message: "Project not found"})
//     } else {
//       req.project = project
//       next()
//     }
//   } catch (err) {
//     res.status(500).json({message: 'problem locating project'})
//   }
//  }


//export
module.exports = {
   // validateProjId,
    projectsLogger
}