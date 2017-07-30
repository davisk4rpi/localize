import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class SignUpBox extends Component {
  render() {
    return (
      <Form>
        <Form.Input label='Email' placeholder='optimus@prime.com' />
        <Form.Input label='Password' placeholder='*********' type='password' />
        <Form.Input label='Verify Password' placeholder='*********' type='password' />
        <Button.Group>
          <Button as={Link} to="/feed" id="login-btn">Sign Up</Button>
          <Button as={Link} to="/">Cancel</Button>
        </Button.Group>
      </Form>
    );
  }
}
