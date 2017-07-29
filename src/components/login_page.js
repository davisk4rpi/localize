import React, { Component } from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';

export default class LoginPage extends Component {
  render(){
    return(
      <Grid centered id="login-page">
        <Grid.Row centered>
          <Grid.Column width={14}>
            <Header as='h1'>Welcome to Localize</Header>
            <Header as='h3'>Increasing voter engagement with local governments.</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Button.Group>
            <Button>Login</Button>
            <Button.Or />
            <Button positive>Sign Up</Button>
          </Button.Group>
        </Grid.Row>
      </Grid>
    );
  }
}
