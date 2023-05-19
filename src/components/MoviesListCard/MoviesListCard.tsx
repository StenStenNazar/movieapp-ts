import React, {FC, useEffect} from 'react'
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces/movie.interface";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import './MoviesListCard.css'
import StarsRating from "../StarsRating/StarsRating ";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";


interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {poster_path, title, original_title, vote_average, vote_count, id} = movie
    const dispatch = useAppDispatch();

    return (
        <div onClick={()=> dispatch(movieActions.setCurMovie({movie}))} className={'poster_title_wrapper'}>
            <Link  to={'/movieInfo'}  state={movie}>
            <PosterPreview poster_path={poster_path} original_title={original_title}/>
            <div className={'poster_title'}>{title}</div>
            </Link>
            <StarsRating key={id} vote_average={vote_average} vote_count={vote_count}/>
        </div>
    );
};
export {MoviesListCard};