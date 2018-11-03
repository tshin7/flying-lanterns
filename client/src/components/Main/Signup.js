import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export default class Signup extends Component {
  render() {
    const {mainStyle} = this.props;
    return (
      <div style={mainStyle}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Sign up for a new account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Repeat Password'
                  type='password'
                />
                <Button color='teal' fluid size='large'>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <a href='#'>Login</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}