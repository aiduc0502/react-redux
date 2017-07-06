import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './Layout';
import SignUp from './../components/signup/signup'
import Greeting from './../components/Greetings/Greetings'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

class Routes extends React.Component {
  render() {
    const store = createStore(
      (state = {}) => state,
      applyMiddleware(thunk)
    );
    return (
      <Provider store = {store}>
        <Router>
          <div>
            <div>
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <ul className="nav navbar-nav">
                    <li><Link to='/'>Home</Link></li>
                  </ul>
                  <ul className="nav navbar-nav pull-right">
                    <li><Link to='/signup' className="pull-right">Sign Up</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            <Switch>
              <Route path='/' exact component={App} />
              <Route path='/signup'  component={SignUp} />
              <Route path='/greeting'  component={SignUp} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
export default Routes
