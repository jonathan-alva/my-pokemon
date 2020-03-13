import React, { Component, Fragment } from 'react';
import { Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';
import './PokemonDetail.css';
import { connect } from 'react-redux';
import { getInitalData } from "../../../redux/reducer/globalReducer";
import TitleComponent from '../../Component/TitleComponent/TitleComponent';
import DescriptionComponent from '../../Component/DescriptionComponent/DescriptionComponent';
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
                moves_data: [],
                stats_data: []
            },
            pokemon_species_data: {
                color: [],
                growth_rate: [],
                base_happiness: ""
            },
            pokemon_count: 0,
            isLoad : false,
            currentPage: 0,
            pageSize: 15,
            pagesCountMoves: 0,
            prevDetail: "",
            nextDetail: "",
            prevId: "",
            nextId: "",
            prevUrl: "",
            nextUrl: ""
        }
        this.handleCatchButton = this.handleCatchButton.bind(this);
    }
    async componentDidMount() {
        this.props.getInitalData();
        let pokemon_id = this.props.match.params.id;
        API.getPokemonOwned().then(res=>{
            let pokemon_count = 0;
            res.map(data=>{
                if(pokemon_id == data.pokemon_id){
                    pokemon_count ++;
                }
            })
            this.setState({
                pokemon_count:pokemon_count
            })
        })
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
            // pokemon_data['pagesCountMoves'] = Math.ceil(res.moves.length/this.state.pageSize)
            this.setState({
                pokemon_data: pokemon_data,
                pagesCountMoves: Math.ceil(res.moves.length/this.state.pageSize)
            },()=>{
                let pokemon_abilities = [...this.state.pokemon_data.abilities];
                let pokemon_moves = [...this.state.pokemon_data.moves];
                let pokemon_stats = [...this.state.pokemon_data.stats];
                let ability_list = [];
                let move_list = [];
                let stat_list = [];
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
                pokemon_stats.map(res=>{
                    let state_id = res.stat.url.split('/')[6];
                    let data = [];
                    data['base_stat'] = res.base_stat;
                    API.getStatData(state_id).then(res=>{
                        res.names.map(res=>{
                            if(res.language.name == 'en'){
                                data['name'] = res.name;
                            }
                        });
                        stat_list = [...stat_list, data];
                        this.setState({
                            stats_data:stat_list
                        })
                    })
                })
            })
        })
        await API.getPokemonSpeciesData(pokemon_id).then(res=>{
            API.getPokemonSpecies().then(res=>{
                let nextId = parseInt(pokemon_id)+1
                let prevId = parseInt(pokemon_id)-1
                if(pokemon_id == 1){
                    API.getPokemonData(nextId).then(res=>{
                        this.setState({
                            nextDetail:res.sprites.front_default,
                            nextUrl: nextId,
                            nextId: "#"+nextId,
                        })
                    })
                }
                else if(pokemon_id == res.count){
                    API.getPokemonData(prevId).then(res=>{
                        this.setState({
                            prevDetail: res.sprites.front_default,
                            prevUrl: prevId,
                            prevId: "#"+prevId,
                        })
                    })
                }
                else{
                    API.getPokemonData(nextId).then(res=>{
                        this.setState({
                            nextDetail:res.sprites.front_default,
                            nextUrl: nextId,
                            nextId: "#"+nextId,
                        })
                    })
                    API.getPokemonData(prevId).then(res=>{
                        this.setState({
                            prevDetail:res.sprites.front_default,
                            prevUrl: prevId,
                            prevId: "#"+prevId,
                        })
                    })
                }
            })
            
            let pokemon_species_data = {...this.state.pokemon_species_data};
            let pokemonColor = res.color.name;
            if(pokemonColor == 'black'){
                pokemon_species_data['color'] = "#303943";
                pokemon_species_data['textColor'] = "white";
            }
            else if(pokemonColor == 'blue'){
                pokemon_species_data['color'] = "#58abf6";
                pokemon_species_data['textColor'] = "white";
            }
            else if(pokemonColor == 'brown'){
                pokemon_species_data['color'] = "#CA8179";
                pokemon_species_data['textColor'] = "white";
            }
            else if(pokemonColor == 'gray'){
                pokemon_species_data['color'] = "#F5F5F5";
                pokemon_species_data['textColor'] = "#818181";
            }
            else if(pokemonColor == 'green'){
                pokemon_species_data['color'] = "#2CDAB1";
                pokemon_species_data['textColor'] = "white";
            }
            else if(pokemonColor == 'pink'){
                pokemon_species_data['color'] = "#FFB6C1";
                pokemon_species_data['textColor'] = "#818181";
            }
            else if(pokemonColor == 'purple'){
                pokemon_species_data['color'] = "#9F5BBA";
                pokemon_species_data['textColor'] = "white";
            }
            else if(pokemonColor == 'red'){
                pokemon_species_data['color'] = "#F7786B";
                pokemon_species_data['textColor'] = "white";
            }
            else if(pokemonColor == 'white'){
                pokemon_species_data['color'] = "white";
                pokemon_species_data['textColor'] = "#818181";
            }
            else if(pokemonColor == 'yellow'){
                pokemon_species_data['color'] = "#FFCE4B";
                pokemon_species_data['textColor'] = "white";
            }
            pokemon_species_data['growth_rate'] = res.growth_rate;
            pokemon_species_data['base_happiness'] = res.base_happiness;
            this.setState({
                pokemon_species_data: pokemon_species_data
            })
            this.setState({
                isLoad: true
            })
        })
        
    }
    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index
        });
    }
    handleCatchButton(){
        let random = Math.random() >= 0.5;
        if(window.confirm("Success Rate: 50%. Continue ?")){
            if(random){
                var retVal = prompt("Success !! Enter Pokemon Nickname : ", "");
                let data = {
                    pokemon_id: this.state.pokemon_data.pokemon_id,
                    nickname: retVal
                }
                API.postPokemon(data.pokemon_id, data.nickname).then(res=>{
                    console.log(res)
                    // if(res['data'] == 'success'){
                    //     this.setState({
                    //         pokemon_count: parseInt(this.state.pokemon_count)+1
                    //     })
                    //     alert(`Congratulation! ${retVal} join your team.`)
                    // }
                })
            }
            else{
                alert("Failed to catch Pokemon.")
            }
        }
    }
    render() {
        const { currentPage } = this.state;
        if(this.state.isLoad == true && this.state.abilities_data != undefined && this.state.moves_data != undefined && this.state.stats_data != undefined){
            let biggestStatNumber = 0;
            this.state.stats_data.map(res=>{
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
                                    <div id="pokemon_details_image" className="col-lg-6 col-md-6 col-sm-12 col-12 p-5" style={{backgroundColor:this.state.pokemon_species_data.color}}>
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
                                        
                                        <div className="row mb-4">
                                            <div className="col-md-4">
                                                <div className="row">
                                                    {
                                                        this.state.pokemon_data.types.map((res,i)=>
                                                        <Fragment key={i}>
                                                            <div className="col-5 rounded text-center" style={{backgroundColor:this.state.pokemon_species_data.color, color:this.state.pokemon_species_data.textColor}}>{res.type.name.charAt(0).toUpperCase() + res.type.name.slice(1)}</div>
                                                            <div className="offset-1"></div>
                                                        </Fragment>
                                                            
                                                            )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 style={{color:"white"}}>Base Stat</h4>
                                            <hr className="separator" />
                                                {
                                                    this.state.stats_data.map((res,i)=>
                                                        <div className="row" key={i}>
                                                            <div className="col">
                                                                <p className="fix-line-height-text" style={{color:"white"}}>{res.name}</p>
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
                                        <div className="mt-2">
                                            <h4 style={{color:"white"}}>Other Info</h4>
                                            <hr className="separator" />
                                            {
                                                this.state.pokemon_data.pokemon_height != undefined ?
                                                <div style={{color:"white"}}>Height - {this.state.pokemon_data.pokemon_height}</div>
                                                :<div></div>
                                            }
                                        </div>
                                        <div style={{color:"white"}} className="mb-3">
                                            Base Happiness - {this.state.pokemon_species_data.base_happiness}
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
                                                <Button className="mb-3" onClick={this.handleCatchButton} style={{backgroundColor:"#e95e1e", marginLeft:"0", paddingBottom:"3", color:"#f5f6f8", borderColor:"transparent"}}>Catch Pokemon</Button>
                                             
                                                <h5 style={{color:"white"}}><span style={{color:"#e95e1e"}}>{this.state.pokemon_count}</span> Pokemon Owned</h5>
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
                                                this.state.moves_data
                                                .slice(
                                                    currentPage * this.state.pageSize,
                                                    (currentPage + 1) * this.state.pageSize
                                                )
                                                .map((data, i)=>
                                                <li key={i}>
                                                    <div className="row">
                                                        <div className="col">
                                                            <span style={{ fontWeight: "bold" }}>{data.name}</span>
                                                        </div>
                                                        <div className="col">
                                                            <span>Charge : {data.pp}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                )
                                            }
                                        </ul>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5" style={{overflowX:"auto"}}>
                                            <Pagination aria-label="Page navigation example" style={{width:"fit-content", marginLeft:"auto", marginRight:"auto"}}>
                                                    
                                                    <img src={require('../../../assets/image/pagination/arrow-left.svg')} />

                                                    {/* Previous Button for Pagination */}
                                                    <PaginationItem disabled={currentPage <= 0}>
                                                        <PaginationLink
                                                            onClick={e => this.handleClick(e, currentPage - 1)}
                                                            previous
                                                            href="#"
                                                            style={{opacity:"0", right:"95%"}}
                                                        />
                                                    </PaginationItem>

                                                    {/* Pagination's Contents */}
                                                    {[...Array(this.state.pagesCountMoves)].map((page, i) => 
                                                    <PaginationItem active={i === currentPage} key={i} >
                                                        <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                                        {i + 1}
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    )}

                                                    {/* Next Button for Pagination */}
                                                    <PaginationItem disabled={currentPage >= this.state.pagesCountMoves - 1}>
                                                        <PaginationLink
                                                            onClick={e => this.handleClick(e, currentPage + 1)}
                                                            next
                                                            href="#"
                                                            style={{opacity:"0", left:"95%"}}
                                                        />
                                                    </PaginationItem>

                                                    <img src={require('../../../assets/image/pagination/arrow-right.svg')} />
                                            </Pagination>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 p-5">
                                <div className="w-10 float-left">
                                    <div id="prevDetail">
                                        {
                                            this.state.prevUrl != ""?
                                            (
                                            <a href={`../detail/${this.state.prevUrl}`}>
                                                {
                                                    <div>
                                                        <img src={`${this.state.prevDetail}`} style={{width: "100%", height: "100%" }} />
                                                        <p className="text-center">{this.state.prevId}</p>
                                                    </div>
                                                }
                                            </a>
                                            ):<div/>
                                        }
                                        
                                    </div>
                                </div>
                                <div className="w-10 float-right">
                                    <div id="nextDetail">
                                        {
                                            this.state.nextUrl != ""?
                                            (
                                                <a href={`../detail/${this.state.nextUrl}`}>
                                                    {   
                                                        <div>
                                                            <img src={`${this.state.nextDetail}`} style={{width: "100%", height: "100%" }} />
                                                            <p className="text-center">{this.state.nextId}</p>
                                                        </div>
                                                    }
                                                </a>
                                            ): <div/>
                                        }
                                        
                                    </div>
                                </div>
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