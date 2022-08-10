const express = require("express");
const app = express();

const { home } = require("./src/routes");

const port = process.env.PORT || 5000;

app.use("/", home);

app.listen(port, () => {
  console.log(`on port ${port}`);
});
