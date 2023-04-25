require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const workoutsRoute = require('./routes/workouts');
const userRoutes = require('./routes/user');

// Create express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/workouts', workoutsRoute);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and Server is listening on port', process.env.PORT);
        })
    })
    .catch(err => {
        console.log(err)
    });




