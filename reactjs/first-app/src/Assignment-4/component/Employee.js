import React, { Component } from "react";
import Column from "../common/Column";
import Employeeinfo from "../Data/Employeeinfo.json";
export default class Employee extends Component {
  render() {
    return (
      <div className="emp1">
        <div><Column /></div>
        <div class="ehs"> 
        <h1><b>Employee Information</b>{" "}</h1>
            <table className="table">
            <thead>
              <th>Employee_Id</th>
              <th>Employee_Name</th>
              <th>Employee_Salary</th>
            </thead>
            <tbody>
              {Employeeinfo.map((data) => {
                return (
                  <tr>
                    <td>{data.emp_id}</td>
                    <td>{data.emp_name}</td>
                    <td>{data.emp_salary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
       
          
        
