import React, { Component } from 'react';
import User from '../components/User';
import Signup from '../components/Signup';

import '../css/app.css';

const dateFormat = require('dateformat');

const API = 'http://localhost:8000/api'

class App extends Component {
	state = { users: [] }

	componentDidMount() {
		fetch(API+'/users')		//Get and store users from db using api proxy url in package.json
			.then(res => res.json())
			.then((usersJson) => {
					const users = usersJson.map((userJson) => {
						const username = userJson.username
						const id = userJson._id
						const github = userJson.github
						const created = userJson.created

						const user = {id, username, id, github, created}

						return user
					})

					this.setState({ users })
				});
	}

	render() {
		return (
			<div className="container-fluid">
				{/*Navbar*/}
				<nav className="navbar navbar-default">
				<div class="row vertical-align">
					{/*Left Nav Column*/}
					<div class="col-md-4">
						<a href="/" class="navbar-brand">Foundr</a>
					</div>

					{/*Middle Nav Column*/}
					<div class="col-md-4 text-center">
						<img class="" src={require("../images/logo-512px.png")} height="27px" width="27px" />
					</div>

					{/*Right Nav Column*/}
					<div class="col-md-4">
						<ul class="nav navbar-nav navbar-right" style={{paddingRight: "2rem"}}>
							<li><a href="#">Log In</a></li>
							<li><a href="#">Sign Up</a></li>
						</ul>
					</div>
					</div>
				</nav>

				{/*Main Content Area Wtih 2 Panels*/}
				<div class="container-fluid h-100">
					<div class="row justify-content-center h-100">
						{/*Left Column*/}
						<div class="col-md-8">
							{/*Main Showcase Area*/}
							<div class="jumbotron">
							  <h1 class="display-3">Meet Local Developers.</h1>
							  <h2 class="display-3">Start Projects Together Now.</h2>
							  <hr class="my-4" />
							  <p>Connect your GitHub profile to show what you can do.</p>
							  {/*Signup Form*/}
							  <Signup />
							</div>
						</div>

						{/*Right Column*/}
						<div class="col-md-4">
							<div class="panel panel-default">
							  <div class="panel-heading">
							    <h3 class="panel-title">Recently Joined</h3>
							  </div>
							  <div class="panel-body">
							    {
									this.state.users.map((user) => {
										return (
											<User user={ user } />
										)
									})
								}
							    <br />
							  </div>
							</div>
						</div>
					</div>
				</div>

				{/*Footer Area*/}
				<div class="panel">
					<div class="panel-title">
						<p className="text-center">Foundr 2017</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
