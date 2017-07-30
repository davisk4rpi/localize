import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Grid, Button, Icon } from 'semantic-ui-react';

import Sidenav from './sidenav';
import FeedContainer from './feed_container';
import SettingsPage from './settings_page';
import VolunteerContainer from './volunteer_container';
import RepContainer from './rep_container';
import ProfilePage from './profile_page';
import DonatePage from './donate_page';

export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: false
    };
  }

  toggleVisibility = () => {
    console.log(this.state);
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
            <Sidenav visible={navVisible}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Route path="/feed" component={FeedContainer} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/reps" component={RepContainer} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/volunteer" component={VolunteerContainer} />
            <Route path="/donate" component={DonatePage} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
