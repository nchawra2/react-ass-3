import React, { Component } from "react";

export class Employees extends Component {
  render() {
    let emplys = this.props.employess;

    return (
      <>
        <h1 className="text-center">Employee Feedback Data</h1>
        <div className="employees-data">
          {emplys.length > 0 &&
            emplys.map((emp) => {
              return (
                <div className="employee">
                  <h3>
                    Name : {emp.name} | Department : {emp.department} | rating :{" "}
                    {emp.rating}
                  </h3>
                </div>
              );
            })}
        </div>
        <div className="back-btn">
          <button className="form-control" onClick={this.props.backFunc}>
            back
          </button>
        </div>
      </>
    );
  }
}

export default Employees;
