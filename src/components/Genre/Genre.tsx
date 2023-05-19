import React, {FC} from 'react'

import {IGenre} from "../../interfaces/genre.interface";
import './Genre.css'
import {NavLink} from "react-router-dom";
import {movieActions} from "../../redux/store/slices/movieSlice";
import {useAppDispatch} from "../../hooks/redux.hooks";

interface IProps {
    genre: IGenre

}


const Genre: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const {name, id} = genre

    const searchGenre = (id: number) => {
        dispatch(movieActions.getMovieGenres({idOfGenre: id}))
        dispatch(movieActions.setIdOfGenre({id}))
    }


    return (
        <div className={'genre'}>
            <NavLink  className={'one_genre'} to={`${name}`.toLowerCase()}><div onClick={()=>searchGenre(id)}>{name}</div></NavLink>
        </div>
    );
};
export default Genre