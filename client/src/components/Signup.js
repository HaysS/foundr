import React, { Component } from 'react';
import '../css/custom.css';

const dateFormat = require('dateformat');

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

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
    alert('Email of '+this.state.email+'and password of '+this.state.password+' have been submitted.');
    event.preventDefault();
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
		          <input type="text" name="email" placeholder="Email" value={this.state.username} onChange={this.handleChange} />
		        </label>&nbsp;&nbsp;&nbsp;&nbsp;
		        <label>
		          <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
		        </label>&nbsp;&nbsp;&nbsp;&nbsp;
		        <input class="btn btn-primary btn-sm" type="submit" value="Submit" />
	        </div>
        </div>
      </form>
    );
  }
}
export default Signup;
