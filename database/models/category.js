var mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    slug: String
});

module.exports = categorySchema;