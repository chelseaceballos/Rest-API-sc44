const express = require('express');
const router = express.Router();

const Projects = require('./projects-model.js')

//middleware goes here

const projectsRouter = express.Router();

router.get('/', (req, res, next) => {
    // Returns an array of projects as the body of the response.
    // If there are no projects it responds with an empty array.

})

router.get('/:id', (req, res, next) => {
    // Returns a project with the given id as the body of the response.
    // If there is no project with the given id it responds with a status code 404.
})

router.post('/', (req, res, next) => {
    //     Returns the newly created project as the body of the response.
    // If the request body is missing any of the required fields it responds with a status code 400.
})

router.put('/:id', (req, res, next) => {
    // Returns the updated project as the body of the response.
    // If there is no project with the given id it responds with a status code 404.
    // If the request body is missing any of the required fields it responds with a status code 400.
})

router.delete('/:id', (req, res, next) => {
    // Returns no response body.
    // If there is no project with the given id it responds with a status code 404.
})

router.get('/:id/actions', (req, res, next) => {
    // Returns an array of actions (could be empty) belonging to a project with the given id.
    // If there is no project with the given id it responds with a status code 404.

})


module.exports = projectsRouter;