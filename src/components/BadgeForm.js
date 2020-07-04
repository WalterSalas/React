import React, { Component } from 'react'

export class BadgeForm extends Component {

    // state = {
    // };

    // Este handleChange lo saque a la pagina de BadgeNew para recibir el State, y esto se lo paso por medio de props
    // handleChange = e => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // });

    //     this.setState({
    //         [e.target.name]: e.target.value,

    //     })
    // }

    handleClick = e => {
        console.log("click");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Sue jue!!");
        console.log(this.state);
    };


    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                    </div>

                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm
