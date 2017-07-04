import React from "react"
import SignUpForm from "./../signupform/signup-form"
class SignUp extends React.Component {
  render() {
    return (
      <div >
        <h1> This is sign up page </h1>        
      	<div className="row">
      		<div className="col-md-4 col-md-offset-4">
      			<SignUpForm />
      		</div>
      	</div>
     </div>
    )
  }
}
export default SignUp