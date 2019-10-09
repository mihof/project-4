import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import userService from '../utils/userService';
// import tokenService from '../utils/tokenService';
import Homepage from './Homepage';

class App extends Component {
  state = {
    user: userService.getUser()
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div>
        <header className='header-footer'>React &nbsp;&nbsp;&nbsp; Imgur</header>
          <Switch>
            <Route exact path='/' render={() => 
              <Homepage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            }/>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          </Switch>
      </div>
    )
  }
}

export default App;
