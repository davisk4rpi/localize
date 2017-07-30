import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import LandingPage from './components/landing_page.js';
import FeedContainer from './components/feed_container.js';

class App extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route path="/feed" component={FeedContainer} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
