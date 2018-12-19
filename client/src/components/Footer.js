import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import {FooterSegment} from './Footer.style.js';

export default class Footer extends Component {
  render() {
    return (
      <FooterSegment inverted vertical>
        <Container>
            <p>
              Copyright © 2018 Flying Lanterns
            </p>
          </Container>
      </FooterSegment>
    );
  }
}
