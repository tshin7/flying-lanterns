import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
} from 'semantic-ui-react'

// Fonts from Fonts.js file
import fonts from './Fonts';

export default class NavBar extends Component {
  state = {
    activeMenuItem: 'home',
  };

  navbarButtonClicked = (event, { name }) => {
    this.setState({ activeMenuItem: name });
  };

  render() {
    // const {fonts} = this.props.fonts;
    const {activeMenuItem} = this.state;
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
            name="products"
            active={activeMenuItem === 'products'}
            as={Link}
            to="/products"
            onClick={this.navbarButtonClicked}
            position="right"
            value="products-section"
            style={{ fontFamily: `${fonts.main}, sans-serif` }}
          >
            Products
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
