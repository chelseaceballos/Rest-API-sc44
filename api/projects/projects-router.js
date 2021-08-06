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
            res.status(404).json({message: `Project with ID:${req.params.id} does not exist`})
        } else {
            res.json(project)
        }
    }) .catch(next)
})

router.post('/',  (req, res, next) => {
    if (!req.body.name || !req.body.description){
        res.status(400).json('Project name & description required!')
    } else {
        Projects.insert(req.body)
        .then(project =>{
            res.status(201).json(project)
        })
        .catch(next)
    }
})

router.put('/:id', (req, res, next) => { // 1/3 FAILING
    // Returns the updated project as the body of the response.
    // (HERE) If there is no project with the given id it responds with a status code 404.
    // If the request body is missing any of the required fields it responds with a status code 400.
    if(!req.body.name || !req.body.description){
        res.status(400).json('missing name and description')
    } else {
        Projects.update(req.params.id, req.body)
        .then(project =>{
            res.status(201).json(project)
        })
        .catch(next)
    }
})

router.delete('/:id', (req, res, next) => {
    Projects.remove(req.params.id)
    .then(count =>{
        if(count > 0) {
            res.status(200).json({message: `Project ${req.params.id} has been deleted`})
        } else {
            res.status(404).json('The project does not exist')
        }
    }) .catch(next)
})

router.get('/:id/actions', (req, res, next) => {
    Projects.getProjectActions(req.params.id)
    .then(project =>{
        if(!project) {
            res.status(404).json({message: `No actions belong to the project with the id of ${req.params.id}`})
        } else {
           res.status(200).json(project) 
        }
    }) .catch(next)
})

router.use((err, req, res ,next) =>{
    res.status(err.status || 500).json({
        message: 'error message projects',
        err: err.message,
        stack: err.stack
    })
})

module.exports = router;