import React, { Component } from 'react';
import '../css/App.css';

const dateFormat = require('dateformat');

function Post(props) {
	const post = props.post

	return (
		<div className="container">
			<div key={post._id}>
				<h1 key={post._id+'h1'}>{post.content.title}</h1>
				<p key={post._id+'info'}><strong key={post._id+'strong'}>Author: {post.content.author}</strong> | Last Updated: {
					dateFormat(post.updated, "dddd, mmmm dS, yyyy, h:MM:ss TT")
				}</p>
				<p key={post._id+'body'}>{post.content.body}</p>
				<p key={post._id+'hr'}>---------------------------------------------------------------</p>
			</div>
		</div>
	);
}

export default Post;
