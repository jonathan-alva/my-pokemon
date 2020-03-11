import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
			<BrowserRouter>
				<React.Suspense fallback={loading()}>
					<Switch>
						<Route path="/pokemon" name="Pokemon" render={props => (<DefaultLayout {...props} />)}/>
					</Switch>
				</React.Suspense>
			</BrowserRouter>
		);
	}
}

export default App;
