import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Grow, Rating, Tooltip, Typography,useTheme } from '@mui/material';
import "./style.css"

const Movie = ({movie,i}) => {
    
  const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={`movie ${isDarkMode ? 'dark-mode-movie' : ''}`}>
          <Grow in key={i} timeout={(i + 1) * 250}>
              <Link className={`links ${isDarkMode ? 'dark-mode-text' : ''}`} to={`/movie/${movie.id}`}>
                  <img
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://fillmurray.com/200/300'}
                      alt={movie.title}
                      className='img'
                  />
                  <Typography className={`title ${isDarkMode ? 'dark-mode-text' : ''}`} variant='h5'>
                      {movie.title}
                  </Typography>
                  <Tooltip disableTouchListener title={`${movie.vote_average / 2} / 5`}>
                      <div>
                          <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
                      </div>
                  </Tooltip>
              </Link>
          </Grow>
      </Grid>
  )
}

export default Movie