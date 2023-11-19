import React, { useEffect, useState } from 'react';
import SavedWorkout from './SavedWorkout';

const SavedWorkoutsPage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts'));

    if (storedWorkouts) {
      setSavedWorkouts(storedWorkouts);
    }
  }, []);

  return (
    <div>
      <h2>Saved Workouts</h2>
      {savedWorkouts.map((workout) => (
        <SavedWorkout key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default SavedWorkoutsPage;
