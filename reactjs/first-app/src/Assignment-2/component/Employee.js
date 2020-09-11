import React, { Component } from "react";
import Column from "../common/Column";

export default class Employee extends Component {
    render() {
        return (
            <div className="emp1">
                <div>
                    <Column />
                </div>
                <div className="ehs">
                    <h1>Employee</h1>
                    <table className="E-Table">
                        <thead>
                            <tr>
                                <th>Emp-ID</th>
                                <th>Emp-Name</th>
                                <th>Company-Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Pooja</td>
                                <td>TCS</td>
                                <td>40000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Sayali</td>
                                <td>Wipro</td>
                                <td>50000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Radhika</td>
                                <td>IBM</td>
                                <td>40000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Harshal</td>
                                <td>Cognizant</td>
                                <td>40000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}