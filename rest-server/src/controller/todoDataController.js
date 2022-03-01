const todoData = require("../data/todoDataAccess");


const getAllTodoData = () =>{
 
  const todos = todoData.getAllTodo();
  return todos
}

module.exports = {
  getAllTodoData
}