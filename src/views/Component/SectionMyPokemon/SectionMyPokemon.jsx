import React, { Component, Fragment } from 'react';
import TitleComponent from '../TitleComponent/TitleComponent';
import DescriptionComponent from '../DescriptionComponent/DescriptionComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
class SectionMyPokemon extends Component {

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
                <ButtonComponent
                    link_lihat={this.props.link_lihat} button_lihat={this.props.button_lihat}
                    colorButton={this.props.colorButton} borderColorButton={this.props.borderColorButton}
                    paddingTopButton={this.props.paddingTopButton} paddingBottomButton={this.props.paddingBottomButton}
                    paddingLeftButton={this.props.paddingLeftButton} paddingRightButton={this.props.paddingRightButton}
                />
            </Fragment>
        )
    }

}

export default SectionMyPokemon;