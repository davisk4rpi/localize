import React, {Component} from 'react';
import { Form, Header } from 'semantic-ui-react';

export default class FeedbackPage extends Component {
  render() {
    return (
      <div>
        <Header as="h2">Send Us Your Thoughts About Localize!</Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Name' placeholder='Name' />
            <Form.Input label='Email' placeholder='Email@example.com' />
          </Form.Group>
          <Form.TextArea label='Message' placeholder='Tell us what your think...' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
