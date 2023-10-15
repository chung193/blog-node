var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET users listing. */
router.get('/all', async (req, res, next) => {
    console.log(db.models);
    let results = await db.category.find();
    res.send(results).status(200);
});

router.post("/", async (req, res, next) => {
    let newCat = req.body;
    console.log(newCat);
    let result = new db.category(newCat);
    await result.save();
    res.send(result).status(204);
});

module.exports = router;