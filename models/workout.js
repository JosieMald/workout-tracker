const mongoose = require("mongoose");
const { truncate } = require("node:fs");

const Schema = mongoose.Schema;

const ExcercisesSchema = new Schema({
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
    date: {
        type: Date,
        default: Date.now
    }
})

const Excercises = mongoose.model("Excercises", ExcercisesSchema);

module.exports = Excercises;


let workoutSeed = [
    {
      day: new Date().setDate(new Date().getDate()-10),
      exercises: [
        {
          type: "resistance",
          name: "Bicep Curl",
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4
        }
      ]
    },

// As a user, I want to be able to view create and track 
// daily workouts. I want to be able to log multiple 
// exercises in a workout on a given day. I should also
// be able to track the name, type, weight, sets, reps, 
// and duration of exercise. If the exercise is a cardio 
// exercise, I should be able to track my distance traveled.