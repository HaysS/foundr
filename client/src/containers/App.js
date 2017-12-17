import React, { Component } from 'react';
import Post from '../components/Post';

const dateFormat = require('dateformat');

const API = 'http://localhost:8000/api'

class App extends Component {
	state = {posts: []}

	componentDidMount() {
		fetch(API+'/posts')		//Get and store posts from db using api proxy url in package.json
			.then(res => res.json())
			.then((postsJson) => {
					const posts = postsJson.map((postJson) => {
						const content = postJson.content
						const id = postJson._id
						const updated = postJson.updated
						const post = {id, content, updated}

						return post
					})

					this.setState({ posts })
				});
	}

	render() {
		return (
			<div className="container-fluid">
				{/*Navbar*/}
				<nav className="navbar navbar-default">
					<a href="/" class="navbar-brand">Foundr</a>
					<ul class="nav navbar-nav navbar-right" style={{paddingRight: "2rem"}}>
						<li><a href="#">Log In</a></li>
						<li><a href="#">Sign Up</a></li>
					</ul>
				</nav>

				{/*Main Content Area Wtih 2 Panels*/}
				<div class="container-fluid">
					{/*Left Column*/}
					<div class="col-md-6">
						{/*Main Showcase Area*/}
						<div class="jumbotron">
						  <h1 class="display-3">Meet Local Developers.</h1>
						  <h2 class="display-3">Start Projects Together Now.</h2>
						  <hr class="my-4" />
						  <p>Connect your GitHub profile to show what you can do.</p>
						  <p class="lead">
						    <a class="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
						  </p>
						</div>
					</div>

					{/*Right Column*/}
					<div class="col-md-6">
						<div class="panel panel-default">
						  <div class="panel-heading">
						    <h3 class="panel-title">Panel title</h3>
						  </div>
						  <div class="panel-body">
						    Panel content
						  </div>
						</div>
					</div>
				</div>

				{
					// this.state.posts.map((post) => {
					// 	return (
					// 		<Post post={ post } />
					// 	)
					// })
				}

				{/*Footer Area*/}
				<div class="panel">
					<div class="panel-title">
						<p className="text-center">ChainPointers 2017</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
