import React, { Component } from 'react';
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
				{console.log(this.state.posts)}
				{
					this.state.posts.map((post) => 
						{
							return (
								<div key={post._id}>
									<h1 key={post._id+'h1'}>{post.content.title}</h1>
									<p key={post._id+'info'}><strong key={post._id+'strong'}>Author: {post.content.author}</strong> | Last Updated: {
										dateFormat(post.updated, "dddd, mmmm dS, yyyy, h:MM:ss TT")
									}</p>
									<p key={post._id+'body'}>{post.content.body}</p>
									<p key={post._id+'hr'}>---------------------------------------------------------------</p>
								</div>
							)
						}
					)
				}
			</div>
		);
	}
}

export default App;
