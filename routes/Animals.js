const { Router } = require('express')
const router = Router()
// Grab the controller functions
const { index, create, destroy } = require('../controllers/animalCtrl');

http://localhost:5050/animals

// Get all animals
router.get('/', index);

// Create an animal
router.post('/', create);

// Delete an animal
router.delete('/:id', destroy);


module.exports = router