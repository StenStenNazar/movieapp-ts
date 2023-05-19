import React, {FC, useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {genreActions} from "../../redux/store/slices/genreSlice";
import {imagePlaceholder} from "../../assets/imagePlaceholder";
import { imageUrlOriginal} from "../../constants/urls";
import CurGenres from "../CurGenres/CurGenres";
import Videos from "../Videos/Videos";
import './InfoMovie.css'
import StarsRating from "../StarsRating/StarsRating ";


interface IProps {

}

const InfoMovie: FC<IProps> = () => {

    const navigate = useNavigate();
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const {state} = location
    const {title, overview, release_date, poster_path, genre_ids,id} = state
    const img = poster_path ? `${imageUrlOriginal}/${poster_path}` : imagePlaceholder
    const genre = []
    for (const item of genres) {
            if (genre_ids.includes(item.id)) {
                 genre.push(item)
            }
    }

    useEffect(() => {
            dispatch(genreActions.getGenres())
    }, [dispatch])

    return (
        <div>
            <button onClick={()=> navigate('/movies')}>назад</button>
             <Videos id={id}/>
            <img className={'img_info'}  src={img} alt={title}/>
            {genre.map(genre =><CurGenres key={genre.id} genre={genre}/>)}
            <hr/>
            {title && <li> {title}</li> }
            {overview && <li> {overview}</li> }
            {release_date && <li> {release_date}</li> }
        </div>
    );
};
export default InfoMovie