import React, { Component, Fragment } from 'react';
import SectionMyPokemon from '../../Component/SectionMyPokemon/SectionMyPokemon';
import TitleComponent from '../../Component/TitleComponent/TitleComponent';
import ButtonComponent from '../../Component/ButtonComponent/ButtonComponent';
import DescriptionComponent from '../../Component/DescriptionComponent/DescriptionComponent';
import "./PokemonHome.css";
import API from "../../../service";
class PokemonHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon_count_total : 0,
            pokemon_count_unique : 0,
            pokemon_data: [],
            shown_pokemon: [],
            shown_pokemon_data: [],
            shown_pokemon_count: 0,

            pokemon_types : [],
            pokemon_data_type : [],
            type_count : 0,
        }
    }
    async componentDidMount(){
        await API.getPokemonTypes().then(res=>{
            let pokemon_data_by_type = []
            this.setState({
                type_count: res.count
            })
            let listOfTemp = []
            res.results.map(async data=>{
                let type_id = data.url.split('/')[6];
                await API.getPokemonTypesData(type_id).then(res=>{
                    let temp = []
                    res.names.map(name=>{
                        if(name.language.name === 'en'){
                            temp['type'] = name.name
                        }
                    })
                    temp['type_url'] = data.url
                    temp['count'] = 0
                    pokemon_data_by_type = [...pokemon_data_by_type, temp]
                    
                })
                this.setState({
                    pokemon_types: pokemon_data_by_type,
                })
                listOfTemp = pokemon_data_by_type
                if(listOfTemp.length == this.state.type_count){
                    API.getPokemonOwned().then(res=>{
                        let pokemon_types_obj = this.state.pokemon_types
                        res.map(data=>{
                            API.getPokemonData(data.pokemon_id).then(pokemon=>{
                                let pokemon_type = pokemon.types;
                                pokemon_type.map(type=>{
                                    pokemon_types_obj.map(r=>{
                                        if(r.type_url == type.type.url){
                                            r.count = r.count+1
                                        }
                                    })
                                })
                                this.setState({
                                    pokemon_data_type:pokemon_types_obj
                                })
                            })
                        })
                    });
                }
            })
        })
        
        
        API.getPokemonOwned().then(res=>{
            

            this.setState({
                pokemon_count_total: res.length,
                pokemon_data: res
            },()=>{
                let array = []
                if(this.state.pokemon_count_total <= 6){
                    let shown_pokemon = [...this.state.shown_pokemon];
                    res.map(data=>{
                        shown_pokemon = [...this.state.shown_pokemon, data];
                    })
                    this.setState({
                        shown_pokemon: shown_pokemon,
                        shown_pokemon_count: this.state.pokemon_count_total
                    })
                }
                else{
                    let shown_pokemon = [...this.state.shown_pokemon];
                    res.map(data=>{
                        array = [...array, data.id];
                    })
                    let currentData = res;

                    for(let i = 0;i< 6;i++){
                        let random = currentData[Math.floor(Math.random()*currentData.length)]
                        shown_pokemon = [...shown_pokemon, random];
                        const index = currentData.indexOf(random);
                        currentData.splice(index, 1);
                    }
                    this.setState({
                        shown_pokemon:shown_pokemon,
                        shown_pokemon_count: 6
                    },()=>{
                        let result = [];
                        this.state.shown_pokemon.map(async data=>{
                            await API.getPokemonData(data.pokemon_id).then(res=>{
                                let pokemonData = [];
                                pokemonData['img'] = res.sprites
                                pokemonData['nickname'] = data.nickname
                                pokemonData['id'] = data.id
                                result = [...result, pokemonData]
                                this.setState({
                                    shown_pokemon_data: result
                                })
                            })
                        })
                    })
                }
            })
        })
        API.getPokemonOwnedCount().then(res=>{
            this.setState({
                pokemon_count_unique: res.length
            })
        })

    }
    render(){
        // if(this.state.type_count === this.state.pokemon_data.length){
        //     console.log()
            return(
                <Fragment>
                    <div className="container-fluid" style={{ backgroundColor:"#2c2c2c", paddingLeft: "0", paddingRight: "0" }}>
                        <div className="text-center">
                            <div className="mb-5 pb-5 pt-5" style={{backgroundColor: "#ebebeb"}}>
                                <div className="user-img mb-4"/>
                                <h1 className="orange">Jonathan Alva</h1>
                                <div>
                                    <span>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Boulderbadge.png')} alt="Boulderbadge"/>
                                        </div>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Cascadebadge.png')} alt="Cascadebadge"/>
                                        </div>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Earthbadge.png')} alt="Earthbadge"/>
                                        </div>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Fogbadge.png')} alt="Fogbadge"/>
                                        </div>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Glacierbadge.png')} alt="Glacierbadge"/>
                                        </div>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Hivebadge.png')} alt="Hivebadge"/>
                                        </div>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Marshbadge.png')} alt="Marshbadge"/>
                                        </div>
                                        <div className="badge">
                                            <img width="30px" src={require('../../../assets/image/badges/Mineralbadge.png')} alt="Mineralbadge"/>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="row" style={{ backgroundColor: "#2c2c2c" }}>
                                    <div className="col-lg-8 col-md-6 col-sm-12 p-5 section-description-one">
                                        <SectionMyPokemon
                                            title_start="These are your "
                                            title_middle={`${this.state.shown_pokemon_count} Pokemon `}
                                            title_end="used in battle."
                                            description_text="Your Pokemon will help you win the fight and become a Pokemon Master ! Better to choose pokemon with different types. So you will easily win every fight."
                                            description_text_color="#d1d1d1"
                                            description_text_align="left"
                                            colorTitle="#d1d1d1" textAlign="left"
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{ padding: "0" }}>
                                        <div className="row">
                                            {
                                                this.state.shown_pokemon_data.map((res, i)=>(
                                                    <div className="col-6" key={i}>
                                                        <a href={`./owned/detail/${res.id}`}>
                                                            <img src={res.img.front_default} alt={res.nickname}/>
                                                            <h5>{res.nickname}</h5>
                                                        </a>
                                                        
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="row" style={{ backgroundColor: "#ebebeb" }}>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-5">
                                    <TitleComponent
                                        title_start= "You already owned " 
                                        title_middle={`${this.state.pokemon_count_total} Pokemon total`} 
                                        title_end={` with ${this.state.pokemon_count_unique} different Pokemon.` }
                                        colorTitle="#212020" textAlign="center"
                                    />
                                    <DescriptionComponent 
                                        description_text="All Pokemon have different type, some Pokemon have more than one type."
                                        description_text_color="#212020"
                                        description_text_align="center"
                                    />
                                    <div className="row">
                                        {
                                            this.state.pokemon_data_type.map((res,i)=>(
                                                <div className="col-md-3 col-xs-3 col-3 col-lg-3" key={i}>
                                                    <p>{res.type}</p>
                                                    <p>{res.count}</p>
                                                </div>  
                                            ))
                                        }
                                    </div>
                                    
                                    <ButtonComponent
                                        link_lihat="/owned" button_lihat="Go to storage"
                                        colorButton="#212020" borderColorButton="black"
                                    />
                                </div>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </Fragment>
            );
        // }
        // else{
        //     return null;
        // }
        
    }

}

export default PokemonHome;