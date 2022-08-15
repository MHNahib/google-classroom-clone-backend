const express = require("express");
const db = require("./src/config/db");

const { home, singup } = require("./src/routes");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/", home);
app.use("/api/v1/singup", singup);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`on port ${port}`);
});
