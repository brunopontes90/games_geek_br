import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Xbox from './pages/Xbox';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato/index';
import Playstation from './pages/Playstation/index';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={'xbox'} element={<Xbox />} />
        <Route path={'sobre-nos'} element={<Sobre />}/>
        <Route path={'contato'} element={<Contato />} />
        <Route path={'playstation'} element={<Playstation/>} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);