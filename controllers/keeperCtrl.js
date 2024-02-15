const Keeper = require('../models/keepers')



async function index(req, res) {
  try {
    const keepers = await Keeper.find({});
    if (keepers) {
      res.status(200).send(keepers);
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
      res.status(201).send(createdKeeper)
    }
  } catch (err) {
    res.status(400).send(err);
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
    const deletedKeeper = await Keeper.findOneAndDelete({e_id: req.params.id});
    if (deletedKeeper) {
      res.status(201).send(deletedKeeper);
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