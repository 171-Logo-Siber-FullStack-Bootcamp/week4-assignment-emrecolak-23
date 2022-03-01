const postData = require("../data/postDataAccess");

const getAllPostData = () => {

  const posts = postData.getAllPosts();

  return posts;
}

module.exports = {
  getAllPostData
}