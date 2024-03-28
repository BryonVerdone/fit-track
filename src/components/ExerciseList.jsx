import React, { useEffect, useState } from 'react';
// import { Link,} from 'react-router-dom';
// import SavedWorkout from './SavedWorkout';
import Navbar from './Navbar';

const ExerciseList = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [weight,setWeight]=useState('')
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    
    // Grab data from local storage when component mounts
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('exerciseList'));
        const storedWorkout = JSON.parse(localStorage.getItem('savedWorkouts'));

        if (storedList) {
            setExerciseList(storedList);
        }

        if (storedWorkout) {
            setSavedWorkouts(storedWorkout);
        }
    }, []);

    // when exerciseList or savedWorkouts changes, update local storage
    useEffect(() => {
        localStorage.setItem('exerciseList', JSON.stringify(exerciseList));
    }, [exerciseList]);

    const handleAddExercise = () => {
        if (exerciseName.trim() !== '' && sets.trim() !== '' && reps.trim() !== '') {
            const newExercise = {
                name: exerciseName,
                weight:weight,
                sets: sets,
                reps: reps,
            };

            setExerciseList([...exerciseList, newExercise]);
            setExerciseName('');
            setWeight('')
            setSets('');
            setReps('');
        }
    };

    const handleSavedWorkout = () => {
        if (exerciseList.length > 0) {
            const newWorkout = {
                id: Date.now(),
                exercises: [...exerciseList],
            };

            // Update state with the new workout
            setSavedWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);

            // Clear the exerciseList
            setExerciseList([]);

            // Update local storage with the new savedWorkouts
            localStorage.setItem('savedWorkouts', JSON.stringify([...savedWorkouts, newWorkout]));
            
        }
        alert('workout saved')
    };
const handleRemoveExercise = (indexToRemove)=>{
setExerciseList(exerciseList.filter((exercise, index) => index !== indexToRemove));
console.log('remove clicked');
};
    return (
        <>
            <div>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to='/SavedWorkoutsPage'>Saved Workouts</Link>
                        </li>
                    </ul>
                </nav> */}

<Navbar/>

            <input
                type="text"
                placeholder="Exercise Name"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}/>
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}/>
            <input
                type="number"
                placeholder="Sets"
                value={sets}
                onChange={(e) => setSets(e.target.value)}/>
            <input
                type="number"
                placeholder="Reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}/>
            <button onClick={handleAddExercise}>Add Exercise</button>
            <button onClick={handleSavedWorkout}>Save Workout</button>
            {/* <Link to="/savedWorkoutsPage">View Saved Workouts</Link> */}
            <ul>
                {exerciseList.map((exercise, index) => (
                    <li key={index}>
                        {exercise.name} - {exercise.weight} lbs - {exercise.sets} sets, {exercise.reps} reps
                        <button onClick={()=>handleRemoveExercise(index)}>Remove Exercise</button>
                    </li>
                ))}
            </ul>

            {savedWorkouts.length > 0 && (
                <div>
                    {/* <h2>Saved Workouts</h2>
                    {savedWorkouts.map((workout) => (
                        <SavedWorkout key={workout.id} workout={workout} />
                    ))} */}
                </div>
            )}
        </div>
        </>
    );
};

export default ExerciseList;
