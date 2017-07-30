import React, {Component} from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

export default class Issue extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };

    this.toggleCard = this.toggleCard.bind(this);
  }



  componentDidMount() {
  }

  toggleCard() {
    const obj = {...this.state.data, isExpanded: !this.state.data.isExpanded};
    this.setState({data: obj});
  }

  render() {
    const {isExpanded, description, title, imgSrc} = this.state.data;
    const descriptionComponent = isExpanded ?
      <Card.Description>
        {description}
      </Card.Description>
      : '';

    const yeaOrNay = isExpanded ?
      <Card.Content extra>
        <Button>Yea</Button>
        <Button>Nay</Button>
      </Card.Content>
      : '';

    return (
      <Card onClick={this.toggleCard} fluid>
        <Image src={imgSrc} />
        <Card.Content>
          <Card.Header>
            {title}
            <Icon name="dropdown" />
          </Card.Header>
          {/*<Card.Meta>*/}
            {/*<span className='date'>*/}
              {/*Joined in 2015*/}
            {/*</span>*/}
          {/*</Card.Meta>*/}
          {descriptionComponent}
        </Card.Content>
        {yeaOrNay}
        {/*<Card.Content extra>*/}
          {/*<a>*/}
            {/*<Icon name='user' />*/}
            {/*22 Friends*/}
          {/*</a>*/}
        {/*</Card.Content>*/}
      </Card>
    );
  }
}
