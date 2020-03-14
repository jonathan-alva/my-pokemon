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
            pageCount: 0,
            prevButton: 0,
            nextButton: 0,
            number1Button: 0,
            number2Button: 0,
            number3Button: 0,
            prevDisable: "",
            nextDisable: "",
            active1Button: "",
            active2Button: "",
            active3Button: "",

            pokemonOwned: [],
            pokemonInPage: 0
        }
    }
    getDataAPI = async () => {
        await this.props.getInitalData();
    }

    async componentDidMount() {
        document.title = 'Pokemon List'
        await this.getDataAPI();
        let pageNumber = parseInt(this.props.match.params.page);
        let page = pageNumber * 20;
        let pokemonOwnedData = this.props.pokemonOwned;

        var counts = {};
        let arrayOfOwnedPokemon = []
        pokemonOwnedData.map(data=>{
            arrayOfOwnedPokemon = [...arrayOfOwnedPokemon, data.pokemon_id]
        })
        arrayOfOwnedPokemon.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        this.setState({
            pokemonOwned: counts
        },()=>{
            API.getPokemonSpeciesOffset(page).then(res=>{
                this.setState({
                    pokemonInPage: res.results.length
                })
                res.results.map(data=>{
                    let pokemonData = [];
                    let currentData = [...this.state.currentData];
                    
                    let pokemonId = data.url.split('/')[6];
                    if(this.state.pokemonOwned[pokemonId]==undefined){
                        pokemonData['owned_total'] = 0
                    }
                    else{
                        pokemonData['owned_total'] = this.state.pokemonOwned[pokemonId]
                    }
                    API.getPokemonSpeciesData(pokemonId).then(r=>{
                        let pokemonColor = r.color.name;
                        pokemonData['speciesData'] = r;
                        if(pokemonColor === 'black'){
                            pokemonData['color'] = "#303943";
                            pokemonData['textColor'] = "white";
                        }
                        else if(pokemonColor === 'blue'){
                            pokemonData['color'] = "#58abf6";
                            pokemonData['textColor'] = "white";
                        }
                        else if(pokemonColor === 'brown'){
                            pokemonData['color'] = "#CA8179";
                            pokemonData['textColor'] = "white";
                        }
                        else if(pokemonColor === 'gray'){
                            pokemonData['color'] = "#F5F5F5";
                            pokemonData['textColor'] = "#818181";
                        }
                        else if(pokemonColor === 'green'){
                            pokemonData['color'] = "#2CDAB1";
                            pokemonData['textColor'] = "white";
                        }
                        else if(pokemonColor === 'pink'){
                            pokemonData['color'] = "#FFB6C1";
                            pokemonData['textColor'] = "#818181";
                        }
                        else if(pokemonColor === 'purple'){
                            pokemonData['color'] = "#9F5BBA";
                            pokemonData['textColor'] = "white";
                        }
                        else if(pokemonColor === 'red'){
                            pokemonData['color'] = "#F7786B";
                            pokemonData['textColor'] = "white";
                        }
                        else if(pokemonColor === 'white'){
                            pokemonData['color'] = "white";
                            pokemonData['textColor'] = "#818181";
                        }
                        else if(pokemonColor === 'yellow'){
                            pokemonData['color'] = "#FFCE4B";
                            pokemonData['textColor'] = "white";
                        }
                    })
                    API.getPokemonData(pokemonId).then(r =>{
                        let pokemonTypeList = r.types;
                        if(pokemonTypeList.length === 1){
                            pokemonData['type1'] = pokemonTypeList[0].type.name.charAt(0).toUpperCase() + pokemonTypeList[0].type.name.slice(1);
                            pokemonData['type2'] = "";
                        }
                        else{
                            pokemonData['type1'] = pokemonTypeList[0].type.name.charAt(0).toUpperCase() + pokemonTypeList[0].type.name.slice(1);
                            pokemonData['type2'] = pokemonTypeList[1].type.name.charAt(0).toUpperCase() + pokemonTypeList[1].type.name.slice(1);
                        }
                        if(r.sprites != null){
                            this.setState({
                                pageCount: Math.floor(res.count/20)
                            },()=>{
                                if(pageNumber !== 0 && pageNumber !== this.state.pageCount){
                                    this.setState({
                                        prevButton: pageNumber-1,
                                        number1Button: pageNumber-1,
                                        number2Button: pageNumber,
                                        number3Button: pageNumber+1,
                                        nextButton: pageNumber+1,
                                        prevDisable: "",
                                        nextDisable: "",
                                        active1Button: "",
                                        active2Button: "active",
                                        active3Button: ""
                                    })
                                }
                                else if(pageNumber === 0){
                                    this.setState({
                                        prevButton: 0,
                                        number1Button: pageNumber,
                                        number2Button: pageNumber+1,
                                        number3Button: pageNumber+2,
                                        nextButton: pageNumber+1,
                                        prevDisable: "disabled",
                                        active1Button: "active",
                                        active2Button: "",
                                        active3Button: ""
                                    })
                                }
                                else if(pageNumber === this.state.pageCount){
                                    this.setState({
                                        prevButton: pageNumber-1,
                                        number1Button: pageNumber-2,
                                        number2Button: pageNumber-1,
                                        number3Button: pageNumber,
                                        nextButton: 0,
                                        nextDisable: "disabled",
                                        active1Button: "",
                                        active2Button: "",
                                        active3Button: "active"
                                    })
                                }
                            })
                        }
                        pokemonData['form'] = r.sprites;
                        pokemonData['name'] = r.name.charAt(0).toUpperCase() + r.name.slice(1);
                        pokemonData['id'] = pokemonId;
                        pokemonData['data_id'] = pokemonId
                        currentData = [...this.state.currentData, pokemonData];
                        this.setState({
                            currentData: currentData
                        })
                    })
                })
            })
        })
    }

    render() {
        const data = this.state.currentData;
        let obj = data;
        let element = [];
        if(data.length === this.state.pokemonInPage){
            obj.sort((a,b)=>a.id - b.id);
            obj.map((res,i)=>{
                let color = res.color;
                let textColor = res.textColor;
                if(color === undefined){
                    if(res.speciesData !== undefined){
                        let color_name = res.speciesData.color.name;
                        if(color_name === 'black'){
                            color = "#303943";
                            textColor = "white";
                        }
                        else if(color_name === 'blue'){
                            color = "#58abf6";
                            textColor = "white";
                        }
                        else if(color_name === 'brown'){
                            color = "#CA8179";
                            textColor = "white";
                        }
                        else if(color_name === 'gray'){
                            color = "#F5F5F5";
                            textColor = "#818181";
                        }
                        else if(color_name === 'green'){
                            color = "#2CDAB1";
                            textColor = "white";
                        }
                        else if(color_name === 'pink'){
                            color = "#FFB6C1";
                            textColor = "#818181";
                        }
                        else if(color_name === 'purple'){
                            color = "#9F5BBA";
                            textColor = "white";
                        }
                        else if(color_name === 'red'){
                            color = "#F7786B";
                            textColor = "white";
                        }
                        else if(color_name === 'white'){
                            color = "white";
                            textColor = "#818181";
                        }
                        else if(color_name === 'yellow'){
                            color = "#FFCE4B";
                            textColor = "white";
                        }
                    }
                }
                else{
                    color = res.color;
                    textColor = res.textColor;
                }
                if(res.name !== undefined && res.id!==undefined && res.form.front_default!==undefined){
                element = [...element, <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-4" key={i}>
                        <PokemonComponent pokemon_nickname="" owned_total={res.owned_total} pokemon_color={color} pokemon_text_color={textColor} pokemon_name={res.name} data_id={res.data_id} number={res.id} src={res.form.front_default} type1={res.type1} type2={res.type2} url="/detail/"/>
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
                                    <div>
                                        <ul className="pagination justify-content-center"> 
                                            <li className={`page-item ${this.state.prevDisable}`}> 
                                                <a className="page-link" href={process.env.PUBLIC_URL+`/list/${this.state.prevButton}`}>Previous</a> 
                                            </li> 
                                            <li className={`page-item ${this.state.active1Button}`}> 
                                                <a className="page-link" href={process.env.PUBLIC_URL+`/list/${this.state.number1Button}`}>{this.state.number1Button}</a> 
                                            </li> 
                                            <li className={`page-item ${this.state.active2Button}`}> 
                                                <a className="page-link" href={process.env.PUBLIC_URL+`/list/${this.state.number2Button}`}>{this.state.number2Button}</a> 
                                            </li> 
                                            <li className={`page-item ${this.state.active3Button}`}> 
                                                <a className="page-link" href={process.env.PUBLIC_URL+`/list/${this.state.number3Button}`}>{this.state.number3Button}</a> 
                                            </li> 
                                            <li className={`page-item ${this.state.nextDisable}`}> 
                                                <a className="page-link" href={process.env.PUBLIC_URL+`/list/${this.state.nextButton}`} disabled>Next</a> 
                                            </li> 
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
        else{
            
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
                        <div style={{color:"white"}} className="animated fadeIn pt-1 text-center">Loading...</div>
                    </div>
                </div>
            );
        }
        
    }
}

export default connect(
    state => state,
    { getInitalData }
)(PokemonList);