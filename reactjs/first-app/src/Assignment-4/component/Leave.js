import React, { Component } from "react";
import Column from "../common/Column";
import Leaveinfo from "../Data/Leaveinfo.json";
export default class Leave extends Component {
  render() {
    return (
      <div className="leave">
        <div><Column /> </div>
        <div class="ehs">
          <h1><b>Employee Leave-Information</b>{" "}</h1>
          <table className="table">
            <thead>
              <th>Employee-Id</th>
              <th>Employee-Name</th>
              <th>Leave-Date</th>
            </thead>
            <tbody>
              {Leaveinfo.map((data) => {
                return (
                  <tr>
                    <td>{data.emp_id}</td>
                    <td>{data.emp_name}</td>
                    <td>{data.leave_date}</td>
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
          
          
       
        
