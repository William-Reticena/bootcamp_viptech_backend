import routers from "./routes";
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use("/files", express.static("images"));
app.use(routers);

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
