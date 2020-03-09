import React from 'react';
import './DescriptionComponent.css';
import '../../../assets/fonts/style.css';

class DescriptionComponent extends React.Component {
    constructor(props) {
		super(props);
    }
    render(){
        const style = {
            color: this.props.description_text_color,
            textAlign: this.props.description_text_align,
            fontWeight: this.props.font_weight,
            fontSize: this.props.fontSize,
            marginTop: this.props.description_margin_top + '%',
            marginBottom: this.props.description_margin_bottom + '%',
            paddingRight: this.props.description_padding_right + '%',
            paddingLeft: this.props.description_padding_left + '%'
        }

        return(
            <p className="description" style={style}>{this.props.description_text}</p>
        )
    }
}

export default DescriptionComponent;