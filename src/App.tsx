import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {Layout, Movies} from "./components";





function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Movies/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
