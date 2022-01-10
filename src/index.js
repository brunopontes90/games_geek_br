import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato/index';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={'sobre-nos'} element={<Sobre />}/>
        <Route path={'contato'} exact element={<Contato />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);