import React from "react"
import SignUpForm from "./../signupform/signup-form"
import { connect } from "react-redux"
import { userSignupRequest }  from './../../action/signup/signup-action'
 import PropTypes from 'prop-types';
class SignUp extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div >
        <h1> This is sign up page </h1>
      	<div className="row">
      		<div className="col-md-4 col-md-offset-4">
      			<SignUpForm userSignupRequest={userSignupRequest}/>
      		</div>
      	</div>
     </div>
    )
  }
}
SignUp.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
}
export default connect(null, {userSignupRequest})(SignUp);
