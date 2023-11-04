import React from 'react';
import { Typography, Box } from '@mui/material';

import Movie from '../Movie/Movie';
import "./styles.css"

const RatedCards = ({ title, data }) => {
	return (
		<Box>
			<Typography variant='h5' gutterBottom>
				{title}
			</Typography>
			<Box className='Container'>
				{data?.results.map((movie, i) => (
					<Movie key={movie.id} movie={movie} i={i} />
				))}
			</Box>
		</Box>
	);
};

export default RatedCards;
