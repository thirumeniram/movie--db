import React from 'react';
import { Typography, Button, useTheme } from '@mui/material';
import "./styles.css"

const Pagination = ({ currentPage, totalPages, setPage }) => {

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const handlePrev = () => {
        if (currentPage !== 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage !== totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    if (totalPages === 0) return null;

    return (
        <div className={`container ${isDarkMode ? 'dark-mode-text' : ''}`}>
            <Button
                className='btn'
                onClick={handlePrev}
                variant='contained'
                color='primary'
                type='button'
            >
                Prev
            </Button>
            <Typography className='pagenum' variant='h4'>{currentPage}</Typography>
            <Button
                className='btn'
                onClick={handleNext}
                variant='contained'
                color='primary'
                type='button'
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;

