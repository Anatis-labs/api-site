import React, { Component } from 'react'
import './GameFilterStyle.css';

export default class GameFilter extends Component {
    render() {
        return (
            <div >
                <div className="menuBar">
                
                <a href="/games" class="btn btn-primary btn-lg">All the games!</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/games/shooters" class="btn btn-primary btn-lg">Shooters!</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/games/mmorpg" class="btn btn-primary btn-lg">MMORPG</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/games/strategy" class="btn btn-primary btn-lg">Strategy</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/games/pvp" class="btn btn-primary btn-lg">PvP</a>
                </div>
            </div>
        )
    }
}
