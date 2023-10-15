var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET users listing. */
router.get('/all', async (req, res, next) => {
    let results = await db.post.find({});
    res.send(results).status(200);
});

module.exports = router;