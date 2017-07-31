import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class LoginBox extends Component {
  render() {
    return (
      <Form>
        <Form.Input label='Email' placeholder='optimus@prime.com' size="large" />
        <Form.Input label='Password' placeholder='*********' type='password' size="large" />
        <Button.Group>
          <Button as={Link} to="/feed" id="login-btn">Login</Button>
          <Button onClick={this.props.handleSignUpClick} type="button">Sign Up</Button>
        </Button.Group>
      </Form>
    );
  }
}
