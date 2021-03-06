import React, { Component } from 'react'

export default class GameTemplate extends Component {
  
  
  render() {
    return (
      <>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">

            <img class="card-img-top" src={this.props.thumbnail} alt="" />
            <div class="card-body">
              <h4 class="card-title"> {this.props.title}</h4>
              <p>Genre: {this.props.genre}  <br/>  Platform: {this.props.platform} </p>
              <p>Publisher: {this.props.publisher}, <br/>  Developer: {this.props.developer}</p>
              <p>Release Date: {this.props.release_date}</p>
              <p class="card-text"> Game description: <br/>  {this.props.description}</p>
              <a href={"/gameinfo/"+this.props.id} class="btn btn-primary btn-lg">I demand more info!</a>            
            </div>
            <div class="card-footer">             
            </div>
          </div>
        </div>
      </>
    )
  }
}