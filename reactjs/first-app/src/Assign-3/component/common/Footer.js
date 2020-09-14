import React, { Component } from 'react'
import "../../assets/Footer.css"
import { Link } from "react-router-dom"

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }
  handleChange = (event) => {
      this.setState({email: event.target.value})
  }
  handleSubmit = (event) => {
  event.preventDefault();

      console.log(this.state.email);
      this.setState({email: ""});
  }


    render() {
        return (
            <div className="Footer">
                <div className="Footer-links">
                    <Link  to="/">
                    <li className="Footer-lnk"> Home</li>   
                    </Link>
                    <Link  to="/aboutus">
                       <li className="Footer-lnk">AboutUs</li>
                    </Link>
                </div>
                <div className="Footer-copyright">
                    <p> copyright @ all rights reserved by <strong>Liviano</strong></p>
                </div>
                <div className="Footer-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="email" id="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

