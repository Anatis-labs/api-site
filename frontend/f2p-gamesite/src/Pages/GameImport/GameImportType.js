import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

import GameTemplate from "./GameTemplate.js"

export default class GameImportType extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: {},          
        };
      }
    
      

      componentDidMount() {
        fetch('https://localhost:44392/api/gameimport/'+this.props.type)
          .then(result => result.json())
          .then((data) => {
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
    
      render() {        
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
                    <GameTemplate
                      id={item.id}
                      title={item.title}
                      thumbnail={item.thumbnail}
                      description={item.short_description}
                      game_url={item.game_url}
                      genre={item.genre}
                      platform={item.platform}
                      publisher={item.publisher}
                      developer={item.developer}
                      release_date={item.release_date}
                      freetogame_profile_url={item.freetogame_profile_url}
                    />
                  ))}
                </div>
              </div>
            </>
          )
        }
      }
    }