import React, {FC} from 'react'
import {Outlet} from "react-router-dom";

import SearchMovieForm from "../SearchMovieForm/SearchMovieForm";
import './Layout.css'
import {useAppSelector} from "../../hooks/redux.hooks";



interface IProps{

}

const Layout: FC<IProps> = () =>{
    const {isDark} = useAppSelector(state => state.switchReducer);
return(
    <div className={`layout_wrapper ${isDark ? 'dark' : 'light'}`}>
        <div className={'search-movie_wrapper'}>
            <SearchMovieForm/>
        </div>
        <Outlet/>
    </div>

    );
};
export {Layout}