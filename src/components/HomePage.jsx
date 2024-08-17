import {Link, } from 'react-router-dom';
const HomePage = () =>{
	return(
		<section>
        <ul>
            <li><Link to='/ExerciseList'>Create New Workout</Link></li>
            <li><Link to='/SavedWorkoutsPage'>Saved Workouts</Link></li>
        </ul>
		</section>
	)
}

export default HomePage; 
