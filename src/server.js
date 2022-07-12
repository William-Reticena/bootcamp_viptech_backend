import routers from "./routes";
const express = require("express");
const app = express();

app.use(express.json());
app.use(routers);

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
