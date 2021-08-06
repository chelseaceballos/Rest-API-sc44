const router = require('express').Router()
const Projects = require('./projects-model.js')


// //middleware goes here
// const {
//     validateProjId
// } = require('./projects-middleware')


router.get('/', (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    }) .catch(next)
})

router.get('/:id', (req, res, next) => {
    Projects.get(req.params.id)
    .then(project => {
        if(!project) {
            res.status(404).json({message: `Project with ${req.params.id} ID does not exist`})
        } else {
            res.json(project)
        }
    }) .catch(next)
})

router.post('/',  (req, res, next) => {
    //     Returns the newly created project as the body of the response.
    // If the request body is missing any of the required fields it responds with a status code 400.
    if (!req.body.name || !req.body.description){
        res.status(400).json('missing stuff')
    } else {
        Projects.insert(req.body)
        .then(project =>{
            res.status(201).json(project)
        })
        .catch(next)
    }

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
    // Projects.getProjectActions()

})

router.use((err, req, res ,next) =>{
    res.status(err.status || 500).json({
        message: 'error message projects',
        err: err.message,
        stack: err.stack
    })
})

module.exports = router;