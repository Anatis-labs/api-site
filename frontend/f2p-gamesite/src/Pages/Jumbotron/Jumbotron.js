import React, { Component } from 'react'

export default class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type: ""
        };
      }



    render() {
        return (
            <div>
                 <div class="container">
                <header class="jumbotron my-4">
                <h1 class="display-3">Welcome to the geek corner!</h1>
                <p class="lead">Here is a list of Free to play games!</p>
                
            </header>
            </div>
            </div>
        )
    }
}
