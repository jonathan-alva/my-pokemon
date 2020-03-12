import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './PokemonDetail.css';
import { connect } from 'react-redux';
import { getInitalData } from "../../../redux/reducer/globalReducer";
import TitleComponent from '../../Component/TitleComponent/TitleComponent';
import DescriptionComponent from '../../Component/DescriptionComponent/DescriptionComponent';
import ButtonComponent from '../../Component/ButtonComponent/ButtonComponent';
import API from "../../../service";

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon_data: {
                pokemon_id: "",
                front_default: "",
                pokemon_name: "",
                pokemon_height: "",
                pokemon_width: "",
                abilities:[], // name, effect, short effect
                moves: [], // name, pp
                stats: [], // base stat, effort, stat: name
                types: [], // name
                abilities_data: [],
                moves_data: []
            },
            pokemon_species_data: {
                color: [],
                evolution_chain: [],
                growth_rate: [],
                base_happiness: ""
            },
            isLoad : false,
        }
    }
    async componentDidMount() {
        this.props.getInitalData();
        let pokemon_id = this.props.match.params.id;
        await API.getPokemonData(pokemon_id).then(res=>{
            let pokemon_data = {...this.state.pokemon_data};
            pokemon_data['front_default'] = res.sprites.front_default
            pokemon_data['pokemon_name'] = res.name.charAt(0).toUpperCase() + res.name.slice(1);
            pokemon_data['pokemon_height'] = res.height;
            pokemon_data['pokemon_width'] = res.width;
            pokemon_data['abilities'] = res.abilities;
            pokemon_data['moves'] = res.moves;
            pokemon_data['stats'] = res.stats;
            pokemon_data['types'] = res.types;
            pokemon_data['pokemon_id'] = pokemon_id;
            this.setState({
                pokemon_data: pokemon_data
            },()=>{
                let pokemon_abilities = [...this.state.pokemon_data.abilities];
                let pokemon_moves = [...this.state.pokemon_data.moves];
                let ability_list = [];
                let move_list = [];
                pokemon_abilities.map(res=>{
                    let ability_id = res.ability.url.split('/')[6];
                    let data = []
                    API.getAbilityData(ability_id).then(res=>{
                        data['short_effect'] = res.effect_entries[0].short_effect;
                        res.names.map(res=>{
                            if(res.language.name == 'en'){
                                data['name'] = res.name;
                            }
                        });
                        ability_list = [...ability_list, data];
                        this.setState({
                            abilities_data:ability_list
                        })
                    })
                    
                })
                pokemon_moves.map(res=>{
                    let move_id = res.move.url.split('/')[6];
                    let data = [];
                    API.getMoveData(move_id).then(res=>{
                        data['pp'] = res.pp;
                        res.names.map(res=>{
                            if(res.language.name == 'en'){
                                data['name'] = res.name;
                            }
                        });
                        move_list = [...move_list, data];
                        this.setState({
                            moves_data:move_list
                        })
                    })
                    
                })
            })
        })
        await API.getPokemonSpeciesData(pokemon_id).then(res=>{
            let pokemon_species_data = {...this.state.pokemon_species_data};
            pokemon_species_data['color'] = res.color;
            pokemon_species_data['evolution_chain'] = res.evolution_chain;
            pokemon_species_data['growth_rate'] = res.growth_rate;
            pokemon_species_data['base_happiness'] = res.base_happiness;
            this.setState({
                pokemon_species_data: pokemon_species_data
            },()=>{
                // console.log(this.state.pokemon_species_data)
            })
                this.setState({
                isLoad: true
            })
        })
        
    }

    render() {
        if(this.state.isLoad == true && this.state.abilities_data != undefined && this.state.moves_data != undefined){
            // console.log(this.state.pokemon_data)
            // console.log(this.state.pokemon_species_data)
            let biggestStatNumber = 0;
            this.state.pokemon_data.stats.map(res=>{
                if(res.base_stat > biggestStatNumber){
                    biggestStatNumber = res.base_stat
                }
            })
            return (
                <div>
                    <div className="container-fluid" style={{ backgroundColor: "#2c2c2c", paddingLeft: "0", paddingRight: "0" }}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div id="pokemon_details_image" className="col-lg-6 col-md-6 col-sm-12 col-12 p-5">
                                        <img src={`${this.state.pokemon_data.front_default}`} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                    </div>
                                    <div id="pokemon_details_description" className="col-lg-6 col-md-6 col-sm-12 col-12 p-5">
                                        <TitleComponent
                                            title_start={this.state.pokemon_data.pokemon_name}
                                            colorTitle="#e95e1e"
                                        />
                                        <DescriptionComponent
                                            description_text={`#${this.state.pokemon_data.pokemon_id}`}
                                            description_text_color="#818181"
                                            fontSize="25px"
                                        />
                                        <div>
                                            Base Happiness - {this.state.pokemon_species_data.base_happiness}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="row">
                                                    {
                                                        this.state.pokemon_data.types.map((res,i)=>
                                                            <div key={i} className="col">{res.type.name.charAt(0).toUpperCase() + res.type.name.slice(1)}</div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                                {
                                                    this.state.pokemon_data.stats.map((res,i)=>
                                                        <div className="row" key={i}>
                                                            <div className="col">
                                                                {res.stat.name.charAt(0).toUpperCase() + res.stat.name.slice(1)}
                                                            </div>
                                                            <div className="col">
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow={res.base_stat} aria-valuemin="0" aria-valuemax={biggestStatNumber} style={{width:`${res.base_stat/biggestStatNumber*100}%`}}>
                                                                    {res.base_stat} 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                        </div>
                                        <div>
                                            {
                                                this.state.pokemon_data.pokemon_height != undefined ?
                                                <div>Height - {this.state.pokemon_data.pokemon_height}</div>
                                                :<div></div>
                                            }
                                        </div>
                                        <div>
                                            {
                                                this.state.pokemon_data.pokemon_width != undefined ?
                                                <div>Width - {this.state.pokemon_data.pokemon_width}</div>
                                                :<div></div>
                                            }
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <ButtonComponent
                                                    link_lihat="#"
                                                    button_lihat="Catch Pokemon"
                                                    colorButton="#f5f6f8"
                                                    borderColorButton="transparent"
                                                    paddingTopButton="3"
                                                    paddingBottomButton="3"
                                                    marginLeftButton="0"
                                                    backgroundColorButton="#e95e1e"
                                                />
                                                x Pokemon Owned
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12" style={{ backgroundColor: "#ebebeb" }}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 second_section">
                                        {/* Abilities */}
                                        <TitleComponent
                                            title_start="Abilities"
                                            fontSizeTitle="2"
                                        />
                                        <ul className="main_list">
                                            {
                                                this.state.abilities_data.map((res,i)=>
                                                    <li key={i}><span style={{ fontWeight: "bold" }}>{res.name}</span> - {res.short_effect}.</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 second_section">
                                        {/* Moves */}
                                        <TitleComponent
                                            title_start="Moves"
                                            fontSizeTitle="2"
                                        />
                                        <ul className="main_list">
                                            {
                                                this.state.moves_data.map((res,i)=>
                                                    <li key={i}>
                                                        <div className="row">
                                                            <div className="col">
                                                                <span style={{ fontWeight: "bold" }}>{res.name}</span>
                                                            </div>
                                                            <div className="col">
                                                                <span>Charge : {res.pp}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 p-5">
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return false;
        }
        
    }

}
export default connect(
    state => state,
    { getInitalData }
)(PokemonDetail);