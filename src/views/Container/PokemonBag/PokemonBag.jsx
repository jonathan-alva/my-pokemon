import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import PokemonBagComponent from '../../Component/PokemonBagComponent/PokemonBagComponent';
class PokemonBag extends Component{
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
                        <Col>
                            <PokemonBagComponent/>
                            <PokemonBagComponent/>
                            <PokemonBagComponent/>
                            <PokemonBagComponent/>
                            <PokemonBagComponent/>
                            <PokemonBagComponent/>
                        </Col>
                        <Col>
                            {/* Image & Bisa di Geser */}
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}
export default PokemonBag;