import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class SignUpBox extends Component {
  render() {
    return (
      <Form>
        <Form.Input label='Email' placeholder='optimus@prime.com' size="large" />
        <Form.Input label='Password' placeholder='*********' type='password' size="large" />
        <Form.Input label='Verify Password' placeholder='*********' type='password' size="large" />
        <Button.Group>
          <Button as={Link} to="/categories" id="login-btn">Sign Up</Button>
          <Button onClick={this.props.handleClick}>Cancel</Button>
        </Button.Group>
      </Form>
    );
  }
}
