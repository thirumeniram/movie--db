
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../Features/currentGenreOrCategory';
import {Box,CircularProgress,useMediaQuery,Typography,
} from '@mui/material';

import { useGetMoviesQuery } from '../../services/TMDB'
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';
import MovieCard from '../MovieCard/MovieCard';

const Movie = () => {
	const{genreIdOrCategoryName,searchQuery}=useSelector((state)=> state.currentGenreOrCategory)
	const[page,setPage]=useState(1);
	
  const { data, error, isFetching } = useGetMoviesQuery({genreIdOrCategoryName,page,searchQuery})
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const limit = lg ? 15 : 17;

  if (isFetching) {
		return (
			<Box display='flex' justifyContent='center'>
				<CircularProgress size='4rem' />
			</Box>
		);
	}

  
	if (data && !data.results.length) {
		return (
			<Box display='flex' alignItems='center' mt='20px'>
				<Typography variant='h4'>
					No Movies that match that name.
					<br />
					Please search for something else
				</Typography>
			</Box>
		);
	}

  if (error) 
  return 'An error has occured.';
  
  return (
    <div>
	   <MovieCard movie={data.results[0]}/>
      <MovieList movies={data} limit={limit} first/>
	  <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages}/>
    </div>
  )
}

export default Movie