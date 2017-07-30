import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class LoginBox extends Component {
  render() {
    return (
      <Form>
        <Form.Input label='Email' placeholder='optimus@prime.com' />
        <Form.Input label='Password' placeholder='*********' type='password' />
        <Button.Group>
          <Button as={Link} to="/feed" id="login-btn">Login</Button>
          <Button as={Link} to="/signup">Sign Up</Button>
        </Button.Group>
      </Form>
    );
  }
}
