// SavedWorkout.jsx

import React from 'react';
const eraseAllWorkouts=()=>{
console.log('workouts erased');
}

        <button>Erase All Workouts</button>

const SavedWorkout = ({ workout }) => {
    // Check if workout and workout.exercises are defined and if workout.exercises is an array
    if (!workout || !Array.isArray(workout.exercises)) {
        return null; // or handle the error in some way
    }

    return (
        <>
        <div>
            
            <p>ID: {workout.id}</p>
            <ul>
                {workout.exercises.map((exercise, index) => (
                    <li key={index}>
                        {exercise.name} - {exercise.weight} lbs- {exercise.sets} sets, {exercise.reps} reps
                    </li>
                ))}
            </ul>
        </div>
        </>
        
    );
};

export default SavedWorkout;
