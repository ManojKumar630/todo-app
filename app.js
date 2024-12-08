const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let tasks = [];

app.get("/", (req, res) => {
  res.render("index", { tasks: tasks });
});

app.post("/add", (req, res) => {
  const newTask = req.body.task;
  if (newTask) tasks.push(newTask); 
  res.redirect("/");
});

app.post("/remove", (req, res) => {
  const taskIndex = req.body.taskIndex;
  tasks.splice(taskIndex, 1); 
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`To-Do app running at http://localhost:${port}`);
});
