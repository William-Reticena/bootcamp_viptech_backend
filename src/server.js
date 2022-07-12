const express = require("express");
const app = express();

app.use("/product", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
