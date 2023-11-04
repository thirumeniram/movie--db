import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory= createSlice({
	name: 'genreOrCategory',
	initialState: {
		genreIdOrCategoryName: '',
		page: 1,
		searchQuery: '',
	},
	reducers: {
		selectGenreOrCategory: (state, action) => {
			state.genreIdOrCategoryName = action.payload;
			state.searchQuery = '';
            // console.log(action.payload);
		},
		searchMovie: (state, action) => {
			console.log('here 2',action.payload)
			state.searchQuery = action.payload;
		},
	},
});

export const { selectGenreOrCategory,searchMovie} = genreOrCategory.actions;

export default genreOrCategory.reducer;
