import React, {FC, useEffect} from 'react'
import {useLocation} from "react-router-dom";

import { imageUrlOriginal} from "../../constants/urls";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import CurGenres from "../CurGenres/CurGenres";
import {imagePlaceholder} from "../../assets/imagePlaceholder";
import './InfoMovie.css'
import {genreActions} from "../../redux/store/slices/genreSlice";





interface IProps {

}

const InfoMovie: FC<IProps> = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const {state} = location
    const {title, overview, release_date, poster_path, genre_ids} = state
    const img = poster_path ? `${imageUrlOriginal}/${poster_path}` : imagePlaceholder
    const genre = []

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

    const curGenres = JSON.parse(JSON.stringify(genres))
    for (const item of curGenres) {
        for (const obj of item) {
            if (genre_ids.includes(obj.id)) {
                 genre.push(obj)
            }
        }
    }

    return (
        <div>
            <img className={'img_info'}  src={img} alt={title}/>
            <h3>Жанр</h3>
            {genre.map(genre =><CurGenres key={genre.id} genre={genre}/>)}
            <hr/>
            {title && <li> {title}</li> }
            {overview && <li> {overview}</li> }
            {release_date && <li> {release_date}</li> }
        </div>
    );
};
export default InfoMovie