import React from 'react';
import './style.css'

function devItem({ e }) {
    return (
        <li className="dev-item">
            <header>
                <img src={e.avatar_url} alt="avatar"/>
                <div className="user-info">
                    <strong>{e.name}</strong>
                    <span>{e.techs}</span>
                </div>
            </header>
            <p>{e.bio}</p>
            <a href={`https://github.com/${e.github_username}`}>Acessar Perfil do Git-Hub</a>
        </li>
    )
}

export default devItem
