import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Grid, Button, Icon, Header } from 'semantic-ui-react';

import Sidenav from './sidenav';
import CategoriesContainer from './categories_container';
import FeedContainer from './feed_container';
import SettingsPage from './settings_page';
import VolunteerContainer from './volunteer_container';
import RepContainer from './rep_container';
import ProfilePage from './profile_page';
import DonatePage from './donate_page';
import FeedbackPage from './feedback_page';

export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: false
    };
  }

  toggleVisibility = () => {
    this.setState({ navVisible: !this.state.navVisible });
  }

  closeNav = () => {
    if (this.state.navVisible) {
      this.setState({navVisible: false});
    }
  }

  render() {
    const {navVisible} = this.state;
    return (
      <Grid onClick={navVisible ? this.closeNav : undefined}>
        <Grid.Row>
          <Grid.Column>
            <Button onClick={this.toggleVisibility} id="menu-btn" icon><Icon name='content' size='big'/></Button>
            <Header as="h1" floated="right" id="brand-logo">Localize</Header>
            <Sidenav visible={navVisible}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Route path="/categories" component={CategoriesContainer} />
            <Route path="/feed" component={FeedContainer} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/reps" component={RepContainer} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/volunteer" component={VolunteerContainer} />
            <Route path="/donate" component={DonatePage} />
            <Route path="/feedback" component={FeedbackPage} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
