const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// GET all workouts
const getAllWorkouts = async (req, res) => {
    // Find all workouts in the database
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
}

// GET single workout
const getWorkout = async (req, res) => {
    // Check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({ error: 'Workout not found' });
    }

    // Find one workout in the database
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' });
    }

    res.status(200).json(workout);
}

// CREATE a new workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!load) {
        emptyFields.push('load');
    }
    if (!reps) {
        emptyFields.push('reps');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: `The following fields are required: ${emptyFields.join(', ')}` ,emptyFields});
    }

    // Create a new workout document
    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


// DELETE one workout
const deleteWorkout = async (req, res) => {
    // Check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({ error: 'Workout not found' });
    }

    // Find one workout in the database and delete it
    const workout = await Workout.findOneAndDelete({ _id: req.params.id });

    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' });
    }

    res.status(200).json(workout);
}

// UPDATE one workout
const updateWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!load) {
        emptyFields.push('load');
    }
    if (!reps) {
        emptyFields.push('reps');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: `The following fields are required: ${emptyFields.join(', ')}` ,emptyFields});
    }

    // Check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({ error: 'Workout not found' });
    }

    // Find one workout in the database and update it
    const workout = await Workout.findOneAndUpdate({ _id: req.params.id }, {...req.body}, {new: true})

    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' });
    }

    res.status(200).json( { workout ,mssg: 'Workout updated'});
}



module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}