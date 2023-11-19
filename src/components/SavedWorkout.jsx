// SavedWorkout.jsx

import React from 'react';

const SavedWorkout = ({ workout }) => {
    // Check if workout and workout.exercises are defined and if workout.exercises is an array
    if (!workout || !Array.isArray(workout.exercises)) {
        return null; // or handle the error in some way
    }

    return (
        <div>
            <h3>Saved Workout</h3>
            <p>ID: {workout.id}</p>
            <ul>
                {workout.exercises.map((exercise, index) => (
                    <li key={index}>
                        {exercise.name} - {exercise.sets} sets, {exercise.reps} reps
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedWorkout;
