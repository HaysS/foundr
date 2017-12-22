import React, { Component } from 'react';
import '../css/custom.css';

function Header(props) {

	return (
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
	);
}

export default Header;
