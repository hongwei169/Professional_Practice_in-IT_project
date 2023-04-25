const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
// This is the schema for the workouts collection
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;