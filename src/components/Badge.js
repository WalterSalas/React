import React from 'react'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {

    render () {
        return <div>
            <div>
                <img src={confLogo} alt="Logo"/>
            </div>
            <div>
                <img src="https://secure.gravatar.com/avatar/e163c2bf9f1a86e2567e61cbb47e8a21" alt="Avatar"/>
                <h1>Walter <br/> Salas</h1>
            </div>

            <div>
                <p>
                    Frontend Develoer
                </p>
                <p>
                    @soywaltersalas
                </p>
            </div>

            <div>
                #platziconf
            </div>

        </div>;
    }

}

export default Badge;