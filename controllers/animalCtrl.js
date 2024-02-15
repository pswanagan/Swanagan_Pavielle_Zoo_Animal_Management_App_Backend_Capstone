
const Animal = require('../models/animals')



async function index(req, res) {
  try {
    const animals = await Animal.find({});
    if (animals) {
      res.status(200).send(animals);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function create(req, res) {
  try {
    // req.body will have the info that the user filled out on the frontend
    const createdAnimal = await Animal.create(req.body);
    if (createdAnimal) {
      res.status(201).send(createdAnimal)
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function modify(req, res) {
  try {
    // req.body will have the info that the user filled out on the frontend
    const modifiedAnimal = await Animal.findOneAndUpdate(
      { animal_id: req.params.id }, // using e_id
      req.body,
      { new: true } // Returns the modified document
    );

    if (modifiedAnimal) {
      res.status(201).send(modifiedAnimal);
    } else {
      res.status(404).send("Animal not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function destroy(req, res) {
  try {
    const deletedAnimal = await Animal.findOneAndDelete({animal_id: req.params.id});
    if (deletedAnimal) {
      res.status(201).send(deletedAnimal);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  create,
  destroy,
  modify
};