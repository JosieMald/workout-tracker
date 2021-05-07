const router = require("express").Router();
const Workout = require("../../models/Workout")

router.get("/", (req, res) => {
    Workout.findAll()
    .then((workout) => {
        res.json(workout);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
});