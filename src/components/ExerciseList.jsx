import React, { useEffect, useState } from 'react';

const ExerciseList = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([])


// Grab data from local storage when component mounts
useEffect(()=>{
    const storedList= JSON.parse(localStorage.getItem('exerciseList'))
    const storedWorkout = JSON.parse(localStorage.getItem('savedWorkouts'))
    if(storedList){
        setExerciseList(storedList)
    }
    //if there is a saved workout 
    if(storedWorkout){
        setSavedWorkouts(storedWorkout)
    }
},[])

// when exersicerList or savedWorkout changeds update local storage
useEffect(()=>{
    localStorage.setItem('exerciseList',JSON.stringify(exerciseList))
},[exerciseList])

// useEffect(()=>{
//     localStorage.setItem('savedWorkouts',JSON.stringify(savedWorkouts))
// },[savedWorkouts])


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
            console.log(setExerciseList);
        }
    };
    const handleSavedWorkout = ()=>{
if(exerciseList.length > 0 ){
    setSavedWorkouts(...savedWorkouts,exerciseList)
    setExerciseList([])
    localStorage.setItem('savedWorkouts', JSON.stringify([...savedWorkouts, exerciseList]));
}
    
}
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
        <button onClick={handleSavedWorkout}>Save Workout</button>
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

export default ExerciseList;
