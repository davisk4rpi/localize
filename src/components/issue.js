import React, {Component} from 'react';
import { Card, Icon, Image, Button, Header, Form, Segment, Divider, Statistic, Grid, Modal } from 'semantic-ui-react';
import Rep from './rep';

export default class Issue extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      myRep: this.props.myRep
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.myRep.phone === undefined && nextProps.myRep) {
      this.setState({myRep: nextProps.myRep});
    }
  }

  toggleCard = () => {
    const obj = {...this.state.data, isExpanded: !this.state.data.isExpanded};
    this.setState({data: obj});
  }

  userVote = yeaOrNay => {
    const obj = {...this.state.data, userVote: yeaOrNay, userVoted: true};
    this.setState({data: obj});
  }

  handleCommentChange = (e, { name, value }) => {
    // this.setState({ [name]: value })
    const obj = {...this.state.data, userComment: value};
    this.setState({data: obj});
  }

  handleCommentSubmit = () => {
    const { userComment } = this.state.data;
    const obj = {...this.state.data, userCommented: true, userComment};
    this.setState({data: obj});
  }

  skippedComment = () => {
    const obj = {...this.state.data, skippedComment: true};
    this.setState({data: obj});
  }

  render() {
    const {
      isExpanded,
      userVote,
      userVoted,
      userCommented,
      userYeaCount,
      userNayCount,
      skippedComment,
      description,
      title,
      imgSrc,
    } = this.state.data;
    let descriptionComponent = '';
    let yeaOrNay = '';
    let commentForm = '';
    let thankYou = '';
    let openCardContent = '';

    if (isExpanded) {
      if (userCommented || skippedComment) {
        thankYou = (
          <div>
            <Header.Subheader>Thank You!</Header.Subheader>
            <p>Your opinion has been counted and emailed to your local officials.</p>
            <Segment>
              <Header>User Stats</Header>
              <Divider />
              <Statistic.Group>
                  <Statistic>
                    <Statistic.Value>
                      {userYeaCount}
                      <Icon name="thumbs up" size="small" color="green"/>
                    </Statistic.Value>
                    <Statistic.Label>Yeas</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>
                      {userNayCount}
                      <Icon name="thumbs down" size="small" color="red"/>
                    </Statistic.Value>
                    <Statistic.Label>Nays</Statistic.Label>
                  </Statistic>
              </Statistic.Group>
            </Segment>
            <div className="text-center">
              <Modal trigger={<Button color="green">Take Action!</Button>} closeIcon>
                <Modal.Content>
                  <Header>Follow Up With Your Rep</Header>
                  <Rep data={this.state.myRep} />
                </Modal.Content>
              </Modal>
            </div>
          </div>
        );
      }
      else if (userVoted) {
        const doOrDont = userVote === 'yea' ? 'do' : 'don\'t';
        commentForm = (
          <div className="comment-form">
            <Header>Thanks for your vote!</Header>
            <Header.Subheader>Why {doOrDont} you support this?</Header.Subheader>
            <Form name={title}>
              <Form.TextArea
                placeholder="Tell your local representatives your opinion..."
                name="userComment"
                onChange={this.handleCommentChange}
              />
              <Grid>
                <Grid.Row columns={3} stretched>
                  <Grid.Column>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <Form.Button type='button' onClick={this.handleCommentSubmit} color="green">Submit</Form.Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Button type='button' onClick={this.skippedComment}>Skip</Form.Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </div>
        );
      }
      else {
        descriptionComponent = (
          <Card.Content extra>
            {description}
          </Card.Content>
        );

        yeaOrNay = (
          <div className="text-center">
            <Button onClick={() => this.userVote('yea')} color="green">I Support</Button>
            <Button onClick={() => this.userVote('nay')} color="red">I Oppose</Button>
          </div>
        );
      }

      openCardContent = (
        <Card.Content extra>
          {yeaOrNay}
          {commentForm}
          {thankYou}
        </Card.Content>
      );
    }

    return (
      <Card fluid className="feed-item issue-card">
        <Card.Content className="flex-feed-item" onClick={this.toggleCard}>
          <Image src={imgSrc} floated='left' size='tiny'/>
          <Card.Header>
            {title}
            <Icon name="dropdown" />
          </Card.Header>
        </Card.Content>
        {descriptionComponent}
        {openCardContent}
      </Card>
    );
  }
}
