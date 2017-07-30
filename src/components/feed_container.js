import React, {Component} from 'react';
import _ from 'lodash';
import { Button, Grid } from 'semantic-ui-react';
import Sidenav from './sidenav';
import Issue from './issue';

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // should be empty!
      issues: [
        {
          i1: {
            isExpanded: false,
            userVoted: false,
            userVote: '',
            userYeaCount: 12,
            userNayCount: 4,
            userCommented: false,
            userComment: '',
            isPast: false,
            passed: undefined,
            title: 'Smoking in Public Spaces',
            description: 'Some people want to blow smoke in your face as you walk by. Do you support an ordinance to stop this?',
            imgSrc: 'img/smoker-lady.jpg'
          }
        },
        {
          i2: {
            isExpanded: false,
            userVoted: false,
            userVote: '',
            userYeaCount: 30,
            userNayCount: 16,
            userCommented: false,
            userComment: '',
            isPast: true,
            passed: true,
            title: 'Recycled water for Self Storage',
            description: 'Dang, that is a sweet earth: ROUND!',
            imgSrc: 'img/recycled-water.jpg'
          }
        }
      ],
      navVisible: false
    };
    this.closeNav = this.closeNav.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({ navVisible: !this.state.navVisible });
  }

  closeNav() {
    if (this.state.navVisible) {
      this.setState({navVisible: false});
    }
  }

  render() {
    const {navVisible, issues} = this.state;
    const issueComponents = issues.map( issue => {
      let issueId, issueObj;
      _.forOwn(issue, (value, key) => {
        issueId = key;
        issueObj = value;
      });
      return (
        <Issue
          key={issueId}
          data={issueObj}
        />
      );
    });

    return (
      <Grid onClick={navVisible ? this.closeNav : undefined}>
        <Grid.Row>
          <Grid.Column>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {issueComponents}
          </Grid.Column>
        </Grid.Row>
        <Sidenav visible={navVisible} />
      </Grid>
    );
  }
}
