import { useState } from 'react'
import ExerciseList from './components/ExerciseList'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SavedWorkoutsPage from './components/SavedWorkoutsPage';
import HomePage from './components/HomePage'
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/savedWorkoutsPage' element={<SavedWorkoutsPage/>}/>
    <Route path='/ExerciseList' element={<ExerciseList/>}/>
  </Routes>
</Router>
  )
}

export default App
