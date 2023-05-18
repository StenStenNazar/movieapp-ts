import {FC} from 'react'
import {useAppSelector} from "../../hooks/redux.hooks";


const MovieNotFound: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    return (
        <div>
            {movies.length===0 && <h2>Нажаль фільм не знайдено...</h2>}
        </div>
    );
};
export default MovieNotFound