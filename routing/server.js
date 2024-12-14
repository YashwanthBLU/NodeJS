const express = require("express");
const app = express();

//parse json
app.use(express.json());

const users = [
  { id: 1, name: "Jon" },
  { id: 2, name: "bones" },
  { id: 3, name: "zone" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) res.status(404).send("User not found");
  res.json(user);
});

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

const port = 3000;
app.listen(port, () => {
  console.log(`port running at ${port}`);
});
