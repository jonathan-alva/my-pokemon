import React, { Component } from 'react';
import './PokemonList.css';
import PokemonComponent from '../../Component/PokemonComponent/PokemonComponent';
import TitleComponent from '../../Component/TitleComponent/TitleComponent';
import { connect } from 'react-redux';
import { getInitalData } from "../../../redux/reducer/globalReducer";
import API from "../../../service";
import DescriptionComponent from '../../Component/DescriptionComponent/DescriptionComponent';

class PokemonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentData: [],
        }
    }
    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index
        });
    
    }
    componentDidMount() {
        this.props.getInitalData();
        let page = this.props.match.params.page * 20;
        API.getPokemonSpeciesOffset(page).then( res=>{
            res.results.map(async data=>{
                let pokemonData = [];
                let currentData = [...this.state.currentData];
                let pokemonId = data.url.split('/')[6];
                API.getPokemonSpeciesData(pokemonId).then(r=>{
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
                        pokemonData['color'] = "#F4F5F4";
                        pokemonData['textColor'] = "white";
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
                        pokemonData['color'] = "#F5F5F5";
                        pokemonData['textColor'] = "#818181";
                    }
                    else if(pokemonColor == 'yellow'){
                        pokemonData['color'] = "#FFCE4B";
                        pokemonData['textColor'] = "white";
                    }
                })
                API.getPokemonData(pokemonId).then(r =>{
                    let pokemonTypeList = r.types;
                    if(pokemonTypeList.length == 1){
                        pokemonData['type1'] = pokemonTypeList[0].type.name.charAt(0).toUpperCase() + pokemonTypeList[0].type.name.slice(1);
                        pokemonData['type2'] = "";
                    }
                    else{
                        pokemonData['type1'] = pokemonTypeList[0].type.name.charAt(0).toUpperCase() + pokemonTypeList[0].type.name.slice(1);
                        pokemonData['type2'] = pokemonTypeList[1].type.name.charAt(0).toUpperCase() + pokemonTypeList[1].type.name.slice(1);
                    }
                    pokemonData['form'] = r.sprites;
                    pokemonData['name'] = r.name.charAt(0).toUpperCase() + r.name.slice(1);
                    pokemonData['id'] = pokemonId;
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
            obj.sort((a,b)=>a.id - b.id);

            obj.map((res,i)=>{
                if(res!=[] && res.name != undefined && res.id!=undefined && res.form.front_default!=undefined){
                    element = [...element, <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-4" key={i}>
                        <PokemonComponent pokemon_color={res.color} pokemon_text_color={res.textColor} pokemon_name={res.name} number={res.id} src={res.form.front_default} type1={res.type1} type2={res.type2} />
                    </div>]
                }
            })
            return (
                <div style={{overflow:"hidden"}}>
                    <div className="container-fluid" style={{ backgroundColor: "#2c2c2c", paddingLeft: "0", paddingRight: "0" }}>
                        <div id="pokemon_list_header">
                            <div className="p-2" style={{backgroundColor:"rgba(69,148,205,0.9)", width:"50%"}}>
                                <TitleComponent
                                    title_middle="POKEMON LIST"
                                />
                                <DescriptionComponent
                                    description_text="This is a list of every Pokemon in this world."
                                    description_text_color="#d1d1d1"
                                    description_padding_right="0"
                                    fontSize="1.5rem"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-x col-xs-x col-x px-3 pt-2 pb-3" style={{ backgroundColor: "#d1d1d1" }}>
                                <div className="container-fluid">
                                    {/* <div className="row">
                                        <div className="col-md-3">
                                            <Select
                                                value={selectedOptionType1}
                                                onChange={this.handleChangePokemonType1}
                                                options={this.state.optionType1}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <Select
                                                value={selectedOptionType2}
                                                onChange={this.handleChangePokemonType2}
                                                options={this.state.optionType2}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <Select
                                                value={selectedOptionHabitat}
                                                onChange={this.handleChangePokemonHabitat}
                                                options={this.state.optionHabitat}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <div>
                                                <button className="btn w-50">Search</button>
                                                <button className="btn w-50">Reset</button>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="row mt-5 mb-1">
                                        {
                                            element
                                        }
                                    </div>
                                    <div className="text-center">
                                        <div>
                                            <ul class="pagination"> 
                                                <li class="page-item"> 
                                                    <a class="page-link" href="#">Previous</a> 
                                                </li> 
                                                <li class="page-item"> 
                                                    <a class="page-link" href="#">1</a> 
                                                </li> 
                                                <li class="page-item"> 
                                                    <a class="page-link" href="#">2</a> 
                                                </li> 
                                                <li class="page-item"> 
                                                    <a class="page-link" href="#">3</a> 
                                                </li> 
                                                <li class="page-item"> 
                                                    <a class="page-link" href="#">Next</a> 
                                                </li> 
                                            </ul> 
                                        </div>
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
)(PokemonList);