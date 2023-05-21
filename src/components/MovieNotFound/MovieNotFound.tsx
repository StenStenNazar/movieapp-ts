import {FC} from 'react'

import {useAppSelector} from "../../hooks/redux.hooks";
import './MovieNotFound.css'


const MovieNotFound: FC = () => {
    const {movies,error} = useAppSelector(state => state.movieReducer);

    return (
        <div className={'not_found_page'}>
            {movies.length === 0 &&
                <div>
                    <b>...</b>
                    {error && <p>вибачте за неполадки</p>}
                </div>
            }
        </div>
    );
};
export default MovieNotFound