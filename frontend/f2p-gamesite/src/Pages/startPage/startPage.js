import React, { Component } from 'react'
import startLogo from "./startPicture.jpg";
import "./startPage.css"

export default class startPage extends Component {
    render() {
        return (
            <div class="container">
                <div className="pretty">
               <h1>Welcome to a web collection of free to play games.</h1> 
               <img src={startLogo} alt="startLogo"/>
               </div>
            </div>
        )
    }
}
