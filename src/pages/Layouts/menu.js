import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu()
{
    return(
        <div>
            <ul>
                <li>
                    <Link to="/" class="link">Home</Link>
                </li>
                <li>
                    <Link to="/contato" class="link">Contato</Link>
                </li>
            </ul>
        </div>
    );
};