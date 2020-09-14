import React, { Component } from 'react'
import { Switch,Route } from "react-router-dom";
import AboutUs from "../component/pages/AboutUs";
import ContactUs from "../component/pages/ContactUs";
import Home from "../component/pages/Home";
export default class Routing extends Component {
    render() {
        return (
            <div className="Routing">
                <Switch>
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/" component={Home} />

            
                </Switch>
                
            </div>
        )
    }
}
