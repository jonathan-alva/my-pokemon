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
                <a className="link-url" href={process.env.PUBLIC_URL+`${this.props.url}${this.props.data_id}`} style={{color:this.props.pokemon_text_color}}>
                    <div className="img-container" style={{ backgroundColor:this.props.pokemon_color}}>
                        <div className="row" style={{margin:0}}>
                            <div className="col-12 col-xs-6 col-md-6 " style={{textAlign:"left"}}>
                                <div className="position-relative h-100">
                                    <div className="pt-1 pr-1">
                                        <p className="pokemon-name">{this.props.pokemon_name}</p>
                                        {
                                            this.props.pokemon_nickname !==""?
                                            <p className="pokemon-nickname">{this.props.pokemon_nickname}</p>:
                                            <p className="pokemon-nickname">{this.props.owned_total} Owned</p>
                                        }
                                    </div>
                                    <div className="pokemon-type-box">
                                        <p className="pokemon-type">{this.props.type1}</p>
                                        <p className="pokemon-type">{this.props.type2}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xs-6 col-md-6">
                                <p className="pokemon-number">#{this.props.number}</p>
                                <img className="img" src={this.props.src}/>
                            </div>
                        </div>
                    </div>
                </a>
            </Fragment>
        );
    }
}
export default PokemonComponent;