import React, { Component } from 'react';
import './PokemonOwned.css';
import PokemonComponent from '../../Component/PokemonComponent/PokemonComponent';
import TitleComponent from '../../Component/TitleComponent/TitleComponent';
import { connect } from 'react-redux';
import { getInitalData } from "../../../redux/reducer/globalReducer";
import API from "../../../service";
import DescriptionComponent from '../../Component/DescriptionComponent/DescriptionComponent';

class PokemonOwned extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentData: [],
            pageCount: 0,
        }
    }
    componentDidMount() {
        this.props.getInitalData();

        API.getPokemonOwned().then(res=>{
            // console.log(res)
            res.map(data=>{
                let pokemonData = [];
                let currentData = [...this.state.currentData];
                let pokemon_id = data.pokemon_id;
                let pokemon_nickname = data.nickname;
                pokemonData['nickname'] = pokemon_nickname;
                pokemonData['data_id'] = data.id;
                API.getPokemonSpeciesData(pokemon_id).then(r=>{
                    let pokemonColor = r.color.name;
                    if(pokemonColor == 'black'){
                        pokemonData['color'] = "#303943";
                        pokemonData['textColor'] = "white";
                    }
                    else if(pokemonColor == 'blue'){
                        pokemonData['color'] = "#58abf6";
                        pokemonData['textColor'] = "white";
                    }
                    else if(pokemonColor == 'brown'){
                        pokemonData['color'] = "#CA8179";
                        pokemonData['textColor'] = "white";
                    }
                    else if(pokemonColor == 'gray'){
                        pokemonData['color'] = "#F5F5F5";
                        pokemonData['textColor'] = "#818181";
                    }
                    else if(pokemonColor == 'green'){
                        pokemonData['color'] = "#2CDAB1";
                        pokemonData['textColor'] = "white";
                    }
                    else if(pokemonColor == 'pink'){
                        pokemonData['color'] = "#FFB6C1";
                        pokemonData['textColor'] = "#818181";
                    }
                    else if(pokemonColor == 'purple'){
                        pokemonData['color'] = "#9F5BBA";
                        pokemonData['textColor'] = "white";
                    }
                    else if(pokemonColor == 'red'){
                        pokemonData['color'] = "#F7786B";
                        pokemonData['textColor'] = "white";
                    }
                    else if(pokemonColor == 'white'){
                        pokemonData['color'] = "white";
                        pokemonData['textColor'] = "#818181";
                    }
                    else if(pokemonColor == 'yellow'){
                        pokemonData['color'] = "#FFCE4B";
                        pokemonData['textColor'] = "white";
                    }
                })
                API.getPokemonData(pokemon_id).then(r =>{
                    let pokemonTypeList = r.types;
                    if(pokemonTypeList.length == 1){
                        pokemonData['type1'] = pokemonTypeList[0].type.name.charAt(0).toUpperCase() + pokemonTypeList[0].type.name.slice(1);
                        pokemonData['type2'] = "";
                    }
                    else{
                        pokemonData['type1'] = pokemonTypeList[0].type.name.charAt(0).toUpperCase() + pokemonTypeList[0].type.name.slice(1);
                        pokemonData['type2'] = pokemonTypeList[1].type.name.charAt(0).toUpperCase() + pokemonTypeList[1].type.name.slice(1);
                    }
                    if(r.sprites != null){
                        // console.log(res)
                        this.setState({
                            pageCount: Math.floor(res.length/20)
                        })
                    }
                    pokemonData['form'] = r.sprites;
                    pokemonData['name'] = r.name.charAt(0).toUpperCase() + r.name.slice(1);
                    pokemonData['id'] = pokemon_id;
                    currentData = [...this.state.currentData, pokemonData];
                    this.setState({
                        currentData: currentData
                    })
                })
            })
        })
    }

    render() {
        const data = this.state.currentData;
        let obj = [...data];
        let element = [];
        if(data.length != 0){
            obj.sort((a,b)=>a.data_id - b.data_id);

            obj.map((res,i)=>{
                if(res!=[] && res.name != undefined && res.id!=undefined && res.form.front_default!=undefined){
                    element = [...element, <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-4" key={i}>
                        <PokemonComponent pokemon_nickname={res.nickname} pokemon_color={res.color} pokemon_text_color={res.textColor} pokemon_name={res.name} number={res.id} data_id={res.data_id} src={res.form.front_default} type1={res.type1} type2={res.type2} url="../owned/detail/"/>
                    </div>]
                }
            })
            return (
                <div style={{overflow:"hidden"}}>
                    <div className="container-fluid" style={{ backgroundColor: "#2c2c2c", paddingLeft: "0", paddingRight: "0" }}>
                        <div id="pokemon_list_header">
                            <div className="p-2 content_pokemon_list_header rounded" style={{backgroundColor:"rgba(69,148,205,0.9)"}}>
                                <TitleComponent
                                    title_middle="POKEMON LIST"
                                />
                                <DescriptionComponent
                                    description_text="This is a list of every Pokemon in this world."
                                    description_text_color="white"
                                    description_padding_right="0"
                                    fontSize="1.5rem"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-x col-xs-x col-x px-3 pt-2 pb-3" style={{ backgroundColor: "#d1d1d1" }}>
                                <div className="container-fluid">
                                    <div className="row mt-5 mb-1">
                                        {
                                            element
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
        else{
            return false;
        }
    }
}

export default connect(
    state => state,
    { getInitalData }
)(PokemonOwned);