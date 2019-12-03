// import React, { Component } from "react"

// class Register extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			username: '',
// 			password: '',
// 			email: '',
// 			phone_number: '',
// 			registered: false
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	handleSubmit(e) {
// 		e.preventDefault();
// 		const { registered, username, password, email, phone_number} = this.state;

// 	}
// 	handleChange(e) {
// 		this.setState({
// 			[e.target.name]: e.target.value
// 		});
// 	}
// 	render() {
// 		const { registered } = this.state;

// 		if(registered) {
// 		} else {
// 			return (
// 				<form onSubmit={this.handleSubmit}>
// 					<label>Username</label>
// 					<input type = 'text' name='username' onChange={this.handleChange}/>
// 					<label>Password</label>
// 					<input type='password' name='password' onChange={this.handleChange}/>
// 					<label>Email</label>
// 					<input type='text' name='email' onChange={this.handleChange}/>
// 					<label>Phone Number</label>
// 					<input type='text' name='phone_number' onChange={this.handleChange}/>
// 					<button>Register</button>
// 				</form>
// 			)
// 		}
// 		}
// 	}
// export default Register
