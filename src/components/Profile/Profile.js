import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { userSelector } from '../../Features/auth';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import RatedCards from '../RatedCards/RatedCards';
import { useGetListQuery } from '../../services/TMDB';

export default function  Profile () {
  const { user } = useSelector(userSelector);

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
	listName: 'favorite/movies',
	accountId: user.id,
	sessionId: localStorage.getItem('session_id'),
	page: 1,
});
const { data: watchlistMovies, refetch: refetchWatchlisted } =
	useGetListQuery({
		listName: 'watchlist/movies',
		accountId: user.id,
		sessionId: localStorage.getItem('session_id'),
		page: 1,
	});

useEffect(() => {
refetchFavorites();
	refetchWatchlisted();
}, [refetchFavorites, refetchWatchlisted]);

  const logOut = () => {localStorage.clear();
     window.location.href = '/';
	};

  console.log(user);

  return (
    
    <Box>
			<Box display={'flex'} justifyContent='space-between'>
				<Typography variant='h4' gutterBottom>
					My Profile
				</Typography>
				<Button color='inherit' onClick={logOut}>
					Logout &nbsp; <ExitToApp />
				</Button>
			</Box>
			{!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
				<Typography variant='h5'>
					Add favorites or watchlist some movies to see them here!
				</Typography>
			) : (
				<Box>
					<RatedCards title='Favorite Movies' data={favoriteMovies} />
					<RatedCards title='Watchlist' data={watchlistMovies} />
				</Box>
			)}
		</Box>
  )
}
