import React, {FC, useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {genreActions} from "../../redux/store/slices/genreSlice";
import {imagePlaceholder} from "../../assets/imagePlaceholder";
import {imageUrlOriginal} from "../../constants/urls";
import CurGenres from "../CurGenres/CurGenres";
import Videos from "../Videos/Videos";
import './InfoMovie.css'
import SearchMovieForm from "../SearchMovieForm/SearchMovieForm";

const InfoMovie: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const {state} = location
    const {title, overview, release_date, poster_path, genre_ids, id} = state
    const img = poster_path ? `${imageUrlOriginal}/${poster_path}` : imagePlaceholder
    const genre = []
    for (const item of genres) {
        if (genre_ids.includes(item.id)) {
            genre.push(item)
        }
    }

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch,movies])

    return (
        <div className={'main_wrapper_info-movie'}>
            <div className={'info_wrapper'}>
                <img className={'img_info'} src={img} alt={title}/>
                <div className={'genre_overview_wrapper'}>
                    <div className={'overview'}>
                        {title && <h2> {title}</h2>}
                        {overview && <div> {overview}</div>}
                        {release_date && <div>({release_date})</div>}
                    </div>
                    <div className={'genre_name'}>
                        {genre.map(genre => <CurGenres key={genre.id} genre={genre}/>)}
                    </div>
                </div>
            </div>
            <Videos id={id}/>
        </div>
    );
};
export default InfoMovie