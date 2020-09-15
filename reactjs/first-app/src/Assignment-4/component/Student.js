import React, { Component } from "react";
import Column from "../common/Column";
import Studentinfo from "../Data/Studentinfo.json";
export default class Student extends Component {
  render() {
    return (
      <div className="Stud1">
        <div> <Column /> </div>
        <div class="ehs">
        <h1><b>Student Information</b>{" "}</h1>
            <table className="table">
            <thead>
              <th>Student-Id</th>
              <th>Student-Name</th>
              <th>Student-Education</th>
              <th>Student-Marks</th>
            </thead>
            <tbody>
              {Studentinfo.map((data) => {
                return (
                  <tr>
                    <td>{data.stud_id}</td>
                    <td>{data.stud_name}</td>
                    <td>{data.stud_education}</td>
                    <td>{data.stud_fees}</td>
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
        
          
        
