const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://himanshujagtap05:sVZ24zgMLnwkluJo@cluster0.0cnw4.mongodb.net/todoApp")

.then(()=> console.log("connected to MongoDB successfully!"))
.catch( err => console.error("MongoDB Connection ERROR",err))

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    Todo
}