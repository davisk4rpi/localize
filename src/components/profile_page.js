import React, {Component} from 'react';
import { Image, List, Grid, Header } from 'semantic-ui-react';

export default class ProfilePage extends Component {
  render() {
    return (
      <div id="profile-page">
        <Image src="img/superman-profile.png" centered size='small' className="profile-photo"/>
        <Grid>
          <Grid.Row centered columns={12}>
            <Grid.Column width={8}>
              <List>
                <List.Item>
                  <Header>Name</Header>
                  Rick James
                </List.Item>
                <List.Item>
                  <Header>Zip Code</Header>
                  93101
                </List.Item>
                <List.Item>
                  <Header>More Stuff</Header>
                  Goes Here
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
