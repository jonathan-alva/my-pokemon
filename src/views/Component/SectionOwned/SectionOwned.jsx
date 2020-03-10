import React, { Component, Fragment } from 'react';
import TitleComponent from '../TitleComponent/TitleComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import DescriptionComponent from '../DescriptionComponent/DescriptionComponent';
import {Table} from 'reactstrap';

class SectionLearning extends Component {

    constructor(props) {
		super(props);

		this.state = {
		};
    }
    
    render(){
        return(
            <Fragment>
                <TitleComponent
                    title_start= {this.props.title_start} title_middle={this.props.title_middle} title_end={this.props.title_end}
                    colorTitle={this.props.colorTitle} textAlign={this.props.textAlign}
                />
                <DescriptionComponent 
                    description_text={this.props.description_text}
                    description_text_color={this.props.description_text_color}
                    description_text_align={this.props.description_text_align}
                />
                <Table borderless>
                    <tbody>
                        <tr>
                            <td className="w-25">
                                <div className="row">
                                    <div className="col">
                                        <p>Normal</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td className="w-25">
                                <div className="row">
                                    <div className="col">
                                        <p>Fighting</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td className="w-25">
                                <div className="row">
                                    <div className="col">
                                        <p>Flying</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td className="w-25">
                                <div className="row">
                                    <div className="col">
                                        <p>Poison</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Ground</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Rock</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Bug</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Ghost</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Steel</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Fire</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Water</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Grass</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Electric</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Psychic</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Ice</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Dragon</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Dark</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Fairy</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Unknown</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col">
                                        <p>Shadow</p>
                                    </div>
                                    <div className="col">
                                        1
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <ButtonComponent
                    link_lihat={this.props.link_lihat} button_lihat={this.props.button_lihat}
                    colorButton={this.props.colorButton} borderColorButton={this.props.borderColorButton}
                />
            </Fragment>
        )
    }

}

export default SectionLearning;