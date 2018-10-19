import React, { Component } from 'react';
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

export default class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
            <p>
              Copyright © 2018 Flying Lanterns
            </p>
          </Container>
      </Segment>
    );
  }
}
