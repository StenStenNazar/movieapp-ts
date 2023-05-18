import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {Layout, MoviesListCards} from "./components";
import InfoMovie from "./components/MovieInfo/InfoMovie";
import Header from "./components/Header/Header";
import './components/Header/Header.css'
import Toggle from "./components/Toggle/Toggle";
import {useAppSelector} from "./hooks/redux.hooks";



function App() {
    const {isDark} = useAppSelector(state => state.switchReducer);

    return (
        <div className={`App ${isDark ? 'dark' : 'light'}`}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesListCards/>}>
                        <Route path={':genre_name'} element={<MoviesListCards/>}/>
                    </Route>
                    <Route path={'movieInfo'} element={<InfoMovie/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
