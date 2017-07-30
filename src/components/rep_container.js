import React, {Component} from 'react';
import _ from 'lodash';
import { Header } from 'semantic-ui-react';

import Rep from './rep';
import database from '../database';

export default class RepContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officials: {},
    };
  }

  componentDidMount() {
    let officials;
    database.ref('/officials').once('value').then( snap => {
      officials = snap.val();
      this.setState({ officials });
    });
  }

  render() {
    const {officials} = this.state;
    let officialId, officialObj;
    const officialComponents = _.map(officials, (value, key) => {
      officialId = key;
      officialObj = value;
      return (
        <Rep
          key={officialId}
          data={officialObj}
        />
      );
    });

    return (
      <div id="rep-page">
        <Header as="h2">My Representatives</Header>
        {officialComponents}
      </div>
    );
  }
}
