import React, {FC, useEffect} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {Pagination} from "../Pagination/Pagination";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoviesListCards.css'
import AllGenres from "../AllGenres/AllGenres";
import SearchMovieForm from "../SearchMovieForm/SearchMovieForm";
import MovieNotFound from "../MovieNotFound/MovieNotFound";
import {movieActions} from "../../redux/store/slices/movieSlice";



interface IProps {

}

const MoviesListCards: FC<IProps> = () => {
    const {movies, page, loading, trigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    console.log(movies)
    console.log(trigger)

    useEffect(() => {
        if (movies.length === 0) {
            dispatch(movieActions.getPages({numberOfPage: page, genreId: ''}))
        }
    }, [dispatch, page, movies.length])

    return (
        <div className={'main_wrapper'}>
            <SearchMovieForm/>
            <div>{loading && <h1>loading...</h1>}</div>
            <AllGenres/>
            <MovieNotFound/>
            <div className={'movie_list'}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            {trigger && <Pagination/>}
        </div>
    );
};
export {MoviesListCards};