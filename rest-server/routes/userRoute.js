const express = require("express");

const userRouter = express.Router();

// Controller
const userController = require("../src/controller/userDataController");

userRouter.route("/users").get((req,res)=>{
  userController.getAllUsersData()
    .then(result => {
      res.send(result.data);
    }).catch(err =>{
      res.send(err)
    })
})

module.exports = {
  userRouter
}