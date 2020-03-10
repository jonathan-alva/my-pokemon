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
                        <p className="pokemon-number">{this.props.number}</p>
                        <p className="pokemon-generation">{this.props.generation}</p>
                        <p className="pokemon-type">{this.props.type}</p>
                    </div>
                </a>
            </Fragment>
        );
    }
}
export default PokemonComponent;