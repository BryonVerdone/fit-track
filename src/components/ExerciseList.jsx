import { useState } from "react"

const ExerciseList= ({exercises, onAddSelectedExercises})=>{

    const [selectedExercises, setSelectedExercises] = useState([]);

    
const handleToggleExercise=(exercise)=>{
    const isSelected= selectedExercises.some((e)=>e.id === exercise.id)
    // Check to see if selected exercise has already been chosen, if so remove it
if(isSelected){
    setSelectedExercises((prevSelected)=>
    prevSelected.filter((e)=> e.id !== exercise.id)
    
    )
} else{
    setSelectedExercises((prevSelected)=>[...prevSelected,exercise])
}


}

// const handleSelectedExercise= (exerciseToAdd)=>{    
//     setSelectedExercises((prevSelected)=>[...prevSelected,...exerciseToAdd])

// }

    return(
        <div>
            <h2>Exercise List</h2>
        <ul>
            {exercises.map((exercise)=>(
                <li key={exercise.id}>
                <label>
                <input type="checkbox" checked={selectedExercises.some((e)=>e.id=== exercise.id)}
                onChange={()=> handleToggleExercise(exercise)}/>
                {exercise.name}
                </label>
                </li>
           ) )}
        </ul>
            <button onClick={() => onAddSelectedExercises(selectedExercises)}>Add Selected Exercises</button>
        </div>
    )

}

export default ExerciseList