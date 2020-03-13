import React from 'react';
import './TitleComponent.css';
import '../../../assets/fonts/style.css';

class TitleComponent extends React.Component {
    constructor(props) {
		super(props);
    }
    render(){
        const style = {
            color: this.props.colorTitle,
            textAlign: this.props.textAlign,
            position: this.props.position,
            bottom: this.props.bottom,
            left: this.props.left,
            fontSize: this.props.fontSizeTitle + 'rem'
        }
        
        return(
            <p className="title_start title_end" style={style}>{this.props.title_start}<span id="x_pokemon" className="title_middle">{this.props.title_middle}</span>{this.props.title_end}</p>
        )
    }
}

export default TitleComponent;