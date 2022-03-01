const express = require("express");

const postRouter = express.Router();

// Controller
const postController = require("../src/controller/postDataController");

postRouter.route("/posts").get((req,res) => {

  postController.getAllPostData()
    .then(result => {
      res.send(result.data)
    }).catch(err => {
      res.send(err)
    })
})

module.exports = {
  postRouter
}