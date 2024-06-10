const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://jvkumar560:ycoL5BZ2OvIaWLOu@cluster0.e29a03e.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
    title: String,
    descriprion: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {todo}