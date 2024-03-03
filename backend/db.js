const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todoModel = mongoose.model('todos', todoSchema);

module.exports = {
    todoModel
}