const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds115411.mlab.com:15411/heroku_l6qznn5x",
  {
    useNewUrlParser: true,
  }
);

// Requiring our routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
