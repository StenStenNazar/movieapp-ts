import React, {FC} from 'react'
import {useLocation,useNavigate} from "react-router-dom";

import {imageURL} from "../../constants/urls";
import {useAppSelector} from "../../hooks/redux.hooks";
import CurGenres from "../CurGenres/CurGenres";


interface IProps {

}

const InfoMovie: FC<IProps> = () => {
    const navigate = useNavigate();
    const {genres} = useAppSelector(state => state.genreReducer);
    const location = useLocation();
    const {state} = location
    const {title, original_title, overview, release_date, poster_path, genre_ids} = state
    const curGenres = JSON.parse(JSON.stringify(genres))
    const genre = []

    for (const item of curGenres) {
        for (const obj of item) {
            if (genre_ids.includes(obj.id)) {
                genre.push(obj)
            }
        }
    }


    return (
        <div>
            <img src={`${imageURL}/${poster_path}`} alt={title}/>
            <h3>Жанр</h3>
            {genre.map(genre =><CurGenres key={genre.id} genre={genre}/>)}
            <hr/>
            <li> {title}</li>
            <li> {original_title}</li>
            <li>{overview}</li>
            <li>{release_date}</li>
        </div>
    );
};
export default InfoMovie