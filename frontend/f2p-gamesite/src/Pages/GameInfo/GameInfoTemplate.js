import React, { Component } from 'react'

export default class GameInfoTemplate extends Component {
    render() {
        return (
          <>
            <div class="col-lg-8 col-md-6 mb-4">
              <div class="card h-100">
                <p> Rank: {this.props.id}</p>
                <img class="card-img-top" src={this.props.thumbnail} alt="" />
                <div class="card-body">
                  <h4 class="card-title"> {this.props.title}</h4>
                  <p>Genre: {this.props.genre}  <br/>  Platform: {this.props.platform} </p>
                  <p>Status: {this.props.status}</p>
                  <p>Publisher: {this.props.publisher}, <br/>  Developer: {this.props.developer}</p>
                  <p>Release Date: {this.props.release_date}</p>
                  <p>Summery: {this.props.short_description}</p>
                  <p class="card-text"> Game description: <br/>  {this.props.description}</p>    

                </div>
                <div class="card-footer">
                </div>
              </div>
            </div>
          </>
        )
      }
    }