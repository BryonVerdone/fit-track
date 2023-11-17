import React, { useState } from 'react';

const ExerciseTracker = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [exerciseList, setExerciseList] = useState([]);

    const handleButtonClick = () => {
        if (exerciseName.trim() !== '' && sets.trim() !== '' && reps.trim() !== '') {
            const newExercise = {
                name: exerciseName,
                sets: sets,
                reps: reps,
            };

            setExerciseList([...exerciseList, newExercise]);
            setExerciseName('');
            setSets('');
            setReps('');
            console.log(exerciseList);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Exercise Name"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Sets"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
            />
            <input
                type="text"
                placeholder="Reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
            />
            <button onClick={handleButtonClick}>Add Exercise</button>
            <ul>
                {exerciseList.map((exercise, index) => (
                    <li key={index}>
                        {exercise.name} - {exercise.sets} sets, {exercise.reps} reps
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseTracker;
