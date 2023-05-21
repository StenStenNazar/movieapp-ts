import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {Layout, MoviesListCards} from "./components";
import InfoMovie from "./components/MovieInfo/InfoMovie";
import Header from "./components/Header/Header";
import './components/Header/Header.css'
import {useAppSelector} from "./hooks/redux.hooks";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";




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
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}
export default App;
