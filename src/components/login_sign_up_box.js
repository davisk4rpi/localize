import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class LoginSignUpBox extends Component {
  render() {
    return (
      <Button.Group>
        <Button as={Link} to="/login" id="login-btn">Login</Button>
        <Button.Or />
        <Button positive>Sign Up</Button>
      </Button.Group>
    );
  }
}
