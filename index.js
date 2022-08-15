const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./src/config/db");

const {
  home,
  singup,
  login,
  course,
  assignment,
  enrolled,
} = require("./src/routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/", home);
app.use("/api/v1/singup", singup);
app.use("/api/v1/login", login);
app.use("/api/v1/course", course);
app.use("/api/v1/assignment", assignment);
app.use("/api/v1/enroll", enrolled);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`on port ${port}`);
});
