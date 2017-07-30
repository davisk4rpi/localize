import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import LoginBox from './login_box.js'
import SignUpBox from './sign_up_box.js'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signup: false
    }
  }

  signUp = () => {
    this.setState({signup: true});
  }

  logIn = () => {
    this.setState({signup: false});
  }

  render(){
    let box;
    if (this.state.signup) {
      box = <SignUpBox handleClick={this.logIn}/>;
    } else {
      box = <LoginBox handleClick={this.signUp}/>;
    }
    return(
      <Grid centered id="login-page">
        <Grid.Row centered>
          <Grid.Column width={14} textAlign='center'>
            <Header as='h1'>Welcome to Localize</Header>
            <Header as='h3'>Increasing voter engagement with local governments accross the Country.</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          {box}
        </Grid.Row>
      </Grid>
    );
  }
}
