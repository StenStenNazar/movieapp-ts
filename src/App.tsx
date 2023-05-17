import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {Layout, MoviesListCards} from "./components";
import InfoMovie from "./components/MovieInfo/InfoMovie";






function App() {
    return (
        <div className="App">
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
