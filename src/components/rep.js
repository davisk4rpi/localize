import React, {Component} from 'react';
import { Card, Image, List } from 'semantic-ui-react';

export default class Rep extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };
  }

  render() {
    const {phone, twitter, email, location, position, name, imgSrc} = this.state.data;
    let twitterContent;
    if (twitter) {
      twitterContent = (
        <List.Item>
          <List.Icon name='twitter' />
          <List.Content>
            <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
          </List.Content>
        </List.Item>
      );
    }
    const descriptionComponent = (
      <Card.Description>
        <List>
          <List.Item>
            <List.Icon name='phone' />
            <List.Content>
              <a href={`tel:+1${phone}`}>
                {phone}
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <a href={`mailto:${email}`}>{email}</a>
            </List.Content>
          </List.Item>
          {twitterContent}
        </List>
      </Card.Description>
    );

    return (
      <Card fluid className="rep-card">
        <Card.Content>
          <Image src={imgSrc} floated='left' shape="circular" size='tiny'/>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {position}, {location}
          </Card.Meta>
          {descriptionComponent}
        </Card.Content>
      </Card>
    );
  }
}
