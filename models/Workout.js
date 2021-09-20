const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        unique: true,
        required: "Day is required."
    },
    exercises: [
        {
            type: {
                type: String,
                required: 'Exercise type is required.'
            },
            name: {
                type: String,
                required: 'Exercise name is required.'
            },
            duration: {
                type: Number,
                integer: true,
                required: 'Exercise duration is required.'
            },
            weight: {
                type: Number, 
                integer: true,
                validate : {
                    validator : Number.isInteger,
                    message   : '{VALUE} is not an integer value'
                }
            },
            reps: {
                type: Number, 
                integer: true,
                validate : {
                    validator : Number.isInteger,
                    message   : '{VALUE} is not an integer value'
                }
            },
            sets: {
                type: Number, 
                integer: true,
                validate : {
                    validator : Number.isInteger,
                    message   : '{VALUE} is not an integer value'
                }
            },
            distance: {
                type: Number, 
                integer: true,
                validate : {
                    validator : Number.isInteger,
                    message   : '{VALUE} is not an integer value'
                }
            },
        }
    ],
    totalDuration: {
        type: Number,
        integer: true
    }
})


const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
