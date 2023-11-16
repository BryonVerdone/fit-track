import { useState } from 'react'
import ExerciseList from './components/ExerciseList'


import './App.css'




function App() {
  
// initial list of exercises

    const initialExercises = [
       { id: 1, name: 'Push-ups' },
      { id: 2, name: 'Sit-ups' },
      { id: 3, name: 'Squats' },
  ]
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleAddSelectedExercises = (exercisesToAdd) => {
    setSelectedExercises((prevSelected) => [...prevSelected, ...exercisesToAdd]);
  };
  return(
<section>
<h1>Workout Builder</h1>

<ExerciseList exercises={initialExercises} onAddSelectedExercises={handleAddSelectedExercises}/>

<div>
  <h2>Current Exercises</h2>
  <ul>
          {selectedExercises.map((exercise) =>  (
      <li key={exercise.id}>{exercise.name}</li>
    ))}
  </ul>
  
</div>
</section>


  )
}

export default App
