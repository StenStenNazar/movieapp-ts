import React, {FC, useEffect} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";
import {Pagination} from "../Pagination/Pagination";
import {Movie} from "../Movie/Movie";





interface IProps {

}

const Movies: FC<IProps> = () => {
    const {movies,page} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getPages({numberOfPage:page}))
    }, [dispatch,page])

    return (
        <div>
            <Pagination/>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};
export {Movies}