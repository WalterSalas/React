import React from 'react'

import  './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

export class BadgeNew extends React.Component {

    state={
        form: {
            firstName: '',
            lasrName: '',
            jobTitle: '',
            twitter: '',
            email: '',
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            avatarUrl="https://secure.gravatar.com/avatar/e163c2bf9f1a86e2567e61cbb47e8a21"
                            jobTitle={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew
