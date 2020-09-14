import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/Header.css'
import img from "../../img/img.png";
export default function Header() {
    return (
        <div className="Header">
             <div className='img'>
            <img className='Header-img' src={img}/>
          </div>
            <div className="Header-links">
                <Link className="Header-lnk" to="/">Home</Link>
                <Link className="Header-lnk" to="/aboutus">AboutUs</Link>
                <Link className="Header-lnk" to="/contactus">ContactUs</Link>
                   
                
            </div>
            
        </div>
    )
}


