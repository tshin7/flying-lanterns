import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

import fonts from './Fonts';

class Navbar extends Component {
  constructor(props) {
    super(props);
    const { location: { pathname } } = this.props;
    // currentRoute has / in front so get rid of it with slice
    // or set activeMenuItem to home if currentRoute is /
    const activeMenuItem = pathname === '/' ? 'home' : pathname.slice(1);
    this.state = { activeMenuItem };
  }

  navbarButtonClicked = (event, { name }) => {
    this.setState({ activeMenuItem: name });
  };

  render() {
    const { activeMenuItem } = this.state;
    return (
      <Container>
        <Menu
          fixed="top"
          pointing
          secondary
          size="large"
          style={{ backgroundColor: 'white' }}
        >
          <Menu.Item
            as={Link}
            header
            to="/"
            style={{ fontSize: '1.2em', fontFamily: `${fonts.main}, sans-serif` }}
          >
            Flying Lanterns
          </Menu.Item>
          <Menu.Item
            name="home"
            active={activeMenuItem === 'home'}
            as={Link}
            to="/"
            onClick={this.navbarButtonClicked}
            position="right"
            value="home-section"
            style={{ fontFamily: `${fonts.main}, sans-serif` }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="shop"
            active={activeMenuItem === 'shop'}
            as={Link}
            to="/shop"
            onClick={this.navbarButtonClicked}
            value="products-section"
            style={{ fontFamily: `${fonts.main}, sans-serif` }}
          >
            Shop
          </Menu.Item>
          <Menu.Item
            name="about"
            active={activeMenuItem === 'about'}
            as={Link}
            to="/about"
            onClick={this.navbarButtonClicked}
            value="about-section"
            style={{ fontFamily: `${fonts.main}, sans-serif`, cursor: 'pointer' }}
          >
            About
          </Menu.Item>
          <Menu.Item
            name="signup"
            active={activeMenuItem === 'signup'}
            as={Link}
            to="signup"
            onClick={this.navbarButtonClicked}
            value="signup-section"
            style={{ fontFamily: `${fonts.main}, sans-serif`, cursor: 'pointer' }}
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeMenuItem === 'login'}
            as={Link}
            to="login"
            onClick={this.navbarButtonClicked}
            value="login-section"
            style={{ fontFamily: `${fonts.main}, sans-serif`, cursor: 'pointer' }}
          >
            Login
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  location: {
    pathname: '',
  },
};

export default withRouter(Navbar);
