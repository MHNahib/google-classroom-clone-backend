require("dotenv").config();
const mongoose = require("mongoose");

// dev
mongoose
  .connect("mongodb://localhost/classroom")
  .then(() => console.log(`connected to db dev`))
  .catch((err) => console.log(err));

//   production
// mongoose
//   .connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log(`connected to db prod`);
//   })
//   .catch((err) => console.log(err));
