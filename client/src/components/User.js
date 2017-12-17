import React, { Component } from 'react';
import '../css/custom.css';

const dateFormat = require('dateformat');

function User(props) {
	const user = props.user
	const githubLink = "https://www.github.com/"+user.github

	console.log(user)

	return (
		<div className="container col-md-10">
			<div className="panel panel-default" key={user._id}>
				<div className="panel-heading">
					<h1 className="panel-title" key={user._id+'h1'}>{user.username}</h1>
				</div>
				<div className="panel-body">
					<p key={user._id+'info'}>
					GitHub: <a href={githubLink}>{user.github}</a></p>
					<p key={user._id+'joined'}>Joined: {
						dateFormat(user.created, "dddd, mmmm dS, yyyy, h:MM:ss TT")
					}</p>
				</div>
			</div>
		</div>
	);
}

export default User;
