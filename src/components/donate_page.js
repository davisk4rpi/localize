import React, {Component} from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class DonatePage extends Component {
  render() {
    return (
      <div>
        <Grid.Row >
          <Grid.Column textAlign="center">
            <Header as='h2' textAlign="center">Help Us Make Local Government Great Again</Header>
            <Header as='h4' textAlign="center">Your donations help us expand to new municipalities</Header>
            <form name="_xclick" action="https://www.paypal.com/fk/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="business" value="me@mybiz.com" />
              <input type="hidden" name="item_name" value="Team In Training" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="amount" value="25.00" />
              <input id="paypal-btn" type="image" src="http://www.paypal.com/en_US/i/btn/x-click-butcc-donate.gif" border="0" name="submit" alt="Make payments with PayPal - it's fast, free and secure!" />
            </form>
          </Grid.Column>
        </Grid.Row>
      </div>
    )
  }
}
