import React, { Component } from 'react'
import tw_logo from '../images/twitter.svg'
import './styles/BadgesList.css'

export class BadgesList extends Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map( badge => {
                    return (
                        <li key={badge.id} className="Badge__section-name-list">
                            <img src={badge.avatarUrl} alt="Avatar" className="Badge__avatar-list"/>
                            <div>
                                {badge.firstName} {badge.lastName}
                                <br/>
                                <img src={tw_logo} alt="twitter" className="tw__logo"/>
                                <span className="twitter__blue_font">{badge.twitter}</span>
                                <br/>
                                {badge.jobTitle}
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList

