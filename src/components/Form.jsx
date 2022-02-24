import React, { Component } from "react";
import Employees from "./Employees";

import "./Form.css";

export class Form extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    users: [],
    showForm: true,
  };

  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onsubmit = (e) => {
    e.preventDefault();
    this.setState({
      users: [
        ...this.state.users,
        {
          name: this.state.name,
          department: this.state.department,
          rating: this.state.rating,
        },
      ],
      name: "",
      department: "",
      rating: "",
      showForm: !this.state.showForm,
    });
  };

  goBack = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    return (
      <>
        <div className="page">
          {this.state.showForm && (
            <>
              <div className="employee-form">
                <h1>employee feeedback form</h1>
                <form onSubmit={this.onsubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.onchange}
                      id="name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department :</label>
                    <input
                      required
                      name="department"
                      value={this.state.department}
                      onChange={this.onchange}
                      type="text"
                      id="department"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rating">Rating :</label>
                    <input
                      required
                      name="rating"
                      value={this.state.rating}
                      onChange={this.onchange}
                      type="number"
                      id="rating"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="form-control">
                    submit
                  </button>
                </form>
              </div>
            </>
          )}
          {!this.state.showForm && (
            <Employees employess={this.state.users} backFunc={this.goBack} />
          )}
        </div>
      </>
    );
  }
}

export default Form;
