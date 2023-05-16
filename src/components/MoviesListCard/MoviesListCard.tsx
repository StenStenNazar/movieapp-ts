import React, {FC} from 'react'

import {IMovie} from "../../interfaces/movie.interface";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import './MoviesListCard.css'
import StarsRating from "../StarsRating/StarsRating ";



interface IProps{
movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) =>{
    const{poster_path,title,original_title,vote_average,vote_count,id}=movie

    return(
       <div className={'poster_title_wrapper'}>
           <PosterPreview poster_path={poster_path} original_title={original_title}/>
           <div className={'poster_title'}>{title}</div>
           <StarsRating key={id} vote_average={vote_average} vote_count={vote_count}  />
       </div>
    );
};
export {MoviesListCard};