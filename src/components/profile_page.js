import React, {Component} from 'react';
import { Image, List, Grid } from 'semantic-ui-react';

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Image src="img/superman-profile.png" centered size='small' className="profile-photo"/>
        <Grid>
          <Grid.Row centered columns={12}>
            <Grid.Column width={8}>
              <List>
                <List.Item>
                  <List.Header>Name</List.Header>
                  Rick James
                </List.Item>
                <List.Item>
                  <List.Header>Zip Code</List.Header>
                  93101
                </List.Item>
                <List.Item>
                  <List.Header>More Stuff</List.Header>
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
