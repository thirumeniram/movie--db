import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import "./styles.css";  // Importing the CSS file
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../../Features/currentGenreOrCategory';
import { useTheme } from '@mui/material/styles';


const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const theme = useTheme(); 
    const location = useLocation();
    
    useEffect(() => {
        if (theme.palette.mode === 'light') {
            document.documentElement.classList.add('light-theme');
            document.documentElement.classList.remove('dark-theme');
        } else {
            document.documentElement.classList.add('dark-theme');
            document.documentElement.classList.remove('light-theme');
        }
    }, [theme.palette.mode]);
    
    
    console.log('search');
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('here',query)
            dispatch(searchMovie(query));
        }
    };

    if (location.pathname !== '/') return null;
  
    return (
        <div className='searchContainer'>  {/* Updated className */}
            <TextField
    onKeyPress={handleKeyPress}
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    variant="standard"
    InputProps={{
        className:'input',
        style: { color: 'white' },  // Make the input text white
        startAdornment: (
            <InputAdornment position='start'>
                <SearchIcon style={{ color: 'white' }} />  
            
            </InputAdornment>
        ),
    }}
/>

            
        </div>
    )
}

export default Search;
