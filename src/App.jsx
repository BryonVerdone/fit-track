import { useState } from 'react'
import ExerciseList from './components/ExerciseList'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SavedWorkoutsPage from './components/SavedWorkoutsPage';
        
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<ExerciseList/>}/>
    <Route path='/savedWorkoutsPage' element={<SavedWorkoutsPage/>}/>
  </Routes>
</Router>
  )
}

export default App
