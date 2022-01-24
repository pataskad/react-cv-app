import React, { Component } from "react";
import editLogo from "../styles/reshot-icon-edit-Q9X5K68PDE.svg";
import { format } from "date-fns";

/*
* Experience.js contains practical work experience
* Set up experience to be one component for each position?
*
 */

class Experience extends Component {
  constructor (props) {
    super(props);

    this.state = {
      editActive: false,
      experience: {
        title: "Software Engineer",
        startDate: "May 2018",
        endDate: "July 2020",
        description: "Did a little of this and a little of that"
      }
    };
  };

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
      experience: {
        title: document.getElementById("title").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        description: document.getElementById("description").value
      }
    });
  };

  render () {
    const { editActive, experience } = this.state;
    if (editActive) {
      return (
        <>
          <h2 id="experience-title">Work Experience</h2>
          <section className="current-bio">
            <form onSubmit={this.submitHandler}>
              <label className="form-labels" htmlFor="title">
                Position Title
              </label>
              <input
                className="form-inputs"
                id="title"
                type="text"
                placeholder={experience.title}
                required />

              <label className="form-labels" htmlFor="startDate">
                Start Date
              </label>
              <input
                className="form-inputs"
                id="startDate"
                type="month"
                required />

              <label className="form-labels" htmlFor="endDate">
                End Date (Enter current date if still employed)
              </label>
              <input
                className="form-inputs"
                id="endDate"
                type="month"
                required />

              <label className="form-labels" htmlFor="description">
                  Please describe position responsibilities
              </label>
              <textarea
                className="form-inputs"
                id="description"
                type="text"
                rows="8"
                cols="50"
                maxLength="1000"
                placeholder={experience.description}
                required />

              <br></br>
              <button className="formButtons" id="formSubmit" type="submit">
                Submit
              </button>
              <button
                className="formButtons"
                id="formCancel"
                onClick={this.toggleEditView}>
                Cancel
              </button>
            </form>

            <hr className="line-styling"></hr>
          </section></>
      );
    } else {
      return (
        <><>
          <h2 id="experience-title">Work Experience</h2>
        </>
        <section className="job-experience">
          <img
            id="edit-icon"
            onClick={this.toggleEditView}
            src={editLogo}
            alt="edit icon"
          ></img>

          <h3>{experience.title}</h3>
          <p className="date-styling">
            {format(new Date(experience.startDate), "LLLL yyyy ")}
              -{format(new Date(experience.endDate), " LLLL yyyy")}
          </p>
          <p>{experience.description}</p>

          <hr className="line-styling"></hr>
        </section>
        </>
      );
    }
  }
}

export default Experience;
