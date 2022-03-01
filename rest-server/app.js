const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

// Call Routers
const todoRouter = require("./routes/todoRoute");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
// Route Middleware
app.use(todoRouter.todoRouter);
app.use(userRouter.userRouter);
app.use(postRouter.postRouter);

// Routing
app.get("/", (req,res) =>{
  res.send("Todo List");
})

// Declare Port Number
const PORT = 10000

app.listen(PORT, ()=>{
  console.log(`Server start in ${PORT} port`)
})