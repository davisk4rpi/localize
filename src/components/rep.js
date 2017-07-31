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
          <List.Icon name='twitter' size="small"/>
          <List.Content>
            <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
          </List.Content>
        </List.Item>
      );
    }
    const descriptionComponent = (
      <Card.Content extra>
        <Card.Description>
          <List>
            <List.Item>
              <List.Icon name='phone' size="small"/>
              <List.Content>
                <a href={`tel:+1${phone}`}>
                  {phone}
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' size="small"/>
              <List.Content>
                <a href={`mailto:${email}`}>{email}</a>
              </List.Content>
            </List.Item>
            {twitterContent}
          </List>
        </Card.Description>
      </Card.Content>
    );

    return (
      <Card fluid className="rep-card">
        <Card.Content className="flex-feed-item">
          <Image src={imgSrc} floated='left' shape="rounded" size='tiny'/>
          <Card.Header>
            {name}
            <Card.Meta>
              {position},
              <br/>
              {location}
            </Card.Meta>
          </Card.Header>
        </Card.Content>
        {descriptionComponent}
      </Card>
    );
  }
}
