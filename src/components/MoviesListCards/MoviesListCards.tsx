import React, {FC, useEffect, Suspense} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {Pagination} from "../Pagination/Pagination";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoviesListCards.css'
import AllGenres from "../AllGenres/AllGenres";
import {movieActions} from "../../redux/store/slices/movieSlice";
const LazyComponent = React.lazy(() => import("../MovieNotFound/MovieNotFound"));

const MoviesListCards: FC = () => {
    const {movies, page, paginTrigger} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (movies.length === 0) {
            dispatch(movieActions.getPages({numberOfPage: page, genreId: ''}))
        }
    }, [dispatch, page])

    return (
        <div className={'main_wrapper'}>
            <AllGenres/>
            <Suspense>
                <LazyComponent/>
            </Suspense>
            <div className={'movie_list'}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
            {paginTrigger && <Pagination/>}
        </div>
    );
};
export {MoviesListCards};