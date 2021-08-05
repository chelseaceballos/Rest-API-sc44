const router = require('express').Router()
const Actions = require('./actions-model');
// const actions = express.Router();
// const router = express.Router();

//Middleware functions



router.get('/', (req, res, next) => { // FAIL
   res.json('foo')
    // Actions.get(req.params)
    // .then(action => {
    //     res.status(200).json(action)
    // }) .catch (err => {
    //     next(err)
    // })
})

router.get('/:id', (req, res, next) => {
    // Returns an action with the given id as the body of the response.
    // If there is no action with the given id it responds with a status code 404.
         Actions.get(req.params.id)
         .then(action => {
             if(!action) {
                 res.status(404).json(`Action with ${req.params.id} ID does not exist`)
             } else {
                 res.json(action)
             }           
         })   .catch(next)
})

router.post('/', (req, res, next) => {
    // Returns the newly created action as the body of the response.
    // If the request body is missing any of the required fields it responds with a status code 400.
    // When adding an action make sure the project_id provided belongs to an existing project.
})

router.put('/:id', (req, res, next) => {
    // Returns the updated action as the body of the response.
    // If there is no action with the given id it responds with a status code 404.
    // If the request body is missing any of the required fields it responds with a status code 400.
})

router.delete('/:id', (req, res, next) => {
    // Returns no response body.
    // If there is no action with the given id it responds with a status code 404.
})

router.use((err, req, res ,next) =>{
    res.status(err.status || 500).json({
        message: 'error message actions',
        err: err.message,
        stack: err.stack
    })
})

// module export
module.exports = router