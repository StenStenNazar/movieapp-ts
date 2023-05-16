import React, {FC, useEffect} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";
import {Pagination} from "../Pagination/Pagination";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoviesListCards.css'






interface IProps {

}

const MoviesListCards: FC<IProps> = () => {
    const {movies,page,loading} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    console.log(movies)

    useEffect(() => {
        dispatch(movieActions.getPages({numberOfPage:page}))
    }, [dispatch,page])

    console.log(loading)

    return (
        <div>
            <div>{loading && <h1>loading...</h1>}</div>
            <div className={'movie_list'}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            {movies && <Pagination/>}
        </div>
    );
};
export {MoviesListCards};