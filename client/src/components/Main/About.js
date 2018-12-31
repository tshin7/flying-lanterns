import React from 'react';
import {
  Container,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';
import { MainDiv } from './Main.style';

const About = () => (
  <MainDiv>
    <Segment vertical>
      <Container text>
        Flying Lanterns provides costumes and accessories for cosplaying.
        At the moment. everything on this site is created by Misha.
      </Container>
    </Segment>

    <Segment style={{ padding: '2em 0em' }} vertical>
      <Container>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Frequently Asked Questions
        </Header>
        <Divider />
        <p style={{ fontSize: '1.33em' }}>
          How do I order?
        </p>
        <p style={{ fontSize: '1em' }}>
          Add to cart and process payment.
        </p>
      </Container>
    </Segment>
  </MainDiv>
);

export default About;
