import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import GameTemplate from "./GameTemplate.js"


export default class Gameimport extends Component {
    render() {
        return (
                <>
                  <div class="container">
                      <div class="row text-center">
                             <GameTemplate/>
                             <GameTemplate/>
                  </div> 
                  </div> 
                </>
        )
    }
}
