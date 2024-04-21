require("dotenv").config();
const user = require("./routes/userRoutes");
const todo = require("./routes/todoRoutes");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("Mongodb connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/todo", todo);
app.use("/api/user/", user);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
