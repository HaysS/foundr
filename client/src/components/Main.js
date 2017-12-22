import React, { Component } from 'react';
import User from '../components/User';
import Signup from '../components/Signup';

import '../css/custom.css';

function Main(props) {

	return (
		<div class="container-fluid h-100">
			<div class="row justify-content-center h-100">
				{/*Left Column*/}
				<div class="col-md-8">
					{/*Main Showcase Area*/}
					<div class="jumbotron">
					  <h1 class="display-3">Meet Local Developers.</h1>
					  <h2 class="display-3">Start Projects Together Now.</h2>
					  <hr class="my-4" />
					  <p>Make an account now and show what you can do.</p>

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
							props.users.map((user) => {
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
	);
}

export default Main;
