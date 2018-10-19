import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

// Fonts from Fonts.js file
import fonts from './Fonts';

export default class NavBar extends Component {
  state = {
    activeMenuItem: 'home',
  };

  componentDidMount() {
  }

  navbarButtonClicked = (event, { name }) => {
    this.setState({ activeMenuItem: name });
  };

  render() {
    // const {fonts} = this.props.fonts;
    const {activeMenuItem} = this.state;
    return (
      <Container>
      <Menu fixed="top" pointing secondary size="large" style={{ backgroundColor: 'white' }}>
           <Menu.Item header style={{ fontSize: '1.2em', fontFamily: `${fonts.main}, sans-serif` }}>Flying Lanterns</Menu.Item>
           <Menu.Item name="home" active={activeMenuItem === 'home'} as="button" onClick={this.navbarButtonClicked} position="right" value="about-section" style={{ fontFamily: `${fonts.main}, sans-serif` }}>Home</Menu.Item>
           <Menu.Item name="about" active={activeMenuItem === 'about'} as="button" onClick={this.navbarButtonClicked} value="products-section" style={{ fontFamily: `${fonts.main}, sans-serif`, cursor: 'pointer' }}>About</Menu.Item>
           <Menu.Item name="signup" active={activeMenuItem === 'signup'} as="button" onClick={this.navbarButtonClicked} value="contact-section" style={{ fontFamily: `${fonts.main}, sans-serif`, cursor: 'pointer' }}>Sign Up</Menu.Item>
           <Menu.Item name="login" active={activeMenuItem === 'login'} as="button" onClick={this.navbarButtonClicked} value="contact-section" style={{ fontFamily: `${fonts.main}, sans-serif`, cursor: 'pointer' }}>Login</Menu.Item>
         </Menu>

      </Container>


    );
  }
}
