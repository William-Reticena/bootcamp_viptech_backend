const express = require("express");
const cors = require("cors");
import routers from "./routes";
const path = require("path");
const app = express();

app.use(cors())
app.use(express.json());
app.use("/files", express.static("images"));
app.use(routers);

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
