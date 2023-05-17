import React, {FC, useState} from 'react'

import {IGenre} from "../../interfaces/genre.interface";
import './Genre.css'
import {ISetState} from "../../types/setState.type";
import {NavLink} from "react-router-dom";

interface IProps {
    genre: IGenre
    setId:ISetState<number>
}


const Genre: FC<IProps> = ({genre,setId}) => {
    const {name, id} = genre


    return (
        <div className={'genre'}>
            <NavLink  className={'one_genre'} to={`${name}`.toLowerCase()}><div  onClick={()=>setId(id)}>{name}</div></NavLink>
        </div>
    );
};
export default Genre