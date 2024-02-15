const {Schema, model} = require('../config/db-connection')


const animalSchema = Schema({
  animal_id: Number,
  name:  String,
  species:  String,
  family: String,
  habitat: String,
  place_of_found: String,
  diet: String,
  description:  String, 
  weight_kg:Number,
  height_cm: Number,
  image: String,
  keepers:[String] 
})

// You can add pre hooks to your schema right here

module.exports = model('animal', animalSchema)