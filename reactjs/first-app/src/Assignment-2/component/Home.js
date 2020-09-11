import React, { Component } from "react";
import Column from '../common/Column';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Column />
                </div>
                <div className="ehs">
                    <h1>Dashbord</h1>
                </div>
            </div>
        );
    }
}

