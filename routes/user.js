var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET users listing. */
router.get('/all', async (req, res, next) => {
  let results = await db.user.find({});
  res.send(results).status(200);
});

router.delete('/:id', async (req, res, next) => {
  let id = req.params.id;
  let results = await db.user.deleteOne({_id: id});
  res.send(results).status(200);
});

router.delete('/delete/all', async (req, res, next) => {
  let results = await db.user.deleteMany({});
  res.send(results).status(200);
});

router.post("/", async (req, res, next) => {
  let newUser = req.body;
  let result = new db.user(newUser);
  await result.save();
  res.send(result).status(204);
});

router.put("/:id", async (req, res, next) => {
  let newUser = req.body;
  let id = req.params.id;
  let result = await db.user.findByIdAndUpdate(id, newUser);
  res.send(result).status(204);
});

module.exports = router;
