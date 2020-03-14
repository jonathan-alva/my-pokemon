import React, { Fragment } from 'react';
import '../../../assets/fonts/style.css';
import './NavBarComponent.css';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }
  render() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/"><img src={require("../../../assets/image/pokemon-logo.png")}></img></a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/list/0">Pokemon List</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/owned">My Pokemon</a>
                </li>
            </ul>
        </nav>
    )
  }
  
}

export default NavBarComponent;