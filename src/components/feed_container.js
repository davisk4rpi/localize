import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import Sidenav from './sidenav';

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { navVisible: false };
    this.closeNav = this.closeNav.bind(this);
  }

  toggleVisibility = () => this.setState({ navVisible: !this.state.navVisible })

  closeNav() {
    if (this.state.navVisible) {
      this.setState({navVisible: false});
    }
  }

  render() {
    const {navVisible} = this.state;
    return (
      <div onClick={navVisible ? this.closeNav : undefined}>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidenav visible={navVisible}/>
      </div>
    );
  }
}
