import { useContext, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
// import { ColorModeContext } from '../utils/ToggleColorMode';
import { ColorModeContext } from '../utils/DarkMode';
import { useDispatch,useSelector } from 'react-redux';
// import { searchMovie, selectCategory } from '../features/categorySlice';
import { searchMovie,selectGenreOrCategory } from '../Features/currentGenreOrCategory';
import { userSelector } from '../Features/auth';
import { fetchToken } from '../utils';

const useAlan = () => {

	const { setMode } = useContext(ColorModeContext);
	const  {isAuth,user} =useSelector(userSelector);
	 console.log(user)
	 console.log(isAuth)
	const dispatch = useDispatch();
	useEffect(() => {
		alanBtn({
			key: '0c437de54600d825b8728b01fddb282f2e956eca572e1d8b807a3e2338fdd0dc/stage',
			onCommand: ({ command, mode, genres, genreOrCategory, query}) => {
				if (command === 'chooseGenre') {
					const foundGenre = genres.find(
						(g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
					);

					if (foundGenre) {
						// window.location.href = '/';
						dispatch(selectGenreOrCategory(foundGenre.id));
					} else {
						const category = genreOrCategory.startsWith('top')
							? 'top_rated'
							: genreOrCategory;
						// window.location.href = '/';
						dispatch(selectGenreOrCategory(category));
					}
				} else if (command === 'changeMode') {
					if (mode === 'light') {
						setMode('light');
					} else {
						setMode('dark');
					}
				} else if (command === 'login') {
					fetchToken();
				} else if (command === 'logout') {
					localStorage.clear();
					window.location.href = '/';
				} else if (command === 'search') {
					dispatch(searchMovie(query));
				}
				

			},
		});
	}, [dispatch, setMode]);
};

export default useAlan;
