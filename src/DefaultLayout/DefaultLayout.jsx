import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

// routes config
import routes from '../routes';

class DefaultLayout extends Component {
loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
	render() {
		return (
			<div className="app">
				<div className="app-body">
					{/* Navbar */}
					<main className="main">
						<div style={{overflowX:"hidden"}}>
							<Suspense fallback={this.loading()}>
								<Switch>
									{routes.map((route, idx) => {
										return route.component ? (
											<Route
												key={idx}
												path={route.path}
												exact={route.exact}
												name={route.name}
												render={props => (
													<route.component {...props} />
												)} />
										) : (null);
									})}
									{/* <Redirect from="/" to="/dashboard" /> */}
								</Switch>
							</Suspense>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default DefaultLayout;
