import React, { Component } from 'react'
import './GameFilterStyle.css';

export default class GameFilter extends Component {
    render() {
        return (
            <div class="container">
                <div class="menuBar">
                
                <a href="/games" class="btn btn-primary btn-lg">All the games!</a>
                
                <a href="/games/shooters" onClick={(e) => this.setState({ type:"shooters"})} class="btn btn-primary btn-lg">Shooters!</a>
                
                <a href="/games/mmorpg" class="btn btn-primary btn-lg">MMORPG</a>
                
                <a href="/games/strategy" class="btn btn-primary btn-lg">Strategy</a>
                
                <a href="/games/pvp" class="btn btn-primary btn-lg">PvP</a>
                </div>
            </div>
        )
    }
}
