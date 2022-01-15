import React from 'react';
import "../../css/menu.css";
import { Link } from 'react-router-dom';

export default function Menu()
{
    return(
        <div>
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
                    <Link to="/playstation">
                        <i class="fab fa-playstation" id='play'></i>
                    </Link>
                </li>
                <li>
                    <Link to="/xbox">
                        <i class="fab fa-xbox" id='xbox'></i>
                    </Link>
                </li>
                <li>
                    <Link to="/steam">
                        <i class="fab fa-steam" id='steam'></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
};