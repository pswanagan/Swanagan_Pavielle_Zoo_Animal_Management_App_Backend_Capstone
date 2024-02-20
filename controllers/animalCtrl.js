
const Animal = require('../models/animals')



async function index(req, res) {
  try {
    const animals = await Animal.find({});
    if (animals.length > 0) {
      res.status(200).send(animals);
    } else {
      res.status(404).send("No animals found");
    }
  } catch (err) {
    res.status(500).send("Internal server error");
  }
}

async function findIndex(req, res) {
  try {
    const animal = await Animal.find({ animal_id: req.params.id});
    if (animal.length > 0) {
      res.status(200).send(animal);
    } else {
      res.status(404).send("No animal found");
    }
  } catch (err) {
    res.status(500).send("Internal server error");
  }
}

async function create(req, res) {
  try {
    const createdAnimal = await Animal.create(req.body);
    if (createdAnimal) {
      res.status(201).send(createdAnimal);
    } else {
      res.status(404).send("Failed to create an animal");
    }
  } catch (err) {
   // Check if the error is a validation error
   if (err.name === "ValidationError") {
    res.status(400).send(err.message);
  } else {
    res.status(500).send("Internal server error");
  }
  }
}

async function modify(req, res) {
  try {
    const modifiedAnimal = await Animal.findOneAndUpdate(
      { animal_id: req.params.id }, // Using e_id
      req.body,
      { new: true } // Returns the modified document
    );

    if (modifiedAnimal) {
      res.status(200).send(modifiedAnimal);
    } else {
      res.status(404).send("Animal not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function destroy(req, res) {
  try {
    const deletedAnimal = await Animal.findOneAndDelete({ e_id: req.params.id });
    if (deletedAnimal) {
      res.status(204).send();
    } else {
      res.status(404).send("Animal not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  create,
  destroy,
  modify,
  findIndex
};