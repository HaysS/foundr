import React, { Component } from 'react';
import * as Utils from '../utils/utils';
import '../css/custom.css';


const dateFormat = require('dateformat');
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
const passwordRegex = /^([a-zA-Z0-9_-]){8,24}$/

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: '', password: '', submittedOnce: false};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({[name]: value});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState({submittedOnce: true})

		if(emailRegex.test(this.state.email) && passwordRegex.test(this.state.password)) {
			Utils.createAccount(this.state.email, this.state.password);

			alert('Account made!')
		}

	}

	errorText(textElement) {
		return(
			<div>
				{ textElement }
			</div>
		)
	}

  	validateEmail() {
  		let textElement = <small>&nbsp;</small>

  		if(this.state.email != '' && this.state.submittedOnce)
  			if(!(emailRegex.test(this.state.email)))
		  		textElement = <small class="text-danger">Must enter a valid email.</small>
		  	else
		  		textElement = <small class="text-success">Good to go!</small>
			
  		return(this.errorText(textElement))
  	}

  	validatePassword() {
  		let textElement = <small>&nbsp;</small>

  		if(this.state.password != '' && this.state.submittedOnce)
			if(!passwordRegex.test(this.state.password))
		  		textElement = <small class="text-danger">Must be 8 or more characters.</small>
		  	else
		  		textElement = <small class="text-success">Great password!</small>


	  	return (this.errorText(textElement))
  	}

	render() {
		return (
		  <form onSubmit={this.handleSubmit}>
		  	<div class="panel panel-default">
		  		<div class="panel-heading">
					<h2 className="panel-title">Sign Up</h2>
		  		</div>

		  		<div class="panel-body">
			        <label>
			          <input type="text" name="email"
			          	placeholder="Email" 
			          	value={this.state.email} 
			          	onChange={this.handleChange} 
			          	required
			          	/>
			          	{
			          		this.validateEmail()
			          	}
			        </label>&nbsp;&nbsp;&nbsp;&nbsp;
			        <label>
						<input type="password" name="password" 
							placeholder="Password" 
							value={this.state.password} 
							onChange={this.handleChange} 
							required
							/>
						{
							this.validatePassword()
						}
			        </label>&nbsp;&nbsp;&nbsp;&nbsp;
			        <label>
			        	<input class="btn btn-primary btn-sm" type="submit" value="Submit" />
			        	{
						 	this.errorText(<small>&nbsp;</small>)
						}
			        </label>
		        </div>
		    </div>
		  </form>
		);
  }
}
export default Signup;
