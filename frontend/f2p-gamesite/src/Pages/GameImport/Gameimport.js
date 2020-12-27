import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import GameTemplate from "./GameTemplate.js"


export default class Gameimport extends Component {
    constructor() {
        super();
        this.state = {
          seminar: [],
        };
      }
      
      componentDidMount() {
        fetch('https://localhost:44350/api/seminars')
          .then((response) => response.json())
          .then((json) => this.setState({ seminar: json }));
      }



    render() {
        return (
            <>
            <div class="container">
            <div class="row text-center">
                    <GameTemplate id={item.id} title={item.title} date={item.date} description={item.description} duration={item.duration}/>
            </div> 
            </div> 
            </>
        )
    }
}
