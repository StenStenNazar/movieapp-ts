import {FC} from 'react'
import {IGenre} from "../../interfaces/genre.interface";
import {NavLink} from "react-router-dom";

import {movieActions} from "../../redux/store/slices/movieSlice";
import {useAppDispatch} from "../../hooks/redux.hooks";


interface IProps {
    genre: IGenre
}

const CurGenres: FC<IProps> = ({genre}) => {
    const {name, id} = genre
    const dispatch = useAppDispatch();

    const getGenre = (id: number) => {
        dispatch(movieActions.getMovieGenres({idOfGenre: id}))
    }

    return (
        <div>
            <NavLink to={`/movies/${name}`.toLowerCase()}>
                <div onClick={() => getGenre(id)}>{name}</div>
            </NavLink>
        </div>
    );
};
export default CurGenres