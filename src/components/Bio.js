import React, { Component } from "react";
import editLogo from "../styles/reshot-icon-edit-Q9X5K68PDE.svg";

/* 
* Bio.js contains user information such as name, email, and phone number at a minimum
* 
 */

class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: {
              name: "Change me!",
              email: "test@testing.com",
              phone: "6081238603",
            },
          };
    }

    render() {
        const { bio } = this.state;
        let editActive = false;

        if (editActive) {
            // return form here
            // form must include cancel and submit options
            // on submit or cancel, toggle editActive

            /* 
            <form onSubmit={this.submitHandler}>
            <label className="form-labels" htmlFor="fullName">Full Name</label>
            <input className="form-inputs" onChange={this.handleChange} id="fullName" type="text" value={bio.name}/>

            <label className="form-labels" htmlFor="email">Email</label>
            <input className="form-inputs" onChange={this.handleChange} id="email" type="email" value={bio.email}/>

            <label className="form-labels" htmlFor="phoneNumber">Phone Number</label>
            <input className="form-inputs" onChange={this.handleChange} id="phoneNumber" type="tel" value={bio.phone}/>
            </form>
            <button type="submit">Submit</button> */
        } else {
            // include edit icon to toggle editActive
            return (
                <div className="current-bio">
                    <img id="edit-icon" src={editLogo} alt="edit icon"></img>
                    <h3>{bio.name}</h3>
                    <p>{bio.email} | {bio.phone}</p>
                </div>
            );
        }
    }
}

/* const Bio = (props) => {
    const { bio } = props;
    let editActive = false;

    if (editActive) {
        // return form here
        // form must include cancel and submit options
        // on submit or cancel, toggle editActive
    } else {
        // include edit icon to toggle editActive
        return (
            <div className="current-bio">
                <h3>{bio.name}</h3>
                <p>{bio.email} | {bio.phone}</p>
            </div>
        );
    }
}; */

export default Bio;