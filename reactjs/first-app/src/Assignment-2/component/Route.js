import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Student from "../component/Student";
import Employee from "../component/Employee";
import Home from "../component/Home";


export default class Rounting extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/employee" component={Employee} />
                    <Route path="/student" component={Student} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}