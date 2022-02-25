import React, { Component } from "react";
import Employee from "./Employee";

export class Form extends Component {
  state = {
    name: "",
    dept: "",
    rating: "",
    users: [],
    showForm: true,
  };

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      users: [
        ...this.state.users,
        {
          name: this.state.name,
          dept: this.state.dept,
          rating: this.state.rating,
        },
      ],
      name: "",
      dept: "",
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
    let { name, dept, rating, users, showForm } = this.state;

    return (
      <>
        <div className="container">
          {showForm ? (
            <div className="row mt-5">
              <div className="col-md-5 m-auto">
                <div className="card">
                  <div className="card-header bg-dark text-white">
                    <h2>EMPLOYEE FEEDBACK FORM</h2>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group mb-3">
                        <label className="h3">Name :</label>
                        <input
                          required
                          name="name"
                          value={name}
                          onChange={this.handleForm}
                          type="text"
                          className="form-control"
                          placeholder="Employee Name"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="h3">Department :</label>
                        <input
                          required
                          name="dept"
                          value={dept}
                          onChange={this.handleForm}
                          type="text"
                          className="form-control"
                          placeholder="Employee Department"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="h3">Rating :</label>
                        <input
                          required
                          name="rating"
                          value={rating}
                          onChange={this.handleForm}
                          type="number"
                          className="form-control"
                          placeholder="Employee rating"
                        />
                      </div>
                      <button type="submit" className="btn btn-success ">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Employee employees={users} backFunc={this.goBack} />
          )}
        </div>
      </>
    );
  }
}

export default Form;
