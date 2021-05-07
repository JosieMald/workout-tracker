const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    excercises: [{
    type: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        unique: true
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    },
    }],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;

