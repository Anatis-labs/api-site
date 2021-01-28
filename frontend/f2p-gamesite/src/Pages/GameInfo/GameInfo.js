import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'


import GameInfoTemplate from "./GameInfoTemplate.js"

export default class GameInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: {},
          
        };
      }
    
      componentDidMount() {   
        if(!Number.isFinite(this.props.match.params.GameId))   
        {       
        fetch(' https://localhost:44392/api/gameinfo/'+this.props.match.params.GameId)
          .then(result => result.json())
          .then((data) => {
            if(!Array.isArray(data)) data = [data];
            console.log(data);
            this.setState({
              isLoaded: true,
              items: data
            });
          })
          .catch(error =>
            this.setState({
              isLoaded: true,
              error: error
            })
          );    
        }
        else    
        {
          return <Redirect to='/404'  />
        } 
      }
    
      render() {
        console.log(this.props);
        const { error, isLoaded, items } = this.state;
        
        
        
        if (error) {
          return <div class="container"><h1>Error: {error.message}</h1></div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <>          
            <div class="container">

            <div class="row text-center"> 
                                
              {this.state.items.map((item) => (
                    <GameInfoTemplate
                      id={item.id}
                      title={item.title}
                      thumbnail={item.thumbnail}
                      status={item.status}
                      short_description={item.short_description}
                      description={item.description}                      
                      game_url={item.game_url}
                      genre={item.genre}
                      platform={item.platform}
                      publisher={item.publisher}
                      developer={item.developer}
                      release_date={item.release_date}
                      freetogame_profile_url={item.freetogame_profile_url}     

                      minimum_system_requirements_os={item.minimum_system_requirements.os}
                      minimum_system_requirements_prossessor={item.minimum_system_requirements.processor}
                      minimum_system_requirements_memory={item.minimum_system_requirements.memory}
                      minimum_system_requirements_graphics={item.minimum_system_requirements.graphics}
                      minimum_system_requirements_storage={item.minimum_system_requirements.storage}                    
                    />
                  ))}                  
                </div>
              </div>
            </>
          )
        }       
      }
    }
  