import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import MovieInformation from './MovieInformation/MovieInformation'
import Actors from './Actors/Actors'
import Profile from './Profile/Profile'

import Navbar from './Navbar/Navbar'
import './styles.css'
import Movie from './Homepage/Movie'



const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <main className='content'>
        <div className='toolbar' />
        <Routes>
           <Route path="/" element={<Movie/>}/>
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App
