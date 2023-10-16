var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET users listing. */
router.get('/all', async (req, res, next) => {
    console.log(db.models);
    let results = await db.category.find();
    res.send(results).status(200);
});

router.delete('/:id', async (req, res, next) => {
    let id = req.params.id;
    let results = await db.category.deleteOne({_id: id});
    res.send(results).status(200);
});

router.delete('/delete/all', async (req, res, next) => {
    let results = await db.category.deleteMany({});
    res.send(results).status(200);
});

router.post("/", async (req, res, next) => {
    let newCat = req.body;
    let result = new db.category(newCat);
    await result.save();
    res.send(result).status(204);
});

router.put("/:id", async (req, res, next) => {
    let newCat = req.body;
    let id = req.params.id;
    let result = await db.category.findByIdAndUpdate(id, newCat);
    res.send(result).status(204);
});

module.exports = router;