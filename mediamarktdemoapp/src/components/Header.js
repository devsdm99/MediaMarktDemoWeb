import React, { Component } from "react";
import logo from '../assets/logo.png';

class Header extends Component {
    
    render() {
        return (
            <nav>
                <div className="flex justify-content-between align-items-end flex-row mx-5">
                    <img src={logo} className="logo" alt="logo" />                 
                    <span className="text-xl">React + Redux Demo Web By Sergio Diaz</span>
                </div>
            </nav>
           
        );
    }
}

export default Header;