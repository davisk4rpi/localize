import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import LandingPage from './components/landing_page.js';
import MenuContainer from './components/menu_container.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-img"></div>
        <Container>
          <Route exact path="/" component={LandingPage} />
          <Route path="/:any" component={MenuContainer} />
        </Container>
      </div>
    );
  }
}

export default App;
