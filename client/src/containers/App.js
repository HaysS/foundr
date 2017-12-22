import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

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
				<Header />

				{/*Main Content Area Wtih 2 Panels*/}
				<Main users={ this.state.users } />

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
