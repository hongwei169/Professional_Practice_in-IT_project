const express = require('express');
const {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

// Create express router
const router = express.Router();

// GET all workouts
router.get('/', getAllWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE one workout
router.delete('/:id', deleteWorkout);

// UPDATE one workout
router.patch('/:id', updateWorkout);

module.exports = router;