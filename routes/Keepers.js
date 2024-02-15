const { Router } = require('express')
const router = Router()
// Grab the controller functions
const { index, create, destroy, modify, findIndex } = require('../controllers/keeperCtrl');

http://localhost:5050/keepers

// Get all keepers
router.get('/', index);

//Get animal by animal_id
router.get('/:id', findIndex);

// Create a keeper
router.post('/', create);

// Delete a keeper
router.delete('/:id', destroy);

//Update a keeper
router.patch('/:id', modify)

module.exports = router