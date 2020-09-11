import React, { Component } from "react";
import Column from "../common/Column";

export default class Student extends Component {
    render() {
        return (
            <div className="stud1">
                <div>
                    <Column />
                </div>
                <div className="ehs">
                    <h1>Student</h1>
                    <table className="S-Table">
                        <thead>
                            <tr>
                                <th>Roll-No</th>
                                <th>Full Name</th>
                                <th>Education</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Pooja Mhaskar</td>
                                <td>BCA</td>
                                <td>70%</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Sayali Mahajan</td>
                                <td>BCA</td>
                                <td>80%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Radhika Deshmukh</td>
                                <td>BCA</td>
                                <td>75%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Harshal Patole</td>
                                <td>BCA</td>
                                <td>90%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}