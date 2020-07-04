import React from 'react'

import  './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

export class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firstName="Walter" 
                            lastName="Salas" 
                            avatarUrl="https://secure.gravatar.com/avatar/e163c2bf9f1a86e2567e61cbb47e8a21" 
                            jobTitle="FrontEnd Developer"
                            twitter="soywaltersalas"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew
