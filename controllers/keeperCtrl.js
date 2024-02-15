const Keeper = require('../models/keepers')



async function index(req, res) {
    try {
      const keepers = await Keeper.find({});
      if (keepers.length > 0) {
        res.status(200).send(keepers);
      } else {
        res.status(404).send("No keepers found");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async function findIndex(req, res) {
    try {
      const keeper = await Keeper.find({e_id: req.params.id});
      if (keeper.length > 0) {
        res.status(200).send(keeper);
      } else {
        res.status(404).send("No keeper found");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async function create(req, res) {
    try {
      // req.body will have the info that the user filled out on the frontend
      const createdKeeper = await Keeper.create(req.body);
      if (createdKeeper) {
        res.status(201).send(createdKeeper);
      } else {
        res.status(404).send("Failed to create keeper");
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
      // req.body will have the info that the user filled out on the frontend
      const modifiedKeeper = await Keeper.findOneAndUpdate(
        { e_id: req.params.id }, // using e_id
        req.body,
        { new: true } // Returns the modified document
      );
  
      if (modifiedKeeper) {
        res.status(201).send(modifiedKeeper);
      } else {
        res.status(404).send("Keeper not found");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }
  async function destroy(req, res) {
    try {
      const deletedKeeper = await Keeper.findOneAndDelete({ e_id: req.params.id });
      if (deletedKeeper) {
        res.status(204).send(deletedKeeper);
      } else {
        res.status(404).send("Keeper not found");
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