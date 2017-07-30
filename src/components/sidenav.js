import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

export default class Sidenav extends Component {
  render() {
    const { visible } = this.props
    return (
      <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
        <Menu.Item name='home'>
          <Icon name='user' />
          Profile
        </Menu.Item>
        <Menu.Item name='my-reps'>
          My Reps
        </Menu.Item>
        <Menu.Item name='rtv'>
          Register to Vote
        </Menu.Item>
        <Menu.Item name='volunteer'>
          Volunteer
        </Menu.Item>
        <Menu.Item name='settings'>
          Settings
        </Menu.Item>
        <Menu.Item name='logout'>
          Logout
        </Menu.Item>
      </Sidebar>
    );
  }
}
