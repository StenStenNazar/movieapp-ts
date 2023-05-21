import {FC} from 'react'

import {useAppSelector} from "../../hooks/redux.hooks";
import './MovieNotFound.css'


const MovieNotFound: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    return (
        <div className={'not_found_page'}>
            {movies.length ===0 &&
                <h2>Нажаль фільм не знайдено...</h2>
            }
        </div>
    );
};
export default MovieNotFound