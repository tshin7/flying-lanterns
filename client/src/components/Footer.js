import React, { Component } from 'react';
import {
  Container,
  Segment,
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
