const express = require("express");
const db = require("./src/config/db");

const { home } = require("./src/routes");

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", home);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`on port ${port}`);
});
