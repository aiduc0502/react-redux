import React from "react"
import timezone from "../../data/timezone"
import map from "lodash/map"

class SignUpForm extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				username: "",
				email: "",
				password: "",
				passwordConfỉrm: "",
				timezone: ""
			},
			this.onChange = this.onChange.bind(this)
			this.onSubmit = this.onSubmit.bind(this)
		}
		onChange(e) {
			this.setState({ [e.target.name]: e.target.value });
		}
		onSubmit(e) {
			e.preventDefault();
			console.log(this.state);
		}
    render() {
    	const options = map(timezone, (val, key) => <option key = {val} value = {val}>{key} </option>);
    	return (
    		<form onSubmit={this.onSubmit}>
	    	<div>
	    		<div className = "form-group">
	    			<label className = "control-label">Email</label>
	    			<input type = "email" className = "form-control" name="email" value = {this.state.email}  onChange = {this.onChange}/>
	    		</div>

	    		<div className = "form-group">
	    			<label className = "control-label">User name</label>
	    			<input type = "text" className = "form-control" name="username" value = {this.state.username} onChange = {this.onChange}/>
	    		</div>

	    		<div className = "form-group">
	    			<label className = "control-label">Password</label>
	    			<input type = "password" className = "form-control" name = "password" value = {this.state.password} onChange = {this.onChange}/>
	    		</div>

	    		<div className = "form-group">
	    			<label className = "control-label">Password Confirm</label>
	    			<input type = "password" className = "form-control" name = "passwordConfỉrm" value = {this.state.passwordConfỉrm} onChange = {this.onChange}/>
	    		</div>

	    		<div className = "form-group">
	    			<label className = "control-label">Timezone</label>
	    			<select className = "form-control" name = "timezone" onChange = {this.onChange} value = {this.state.timezone}>
	    			<option value = "" disabled>Choose your timezone</option>
	    			{options}
	    			</select>
	    		</div>

	    		<div className = "form-group">
	    			<button className = "btn btn-primary">Sign Up</button>
	    		</div>
    		</div>
    		</form>
    	)
    }
}
export default SignUpForm
