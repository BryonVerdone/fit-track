const SavedWorkout= ({workout})=>{
    // data from the create exercise list and display here
    // this should be saved in local storage for now
    //pass in exercises as props map through them and render a list of the exercises
return(
<article>
<h3>Saved Workout</h3>
<ul>
    {workout.map((exercise, index)=>{
<li key={index}>{exercise.name}- {exercise.sets} - {exercise.reps}</li>
    })}
</ul>

</article>


)

    
}
export default SavedWorkout