import React from 'react';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { MainDiv } from './Main.style';

const Login = () => (
  <MainDiv>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Login to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?
          {' '}
          <a href="/signup">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </MainDiv>
);

export default Login;
