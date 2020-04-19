const path = require("path");
const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/", function (req, res) {
    db.Workout.create({})
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    let id = req.params.id;
    console.log(req.body);
    db.Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
