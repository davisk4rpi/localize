import React, {Component} from 'react';
import _ from 'lodash';

import Issue from './issue';
import database from '../database';

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: {},
    };
  }

  componentDidMount() {
    let issues;
    database.ref('/issues').once('value').then( snap => {
      issues = snap.val();
      console.log(issues);
      this.setState({ issues });
    });
  }

  render() {
    const {issues} = this.state;
    let issueId, issueObj;
    const issueComponents = _.map(issues, (value, key) => {
      issueId = key;
      issueObj = value;
      return (
        <Issue
          key={issueId}
          data={issueObj}
        />
      );
    });

    return (
      <div>
        {issueComponents}
      </div>
    );
  }
}
