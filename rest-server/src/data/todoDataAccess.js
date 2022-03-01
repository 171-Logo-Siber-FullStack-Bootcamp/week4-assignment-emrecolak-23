const axios = require('axios');

const getAllTodo = () =>{
  return axios.get("https://jsonplaceholder.typicode.com/todos");
}

module.exports = {
  getAllTodo
}