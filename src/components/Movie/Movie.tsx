import {FC} from 'react'

import {IMovie} from "../../interfaces/movie.interface";
import {PosterPreview} from "../PosterPreview/PosterPreview";




interface IProps{
movie:IMovie
}

const Movie: FC<IProps> = ({movie}) =>{
    const{poster_path,title,original_title}=movie
    return(
       <div>
           <div>{title}</div>
           <PosterPreview poster_path={poster_path} original_title={original_title}/>
       </div>
    );
};
export {Movie}