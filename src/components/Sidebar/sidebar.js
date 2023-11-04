//  import React,  { useEffect, useState } from 'react';
// import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from '@mui/material'
// import { Link} from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import { useGetGenresQuery } from '../../services/TMDB';
// import { useDispatch,useSelector } from 'react-redux';
// import genreIcons from "../../assets/genres"
// import { selectGenreOrCategory } from '../../Features/currentGenreOrCategory';
// import './styles.css';

// const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
// const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
// const categories = [
// 	{ label: 'Popular', value: 'popular' },
// 	{ label: 'Top Rated', value: 'top_rated' },
// 	{ label: 'Upcoming', value: 'upcoming' },
// ];

// const Sidebar = ({setMobileOpen}) => {
//     const {genreIdOrCategory} = useSelector((state) => state.currentGenreOrCategory);
//     const theme = useTheme();
    
//     const isDarkMode = theme.palette.mode === 'dark';
    
//     const dispatch = useDispatch();
//     const {data, isFetching} = useGetGenresQuery();

//     useEffect(() => {
// 		setMobileOpen(false);
// 	}, [genreIdOrCategory]);

	

//     return (
//         <>
//             <Link to='/' className="imageLink">
//                 <img
//                     className="image"
//                     src={isDarkMode ? blueLogo : redLogo}
//                     alt="moviezoneLogo"
//                 />
//             </Link>
//             <Divider />
//             <List>
//                 <ListSubheader className={isDarkMode ? 'dark-mode-text' : ''}>Categories</ListSubheader>
//                 {categories.map(({ label, value }) => (
//                     <Link key={value} className={`links ${isDarkMode ? 'dark-mode-text' : ''}`} to="/">
//                         <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} >
//                             <ListItemIcon>
//                                 <img 
//                                     src={genreIcons[label.toLowerCase()]} 
//                                     height={30} 
//                                     className={isDarkMode ? 'dark-mode-icon' : ''}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText primary={label} />
//                         </ListItem>
//                     </Link>
//                 ))}
//             </List>
//             <Divider />
//             <List>
//                 <ListSubheader className={isDarkMode ? 'dark-mode-text' : ''}>Genres</ListSubheader>
//                 {isFetching ? (
//                     <Box display={'flex'} justifyContent={'center'}>
//                         <CircularProgress />
//                     </Box>
//                 ) : (
//                     data.genres.map(({ name, id })=> (
//                         <Link key={name} className={`links ${isDarkMode ? 'dark-mode-text' : ''}`} to="/">
//                             <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} >
//                                 <ListItemIcon>
//                                     <img 
//                                         src={genreIcons[name.toLowerCase()]} 
//                                         height={30} 
//                                         className={isDarkMode ? 'dark-mode-icon' : ''}
//                                     />
//                                 </ListItemIcon>
//                                 <ListItemText primary={name} />
//                             </ListItem>
//                         </Link>
//                     ))
//                 )}
//             </List>
//         </>
//     );
// }

// export default Sidebar;
import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  ListSubheader ,
  CircularProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import genreIcons from '../../assets/genres';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../Features/currentGenreOrCategory';
import './styles.css';

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategory } = useSelector((state) => state.currentGenreOrCategory);
  const theme = useTheme();
  
  const isDarkMode = theme.palette.mode === 'dark';
  
  const dispatch = useDispatch();
  const { data, isFetching } = useGetGenresQuery();
  
  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategory, setMobileOpen]);

  const handleGenreClick = (value) => {
    dispatch(selectGenreOrCategory(value));
    setMobileOpen(false); // This will close the sidebar
  };

  return (
    <>
      <Link to='/' className="imageLink">
        <img
          className="image"
          src={isDarkMode ? blueLogo : redLogo}
          alt="moviezoneLogo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader className={isDarkMode ? 'dark-mode-text' : ''}>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={`links ${isDarkMode ? 'dark-mode-text' : ''}`} to="/">
            <ListItem button onClick={() => handleGenreClick(value)}>
              <ListItemIcon>
                <img 
                  src={genreIcons[label.toLowerCase()]} 
                  height={30} 
                  className={isDarkMode ? 'dark-mode-icon' : ''}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader className={isDarkMode ? 'dark-mode-text' : ''}>Genres</ListSubheader>
        {isFetching ? (
          <Box display={'flex'} justifyContent={'center'}>
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={`links ${isDarkMode ? 'dark-mode-text' : ''}`} to="/">
              <ListItem button onClick={() => handleGenreClick(id)}>
                <ListItemIcon>
                  <img 
                    src={genreIcons[name.toLowerCase()]} 
                    height={30} 
                    className={isDarkMode ? 'dark-mode-icon' : ''}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
}

export default Sidebar;
