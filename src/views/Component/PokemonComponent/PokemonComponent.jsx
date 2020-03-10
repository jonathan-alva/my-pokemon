import React, { Component, Fragment } from 'react';
import './PokemonComponent.css';

class PokemonComponent extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <Fragment>
                <a className="link-url" href="#" style={{color:"#818181"}}>
                    <div className="img-container">
                        <img className="img" src={this.props.src}/>
                        <p className="pokemon-number">#{this.props.number}</p>
                        <p className="pokemon-habitat">{this.props.habitat}</p>
                        <p className="pokemon-name">{this.props.pokemon_name}</p>
                        <p className="pokemon-type">{this.props.type1}</p>
                        <p className="pokemon-type">{this.props.type2}</p>
                    </div>
                </a>
            </Fragment>
        );
    }
}
export default PokemonComponent;