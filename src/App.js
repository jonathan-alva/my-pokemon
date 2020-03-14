import React, { Component, Fragment } from 'react';
import './App.css';
import { HashRouter, Route, Switch, Link, BrowserRouter } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const DefaultLayout = React.lazy(() => import('./DefaultLayout'));

class App extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		// console.log('a')
	}
	render(){
		return (
			<Fragment>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<React.Suspense fallback={loading()}>
						<Switch>
							<Route path="/" name="Pokemon" render={props => (<DefaultLayout {...props} />)}/>
						</Switch>
						
					</React.Suspense>
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
