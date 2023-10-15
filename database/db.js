var dotenv = require("dotenv");
dotenv.config();
var userSchema = require('./models/user');
var categorySchema = require('./models/category');
var postSchema = require('./models/post');

var mongoose = require("mongoose");


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLAS_URI);
    mongoose.user = mongoose.model('User', userSchema);
    mongoose.category = mongoose.model('Category', categorySchema);
    mongoose.post = mongoose.model('Post', postSchema);
}

module.exports = mongoose;