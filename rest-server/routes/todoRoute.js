const express = require("express");
const todoRouter = express.Router();

const todoController = require("../src/controller/todoDataController");

todoRouter.route("/todos").get((req,res)=>{
  todoController.getAllTodoData()
    .then(result => {
      res.send(result.data)
    }).catch(err => {
      res.send(err)
    })
})

module.exports = {
  todoRouter
}