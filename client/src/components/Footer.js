import React from 'react';
import {
  Container,
} from 'semantic-ui-react';
import { FooterSegment } from './Footer.style';

const Footer = () => (
  <FooterSegment inverted vertical>
    <Container>
      <p>
        Copyright © 2018 Flying Lanterns
      </p>
    </Container>
  </FooterSegment>
);

export default Footer;
