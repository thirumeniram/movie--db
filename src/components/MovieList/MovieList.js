import React from 'react'
import { Grid } from '@mui/material'
import "./style.css"
import Movie from '../Movie/Movie'

// const MovieList = ({movies}) => {
    
//   return (
//     <Grid className='moviesContainer'>
//             {movies.results.map((movie, i) => (
//                 <Movie key={i} movie={movie} i={i} />
//             ))} 
//         </Grid>
//   )
// }

// export default MovieList

// import React from 'react';
// import { MoviesContainer } from './styles';
// import Movie from '../Movie/Movie';

const MovieList = ({ movies, limit, first }) => {
	const start = first ? 1 : 0;
	return (
		<div>
			<Grid className='moviesContainer'>
				{movies.results.slice(start, limit).map((movie, i) => (
					<Movie key={i} movie={movie} i={i} />
				))}
			</Grid>
		</div>
	);
};

export default MovieList;
