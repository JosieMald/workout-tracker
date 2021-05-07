const router = require('express').Router();
const Workout = require("../models/Workout")

// POST ROUTE
router.post("/workouts", (req, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

// PUT ROUTE
router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

// GET ROUTES
router.get("/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                    
                }
            }
        }
    ])
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})


router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                    
                }
            }
        }
    ]).sort({_id:-1}).limit(7)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})


module.exports = router;