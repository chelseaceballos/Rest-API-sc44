const router = require('express').Router()
const Actions = require('./actions-model');


//Middleware functions
// const {
//     middlfunc
// } = require('./actions-middlware')


router.get('/', (req, res) => { 
    Actions.get()
    .then(actions => {
        res.json(actions)
    }) .catch (err => {
        res.send([]).json
    })
})

router.get('/:id', (req, res, next) => {
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
    // When adding an action make sure the project_id provided belongs to an existing project.
    if (!req.body.project_id || !req.body.description || !req.body.notes){
        res.status(400).json('required fields are missing')
    } else {
        Actions.insert(req.body)
        .then(action =>{
            res.status(201).json(action)
        }) .catch(next)
    }
})

// router.put('/:id', (req, res, next) => { //async??
//   const { description, notes} = req.body
//   if(!description || !notes) {
//     res.status(400).json({ message: "required fields empty" })
//   } else {
//       Actions.get(req.params.id)
//       .then(stuff =>{
//           if(!stuff) {
//              res.status(404).json({message : "The project with this ID doesn't exist"})
//           } else {
//               return Projects.update(req.params.id, req.body)
//           }
//       })
//       .catch(next)
//   }
// })

router.put('/:id', (req, res, next) => { //async??
  
    if (!req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(404).json('required fields left empty')
    } else {
        Actions.update(req.params.id, req.body)
        .then(updated => {
            res.status(201).json(updated)
        }) 
        .catch(next)
    } 
})

router.delete('/:id', (req, res, next) => {
    // Returns no response body.
    // If there is no action with the given id it responds with a status code 404.
    Actions.remove(req.params.id)
    .then(count =>{
        if(count > 0) {
            res.status(200).json({message: `Action id:${req.params.id} deleted`})
        } else {
            res.status(404).json('Action does not exist')
        }
    })
    .catch(next)
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