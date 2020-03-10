import React, { Component, Fragment } from 'react'
import PokemonComponent from '../../Component/PokemonComponent/PokemonComponent';
import Select from 'react-select';
import { connect } from 'react-redux';
import { getInitalData } from "../../../redux/reducer/globalReducer";
import './PokemonList.css';
import API from '../../../service'
class PokemonList extends Component{
    constructor(props){
        super(props);
        this.state={
            pokemonType: []
        }
    }
    componentDidMount(){
        // this.props.getInitalData();
        API.getPokemonTypes().then(res=>{
            this.setState({
                pokemonType: res
            })
            console.log(res['results'])
        })
    }
    render(){
        return(
            <Fragment>
                <div className="container-fluid">
                    <div className="row mb-5" >
                        <div className="col-md-3">
                            <p id="choose-pokemon-type" className="pt-5">Choose Pokemon Type</p>
                            <div className="container">
                                {
                                    // this.props.pokemonTypes.map(res=>
                                    //     (
                                    //         <div className="form-check">
                                    //             <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    //             <label className="form-check-label" htmlFor="gridCheck1">
                                    //             </label>
                                    //         </div>
                                    //     )
                                    // )
                                }
                                
                            </div>
                            
                        </div>
                        <div className="col-md-9">
                            <div className="mb-4">
                                <p className="title-page">Pokemon List</p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Select Generation
                                </div>
                                <div className="col">
                                    Select Habitat
                                </div>
                                <div className="col">
                                    Search
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-3 col-xs-3 col-lg-3">
                                    <PokemonComponent src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" number="#12" generation="Generation I" type="Flying & Bug"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    state => state,
    { getInitalData }
)(PokemonList);