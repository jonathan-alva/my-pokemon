import React from 'react';
import './ButtonComponent.css';

class ButtonComponent extends React.Component {
    // constructor(props) {
	// 	super(props);
    // }
    render(){
        const style = {
            color: this.props.colorButton,
            borderColor: this.props.borderColorButton,
            paddingTop: this.props.paddingTopButton + '%',
            paddingBottom: this.props.paddingBottomButton + '%',
            paddingLeft: this.props.paddingLeftButton + '%',
            paddingRight: this.props.paddingRightButton + '%',
            marginLeft: this.props.marginLeftButton + '%',
            backgroundColor: this.props.backgroundColorButton
        }
        
        return(
            <a className="link_lihat" href={this.props.link_lihat} style={style}><button className="button_lihat" style={style}>{this.props.button_lihat}</button></a>
        )
    }
}

export default ButtonComponent;