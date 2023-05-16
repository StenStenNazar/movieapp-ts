import {FC} from 'react'
import {FaStar, FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai";

import './StarsRating .css'

interface IProps {
    vote_count: number
    vote_average: number
}

const StarsRating: FC<IProps> = ({vote_count, vote_average}) => {
    console.log(vote_average)
    const ratingStar = Array.from({length: 9}, (elem, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                    {vote_average >= index + 1 ? (<FaStar className='icon'/>)
                    : vote_average >= number ? (<FaStarHalfAlt className='icon'/>)
                    : (<AiOutlineStar className='icon'/>)}
             </span>

        );
    });
    return (
        <div className={'icon_style'}>
           <div> {ratingStar}</div>
            <div>({vote_count}  reviews)</div>
        </div>

    )
};
export default StarsRating