const { Router } = require('express')
const router = Router()
// Grab the controller functions
const { index, create, destroy, modify, findIndex} = require('../controllers/animalCtrl');

http://localhost:5050/animals

// Get all animals
router.get('/', index);

//Get animal by animal_id
router.get('/:id', findIndex)

// Create an animal
router.post('/', create);

// Delete an animal
router.delete('/:id', destroy);

//Update an animal
router.patch('/:id', modify)


module.exports = router