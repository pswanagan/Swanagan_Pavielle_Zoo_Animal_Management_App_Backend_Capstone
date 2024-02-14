const {Schema, model} = require('../config/db-connection')


const animalSchema = Schema({
  id: {type: Number,
  required: true},
  name: {type: String,
  required: true},
  species: {type: String,
    required: true},
  family: {type: String,
    required: true},
  habitat: {type: String,
    required: true},
  place_of_found: {type: String,
    required: true},
  diet: {type: String,
    required: true},
  description: {type: String,
    required: true},
  weight_kg: {type: Number,
    required: true},
  height_cm: {type: Number,
    required: true},
  image: String,
  keepers:[String] 
})

// You can add pre hooks to your schema right here

module.exports = model('Animal', animalSchema)