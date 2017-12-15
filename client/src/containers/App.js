import React, { Component } from 'react';
import Post from '../components/Post';
import '../css/App.css';

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
			<div className="App">
				<header className="App-header">
			  		<h1 className="App-title">ChainPointers</h1>
				</header>
				<h4>Posts:</h4>
				{
					this.state.posts.map((post) => {
						return (
							<Post post={ post } />
						)
					})
				}
				<footer className="App-footer">
					<p>ChainPointers 2017</p>
				</footer>
			</div>
		);
	}
}

export default App;
