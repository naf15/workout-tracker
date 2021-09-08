const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/workouts', ({ body }, res) => {
    Workout.find()
        .sort({ day: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        }) 
})

router.post('/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

// router.put('/api/workouts/:id', (req, res) => {
//     const mongoId = mongojs.ObjectId(req.params.id);

// })

// router.get('/api/workouts/range')



// Add exercises to the most recent workout plan.

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.

module.exports = router;