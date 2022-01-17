import React from 'react';
import "../../css/menu.css";
import { Link } from 'react-router-dom';

export default function Menu()
{
    return(
        <div>
            <h1 id='titulo'>Games Geek</h1>
            <div id="img"></div>
            <ul>
                <li>
                    <Link to="/" class="link">Home</Link>
                </li>
                <li>
                    <Link to="/contato" class="link">Contato</Link>
                </li>
                <li>
                    <Link to="/sobre-nos" class="link">Sobre Nós</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='https://blog.br.playstation.com/' target="_blank">
                        <i class="fab fa-playstation" id='play'></i>
                    </a>
                </li>
                <li>
                    <a href='https://windowsclub.com.br/category/xbox-noticias/' target="_blank">
                        <i class="fab fa-xbox" id='xbox'></i>
                    </a>
                </li>
                <li>
                    <a href='https://store.steampowered.com/news/collection/steam/' target="_blank">
                        <i class="fab fa-steam" id='steam'></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.nintendo.pt/Noticias/Noticias-e-atualizacoes-11145.html' target="_blank">
                    <i class="fas fa-gamepad" id='nintendo'></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};