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
    const {activeMenuItem} = this.state;
    return (
      <Container>
      <Menu fixed="top" pointing secondary size="large" style={{ backgroundColor: 'white' }}>
           <Menu.Item header style={{ fontSize: '1.2em' }}>Beckon Ware</Menu.Item>
           <Menu.Item name="home" active={activeMenuItem === 'home'} as="button" onClick={this.navbarButtonClicked} position="right" value="about-section">Home</Menu.Item>
           <Menu.Item name="about" active={activeMenuItem === 'about'} as="button" onClick={this.navbarButtonClicked} value="products-section">About</Menu.Item>
           <Menu.Item name="signup" active={activeMenuItem === 'signup'} as="button" onClick={this.navbarButtonClicked} value="contact-section">Sign Up</Menu.Item>
           <Menu.Item name="login" active={activeMenuItem === 'login'} as="button" onClick={this.navbarButtonClicked} value="contact-section">Login</Menu.Item>
         </Menu>

        <Menu.Item as='button' active>
          Home
        </Menu.Item>
        <Menu.Item as='button'>About</Menu.Item>
        <Menu.Item position='right'>
          <Button as='a'>
            Log in
          </Button>
          <Button as='a' primary style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Container>


    );
  }
}
