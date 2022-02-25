import React, { Component } from "react";

export class Employee extends Component {
  render() {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-8 m-auto">
            <div className="card">
              <div className="card-header bg-secondary text-white text-center">
                <h2>EMPLOYEE FEEDBACK DATA</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  {this.props.employees.length > 0 &&
                    this.props.employees.map((emp) => {
                      return (
                        <div className="col-md-6 mb-3">
                          <ul className="list-group">
                            <li className="list-group-item">
                              <p className="h4">
                                Name :{" "}
                                <span className="text-danger">{emp.name}</span>
                              </p>
                            </li>
                            <li className="list-group-item">
                              <p className="h4">
                                Department :{" "}
                                <span className="text-danger">{emp.dept}</span>
                              </p>
                            </li>
                            <li className="list-group-item">
                              <p className="h4">
                                Rating :{" "}
                                <span className="text-danger">
                                  {emp.rating}
                                </span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success"
                  onClick={() => this.props.backFunc()}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Employee;
