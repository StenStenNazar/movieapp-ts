import {FC} from 'react'

import {imageURL} from "../../constants/urls";
import './PosterPreview.css'

interface IProps{
    poster_path:string
    original_title: string
}

const PosterPreview: FC<IProps> = ({poster_path,original_title}) =>{
return(
       <div>
           <img className={'img'} src={`${imageURL}/${poster_path}`} alt={original_title}/>
       </div>
    );
};
export {PosterPreview}