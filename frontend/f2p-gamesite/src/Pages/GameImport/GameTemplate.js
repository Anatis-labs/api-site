import React, { Component } from 'react'

export default class GameTemplate extends Component {
    render() {
        return (
                <>
        <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <p>Id: {this.props.id}</p>
          <img class="card-img-top" src={this.props.thumbnail} alt=""/>
          <div class="card-body">
            <h4 class="card-title"> {this.props.title}</h4>
            <p>Genre: {this.props.genre},  Platform: {this.props.platform} </p>
            <p>Publisher: {this.props.publisher},    Developer: {this.props.developer}</p>
            <p>Release Date: {this.props.releaseday}</p>
            <p class="card-text">{this.props.description}</p>
            <button onclick={this.props.description}>To the game's website</button>           
          </div>

          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>    
       </>
        )
    }
}