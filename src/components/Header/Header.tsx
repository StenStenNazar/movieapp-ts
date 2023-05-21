import React, {FC} from 'react'

import './Header.css'
import '../../main.css'
import Toggle from "../Toggle/Toggle";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {useNavigate} from "react-router-dom";
import {movieActions} from "../../redux/store/slices/movieSlice";


const Header: FC = () =>{
    const {isDark} = useAppSelector(state => state.switchReducer);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const goHome =()=>{
        dispatch(movieActions.getPages({numberOfPage: 1, genreId:''}))
        navigate('/')
        dispatch(movieActions.setHomeTotalPage(10020))
    }

return(
       <div className={`header ${isDark ? 'dark' : 'light'}`}>
           <div className={'header_title'}>
               <h1 onClick={()=>navigate('/')}>OWDM</h1>
               <div className={'header_nav'} onClick={()=>goHome()}>movies</div>
           </div>
           <div className={'icon_button-mode_wrapper'}>
               <div>
                   <Toggle/>
               </div>
               <div className={'user'}></div>
           </div>
       </div>
    );
};
export default Header