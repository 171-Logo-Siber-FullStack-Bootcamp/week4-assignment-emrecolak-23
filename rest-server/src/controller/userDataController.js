const userData = require('../data/userDataAccess');


const getAllUsersData = () => {

  const users = userData.getAllUsers();

  return users
}

module.exports = {
  getAllUsersData
}