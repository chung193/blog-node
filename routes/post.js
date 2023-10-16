var express = require('express');
var router = express.Router();
var db = require('../database/db');
var mongoose = require("mongoose");

/* GET users listing. */
router.get('/all', async (req, res, next) => {
    let results = await db.post.find({});
    res.send(results).status(200);
});

router.delete('/:id', async (req, res, next) => {
    let id = req.params.id;
    let results = await db.post.deleteOne({_id: id});
    res.send(results).status(200);
  });
  
  router.delete('/delete/all', async (req, res, next) => {
    let results = await db.post.deleteMany({});
    res.send(results).status(200);
  });
  
  router.post("/", async (req, res, next) => {
    let newPost = req.body;
    newPost.categoryId = new mongoose.Types.ObjectId(newPost.categoryId);
    newPost.authorId = new mongoose.Types.ObjectId(newPost.authorId);
    let result = new db.post(newPost);
    await result.save();
    res.send(result).status(204);
  });
  
  router.put("/:id", async (req, res, next) => {
    let newPost = req.body;
    newPost.categoryId = new mongoose.Types.ObjectId(newPost.categoryId);
    newPost.authorId = new mongoose.Types.ObjectId(newPost.authorId);
    let id = req.params.id;
    let result = await db.post.findByIdAndUpdate(id, newPost);
    res.send(result).status(204);
  });

module.exports = router;