import React, { Component, Fragment } from 'react';
import SectionMyPokemon from '../../Component/SectionMyPokemon/SectionMyPokemon';
import SectionOwned from '../../Component/SectionOwned/SectionOwned';
import "./PokemonHome.css";
class PokemonHome extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <Fragment>
                <div className="container-fluid" style={{ backgroundColor:"#2c2c2c", paddingLeft: "0", paddingRight: "0" }}>
                    <div className="text-center">
                        <div className="mb-5 pb-5 pt-5" style={{backgroundColor: "#ebebeb"}}>
                            <div className="user-img mb-4"/>
                            <h1 className="orange">Jonathan Alva</h1>
                            <p>
                                <span>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Boulderbadge.png')}/>
                                    </div>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Cascadebadge.png')}/>
                                    </div>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Earthbadge.png')}/>
                                    </div>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Fogbadge.png')}/>
                                    </div>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Glacierbadge.png')}/>
                                    </div>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Hivebadge.png')}/>
                                    </div>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Marshbadge.png')}/>
                                    </div>
                                    <div className="badge">
                                        <img width="30px" src={require('../../../assets/image/badges/Mineralbadge.png')}/>
                                    </div>
                                </span>
                            </p>
                        </div>
                        <div className="mb-5">
                            <div className="row" style={{ backgroundColor: "#2c2c2c" }}>
                                <div className="col-lg-8 col-md-6 col-sm-12 p-5 section-description-one">
                                    <SectionMyPokemon
                                        title_start="These are your "
                                        title_middle="x Pokemon "
                                        title_end="used in battle."
                                        description_text="Your Pokemon will help you win the fight and become a Pokemon Master ! Better to choose pokemon with different types. So you will easily win every fight."
                                        description_text_color="#d1d1d1"
                                        description_text_align="left"
                                        colorTitle="#d1d1d1" textAlign="left"
                                        link_lihat="#" button_lihat="Change Pokemon"
                                        colorButton="#d1d1d1" borderColorButton="white"
                                        paddingTopButton="2" paddingBottomButton="2"
                                        paddingLeftButton="8" paddingRightButton="8"
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{ padding: "0" }}>
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"/>
                                        </div>
                                        <div className="col">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"/>
                                        </div>
                                        <div className="col">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"/>
                                        </div>
                                        <div className="col">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="row" style={{ backgroundColor: "#ebebeb" }}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-5">
                                <SectionOwned
                                    title_start="You already owned "
                                    title_middle="x Pokemon total"
                                    title_end=" with x different Pokemon."
                                    colorTitle="#212020" textAlign="center"
                                    description_text="All Pokemon have different type, some Pokemon have more than one type."
                                    description_text_color="#212020"
                                    description_text_align="center"
                                    link_lihat="#" button_lihat="Go to storage"
                                    colorButton="#212020" borderColorButton="black"
                                />
                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
                
            </Fragment>
        );
    }

}

export default PokemonHome;