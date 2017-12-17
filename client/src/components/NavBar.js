import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeActive: 'active',
      aboutActive: '',
      loginActive: '',
      signupActive: '',
    };
  }

  componentDidMount() {
  }

  homeClicked = () => {
    this.setState({
      homeActive: 'active',
      aboutActive: '',
      loginActive: '',
      signupActive: '',
    });
  }

  aboutClicked = () => {
    this.setState({
      homeActive: '',
      aboutActive: 'active',
      loginActive: '',
      signupActive: '',
    });
  }

  loginClicked = () => {
    this.setState({
      homeActive: '',
      aboutActive: '',
      loginActive: 'active',
      signupActive: '',
    });
  }

  signupClicked = () => {
    this.setState({
      homeActive: '',
      aboutActive: '',
      loginActive: '',
      signupActive: 'active',
    });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Flying Lanterns</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className={this.state.homeActive}>
                <Link to='/' onClick={this.homeClicked}>Home</Link>
              </li>
              <li className={this.state.aboutActive}>
                <Link to='/about' onClick={this.aboutClicked}>About</Link>
              </li>
              <li className={this.state.loginActive}>
                <Link to='/login' onClick={this.loginClicked}>Login</Link>
              </li>
              <li className={this.state.signupActive}>
                <Link to='/Signup' onClick={this.signupClicked}>Sign up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
