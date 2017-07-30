import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import LandingPage from './components/landing_page.js';
import MenuContainer from './components/menu_container.js';

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={LandingPage} />
        <Route path="/:any" component={MenuContainer} />
      </Container>
    );
  }
}

export default App;
