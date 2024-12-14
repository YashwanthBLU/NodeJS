const express = require("express");
const app = express();

//middleware log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toLocaleTimeString}`);
  next(); //pass control to next middleware
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Welcome to express middleware example`);
});

app.use((req, res) => {
  res.status(404).send("route not found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`port runnning at ${port}`);
});
