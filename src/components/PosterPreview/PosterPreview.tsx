import {FC} from 'react'

import {imageURL} from "../../constants/urls";
import './PosterPreview.css'
import {imagePlaceholder} from '../../assets/imagePlaceholder'
import {IMovie} from "../../interfaces/movie.interface";

interface IProps {
    poster_path: string
    original_title: string
}

const PosterPreview: FC<IProps> = ({poster_path, original_title}) => {
    const img = poster_path ? `${imageURL}/${poster_path}` : imagePlaceholder
    return (
        <div>
            <img className={'img'} src={img} alt={original_title}/>
        </div>
    );
};
export {PosterPreview}