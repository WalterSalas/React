import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {

    render () {
        return (
        <div className="Badge" >

            <div className="Badge__header">
                <img src={confLogo} alt="Logo"/>
            </div>

            <div className="Badge__section-name">
                <img 
                className="Badge__avatar"
                src="https://secure.gravatar.com/avatar/e163c2bf9f1a86e2567e61cbb47e8a21" 
                alt="Avatar"/>
                <h1>Walter <br/> Salas</h1>
            </div>

            <div className="Badge__section-info">
                <h3>
                    Frontend Develoer
                </h3>
                <div>
                    @soywaltersalas
                </div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>

        </div>
        );
    }
}

export default Badge;