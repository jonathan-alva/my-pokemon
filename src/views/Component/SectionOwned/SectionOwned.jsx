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
                                Normal : 1
                            </td>
                            <td className="w-25">
                                Fighting : 2
                            </td>
                            <td className="w-25">
                                Flying : 3
                            </td>
                            <td className="w-25">
                                Poison : 4
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ground : 1
                            </td>
                            <td>
                                Rock : 2
                            </td>
                            <td>
                                Bug : 3
                            </td>
                            <td>
                                Ghost : 4
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Steel : 1
                            </td>
                            <td>
                                Fire : 2
                            </td>
                            <td>
                                Water : 3
                            </td>
                            <td>
                                Grass : 4
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Electric : 1
                            </td>
                            <td>
                                Psychic : 2
                            </td>
                            <td>
                                Ice : 3
                            </td>
                            <td>
                                Dragon : 4
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Dark : 1
                            </td>
                            <td>
                                Fairy : 2
                            </td>
                            <td>
                                Unkown : 3
                            </td>
                            <td>
                                Shadow : 4
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