const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            
            dbWorkout.forEach( (workout) => {
                let totalDuration = 0
                workout.exercises.forEach( ({duration}) => {
                    totalDuration += duration
                    console.log(`Total Duration: ${totalDuration}... Duration: ${duration}`)
                })
                console.log(totalDuration)
                workout.totalDuration = totalDuration
            })
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        }) 
})

router.put('/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(
        {_id: req.params.id},
        {$push:{"exercises" : req.body}},
        { new: true },
        )
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.status(400).json(err)
            })
});

router.post('/workouts', (req, res) => {
    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.get('/workouts/range', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            
            dbWorkout.forEach( (workout) => {
                let totalDuration = 0
                workout.exercises.forEach( ({duration}) => {
                    totalDuration += duration
                    console.log(`Total Duration: ${totalDuration}... Duration: ${duration}`)
                })
                console.log(totalDuration)
                workout.totalDuration = totalDuration
            })
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router;