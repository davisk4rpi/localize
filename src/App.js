import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import LoginPage from './components/login_page.js';

class App extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
