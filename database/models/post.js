var mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    postPic: String,
    createAt: Date,
    categoryId: mongoose.Types.ObjectId,
    authorId: mongoose.Types.ObjectId
});

module.exports = postSchema;