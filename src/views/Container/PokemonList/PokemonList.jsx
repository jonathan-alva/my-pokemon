import React, { Component } from 'react';
import './PokemonList.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PokemonComponent from '../../Component/PokemonComponent/PokemonComponent';
import TitleComponent from '../../Component/TitleComponent/TitleComponent';
import { connect } from 'react-redux';
import { getInitalData } from "../../../redux/reducer/globalReducer";
import API from "../../../service";
import DescriptionComponent from '../../Component/DescriptionComponent/DescriptionComponent';
import Select from 'react-select';

class PokemonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // currentPage: 0,
            // pageSize: 20,
            // dataCount: 0,
            // pagesCount: 0,
            // pokemonType: [],
            // pokemonHabitat: [],
            
            // selectedOptionType1: null,
            // selectedOptionType2: null,
            // selectedOptionHabitat: null,

            // optionType1:[],
            // optionType2:[],
            // optionHabitat:[],

            currentData: [],
            // currentDetailsData: [],
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
        
        // API.getPokemonTypes().then(res=>{
        //     this.setState({
        //         pokemonType: res
        //     },()=>{
        //         let optionsPokemonType = [];
        //         this.state.pokemonType.results.map(res=>{
        //             let data = {
        //                 value: res.url, label: res.name
        //             }
        //             optionsPokemonType = [...optionsPokemonType, data];
        //             this.setState({
        //                 optionType1: optionsPokemonType,
        //                 optionType2: optionsPokemonType,
        //             })
        //         })
                
        //     })
        // })

        // API.getPokemonHabitats().then(res=>{
        //     this.setState({
        //         pokemonHabitat: res
        //     },()=>{
        //         let optionsPokemonHabitat = [];
        //         this.state.pokemonHabitat.results.map(res=>{
        //             let data = {
        //                 value: res.url, label: res.name
        //             }
        //             optionsPokemonHabitat = [...optionsPokemonHabitat, data];
        //             this.setState({
        //                 optionHabitat: optionsPokemonHabitat
        //             })
        //         })
        //     })
        // })
        // API.getPokemonSpecies().then(res=>{
        //     this.setState({
        //         dataCount: res.count
        //     },()=>{
        //         this.setState({
        //             pagesCount: this.state.dataCount / this.state.pageSize
        //         })
        //     })
        // })
        let page = this.props.match.params.page * 20;

        // console.log(page)
        API.getPokemonSpeciesOffset(page).then(res=>{
            // console.log(res)
            res.results.map(data=>{
                let pokemonData = [];
                let currentData = [...this.state.currentData];
                // console.log(data)
                let pokemonId = data.url.split('/')[6];
                API.getPokemonSpeciesData(pokemonId).then(r=>{
                    console.log(r)
                    pokemonData['habitat'] = r.habitat['name'];
                })
                API.getPokemonData(pokemonId).then(r =>{
                    console.log(r)
                    pokemonData['type'] = r.types;
                    pokemonData['form'] = r.sprites;
                    pokemonData['name'] = r.name;
                    pokemonData['id'] = pokemonId;
                    currentData = [...this.state.currentData, pokemonData];
                    this.setState({
                        currentData: currentData
                    },()=>{
                        // console.log(this.state.currentData.habitat, this.state.pokemonData)
                    })
                })
            })
            
        })
    }

    // handleChangePokemonType1 = selectedOptionType1 => {
    //     this.setState({
    //         selectedOptionType1
    //     })
    //     // console.log(selectedOptionType1)
    // };

    // handleChangePokemonType2 = selectedOptionType2 => {
    //     this.setState({
    //         selectedOptionType2
    //     })
    //     // console.log(selectedOptionType2)
    // };

    // handleChangePokemonHabitat = selectedOptionHabitat => {
    //     this.setState({
    //         selectedOptionHabitat
    //     })
    //     // console.log(selectedOptionHabitat)
    // };

    render() {
        const data = this.state.currentData;
        let obj = [...data];
        let element = [];
        if(data.length != 0){
            obj.sort((a,b)=>a.id - b.id);

            obj.map((res,i)=>{
                if(res!=[] && res.name != undefined && res.habitat!=undefined && res.id!=undefined && res.form.front_default!=undefined){
                    element = [...element, <div className="col-lg-3 col-md-3 col-sm-4 col-6 mb-4" key={i}>
                        <PokemonComponent pokemon_name={res.name} habitat={res.habitat} number={res.id} src={res.form.front_default} />
                    </div>]
                }
            })
        }
        // const { selectedOptionType1 } = this.state;
        // const { selectedOptionType2 } = this.state;
        // const { selectedOptionHabitat } = this.state;
        return (
            <div style={{overflow:"hidden"}}>
                <div className="container-fluid" style={{ backgroundColor: "#2c2c2c", paddingLeft: "0", paddingRight: "0" }}>
                    <div id="pokemon_list_header">
                        <div className="p-2" style={{backgroundColor:"rgba(69,148,205,0.6)"}}>
                            <TitleComponent
                                title_middle="POKEMON LIST"
                            />
                            <DescriptionComponent
                                description_text="This is a list of every Pokemon in this world."
                                description_text_color="#d1d1d1"
                                description_padding_right="55"
                                fontSize="1.5rem"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-x col-xs-x col-x px-5 py-5" style={{ backgroundColor: "#d1d1d1" }}>
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
                                <div className="row mt-5">
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
}

export default connect(
    state => state,
    { getInitalData }
)(PokemonList);