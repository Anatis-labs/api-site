import React, { Component } from 'react'

export default class GameInfoTemplate extends Component {
    render() {
        return (
          <>
          
            
            <div className="Stuff">
              <div class="card h-100">
                
                <img class="card-img-top" src={this.props.thumbnail} alt="Game img" />
                <div class="card-body">
                  <h1 class="card-title"> {this.props.title}</h1>                
                  
                  <h5>Summery:</h5> 
                  <p>{this.props.short_description}</p>
                  <br></br>
                  
                  <div class="row">
                  <div class="col-sm-6">
                  <h5>Genre:</h5> 
                  <p>{this.props.genre}</p>  

                  <h5>Platform:</h5> <p> {this.props.platform} </p>
                  
                  <h5>Status: </h5>
                  <p> {this.props.status}</p>
                  

                  </div>

                  <div class="col-sm-6">
                 
                  
                  <h5>Publisher:</h5>
                  <p> {this.props.publisher}</p> 

                  <h5>Developer:</h5>
                  <p> {this.props.developer}</p>

                  <h5>Release Date:</h5>
                  <p>{this.props.release_date}</p>

                  </div>
                  </div>
                  
                  <br/>
                 
                  <h4> Game description:</h4>
                  <p>  {this.props.description}</p>   

                  <a href={this.props.freetogame_profile_url}>Link to F2G profile of the game</a>
                  

                </div>

                <div class="bord">
                
                <h5>Minimum system requirements:</h5>

                <div class="row">
                <br/>
                <div class="col-sm-6">
                <h5>Operating system:</h5> "{this.props.minimum_system_requirements_os}"
                <br/><br/>
                <h5>Processor:</h5> "{this.props.minimum_system_requirements_prossessor}""
                <br/><br/>
                <h5>Memory:</h5> "{this.props.minimum_system_requirements_memory}"
                <br/><br/>
                </div>
                <div class="col-sm-6">
                <h5>Graphics:</h5>"{this.props.minimum_system_requirements_graphics}"
                <br/><br/>
                <h5>Storage:</h5> "{this.props.minimum_system_requirements_storage}"
                <br/>
                <br/>
                </div>
                </div>


                </div>

                <div>
                  bilder:
                <img src={this.props.screenshots} alt=""/>
                </div>

                <div class="card-footer">
                </div>
              </div>
            </div>
          
          </>
        )
      }
    }