import React, {FC, useEffect,Suspense } from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {Pagination} from "../Pagination/Pagination";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoviesListCards.css'
import AllGenres from "../AllGenres/AllGenres";
import SearchMovieForm from "../SearchMovieForm/SearchMovieForm";
import {movieActions} from "../../redux/store/slices/movieSlice";
const LazyComponent = React.lazy(() => import("../MovieNotFound/MovieNotFound"));

interface IProps {

}

const MoviesListCards: FC<IProps> = () => {
    const {movies, page, loading, paginTrigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (movies.length === 0) {
            dispatch(movieActions.getPages({numberOfPage: page, genreId:''}))
        }
    }, [dispatch,page])

    return (
        <div className={'main_wrapper'}>
            <SearchMovieForm/>
            <div>{loading && <h1>loading...</h1>}</div>
            <AllGenres/>
            <Suspense>
                <LazyComponent />
            </Suspense>
            <div className={'movie_list'}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            {paginTrigger && <Pagination/>}
        </div>
    );
};
export {MoviesListCards};