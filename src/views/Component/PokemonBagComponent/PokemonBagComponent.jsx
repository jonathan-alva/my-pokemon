import React, { Component, Fragment } from 'react';

import { Row, Col } from 'reactstrap';
class PokemonBagComponent extends Component{
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
                <div>
                    <Row>
                        <Col xs="4">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"/>
                        </Col>
                        <Col xs="8">
                            {/* Image & Bisa di Geser */}
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}
export default PokemonBagComponent;