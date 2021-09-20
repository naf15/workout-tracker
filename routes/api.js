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


// async getLastWorkout() {
//     let res;
//     try {
//       res = await fetch("/api/workouts");
//     } catch (err) {
//       console.log(err)
//     }
//     const json = await res.json();

//     return json[json.length - 1];
//   },
//   async addExercise(data) {
//     const id = location.search.split("=")[1];

//     const res = await fetch("/api/workouts/" + id, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     });

//     const json = await res.json();

//     return json;
//   },
//   async createWorkout(data = {}) {
//     const res = await fetch("/api/workouts", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" }
//     });

//     const json = await res.json();

//     return json;
//   },

//   async getWorkoutsInRange() {
//     const res = await fetch(`/api/workouts/range`);
//     const json = await res.json();

//     return json;
//   },


// Add exercises to the most recent workout plan.

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// View the total duration of each workout from the past seven workouts on the stats page.

module.exports = router;