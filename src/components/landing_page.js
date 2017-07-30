import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import LoginBox from './login_box.js'
import SignUpBox from './sign_up_box.js'

export default class LandingPage extends Component {
  render(){
    return(
      <Grid centered id="login-page">
        <Grid.Row centered>
          <Grid.Column width={14} textAlign='center'>
            <Header as='h1'>Welcome to Localize</Header>
            <Header as='h3'>Increasing voter engagement with local governments.</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Route exact path="/" component={LoginBox} />
          <Route exact path="/signup" component={SignUpBox} />
        </Grid.Row>
      </Grid>
    );
  }
}
