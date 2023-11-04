
import React,{useRef} from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieInformation from './MovieInformation/MovieInformation';
import Actors from './Actors/Actors';
import Profile from './Profile/Profile';

import Navbar from './Navbar/Navbar';
import './styles.css';
import Movie from './Homepage/Movie';
import useAlan from './Alan';
// const theme = createTheme();



const App = () => {
  const alanBtnContainer = useRef(null);
  useAlan();
  
  return (
    
      <div className='App'>
        <BrowserRouter>
          <CssBaseline />
          <Navbar />
          <main className='content'>
            <div className='toolbar' />
            <Routes>
              <Route path="/" element={<Movie/>}/>
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path='/approved' element={<Movie />} />
              <Route path="/actors/:id" element={<Actors />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </main>
        </BrowserRouter>
        <div ref={alanBtnContainer}/>
      </div>
   
  )
}

export default App;

