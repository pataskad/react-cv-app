import React, { Component } from "react";
import editLogo from "../styles/reshot-icon-edit-Q9X5K68PDE.svg";

/*
 * Bio.js contains user information such as name, email, and phone number at a minimum
 *
 */

class Bio extends Component {
  constructor (props) {
    super(props);

    this.state = {
      editActive: false,
      bio: {
        name: "Change me!",
        email: "test@testing.com",
        phone: "608-123-8603"
      }
    };
  }

  toggleEditView = () => {
    if (this.state.editActive) {
      this.setState({
        editActive: false
      });
    } else {
      this.setState({
        editActive: true
      });
    }
  };

  submitHandler = () => {
    this.toggleEditView();

    this.setState({
      bio: {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phoneNumber").value
      }
    });
  };

  render () {
    const { bio, editActive } = this.state;

    if (editActive) {
      return (
        <div className="current-bio">
          <form onSubmit={this.submitHandler}>
            <label className="form-labels" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="form-inputs"
              onChange={this.handleChange}
              id="fullName"
              type="text"
              placeholder={bio.name}
              required
            />

            <label className="form-labels" htmlFor="email">
              Email
            </label>
            <input
              className="form-inputs"
              onChange={this.handleChange}
              id="email"
              type="email"
              placeholder={bio.email}
              required
            />

            <label className="form-labels" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="form-inputs"
              onChange={this.handleChange}
              id="phoneNumber"
              type="tel"
              placeholder={bio.phone}
              required
            />

            <br></br>
            <button className="formButtons" id="formSubmit" type="submit">
              Submit
            </button>
            <button
              className="formButtons"
              id="formCancel"
              onClick={this.toggleEditView}
            >
              Cancel
            </button>
          </form>

          <hr className="line-styling"></hr>
        </div>
      );
    } else {
      return (
        <div className="current-bio">
          <img
            id="edit-icon"
            onClick={this.toggleEditView}
            src={editLogo}
            alt="edit icon"
          ></img>
          <h3>{bio.name}</h3>
          <p>
            {bio.email} | {bio.phone}
          </p>
          <hr className="line-styling"></hr>
        </div>
      );
    }
  }
}

export default Bio;
