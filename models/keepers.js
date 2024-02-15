const {Schema, model} = require('../config/db-connection')


const keeperSchema = Schema({
    e_id: Number,
    name: String,
    username: String,
    email: String,
    address: {
      street: String,
      city: String,
      zip: String
    },
    phone: String,
    password: String,
    animals: [String]
  });

// You can add pre hooks to your schema right here

module.exports = model('keeper', keeperSchema)