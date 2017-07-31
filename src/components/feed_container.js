import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import _ from 'lodash';

import Issue from './issue';
import Rep from './rep';
import database from '../database';

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: {},
      myRep: {}
    };
  }

  componentDidMount() {
    let issues, myRep;
    database.ref('/issues').once('value').then( snap => {
      issues = snap.val();
      this.setState({ issues });
    });
    database.ref('/officials/o3').once('value').then( snap => {
      myRep = snap.val();
      this.setState({ myRep });
    });
  }

  componentDidUpdate() {
    let issues;
    database.ref('/issues').once('value').then( snap => {
      issues = snap.val();
      this.setState({ issues });
    });
  }

  render() {
    const {issues, myRep} = this.state;
    let issueId, issueObj;
    const issueComponents = _.map(issues, (value, key) => {
      issueId = key;
      issueObj = value;
      return (
        <Issue
          key={issueId}
          data={issueObj}
          myRep={myRep}
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
