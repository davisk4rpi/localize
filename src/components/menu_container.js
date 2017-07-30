import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';

import Sidenav from './sidenav';
import FeedContainer from './feed_container';
import SettingsPage from './settings_page';
import VolunteerContainer from './volunteer_container';
import RepContainer from './rep_container';
import ProfilePage from './profile_page';

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
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <Sidenav visible={navVisible}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Route exact path="/feed" component={FeedContainer} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/reps" component={RepContainer} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/volunteer" component={VolunteerContainer} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
