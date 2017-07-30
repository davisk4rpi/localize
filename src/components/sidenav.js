import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

export default class Sidenav extends Component {
  render() {
    const { visible } = this.props
    return (
      <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
        <Menu.Item name='home' as={Link} to='/profile'>
          <Icon name='user'/>
          Profile
        </Menu.Item>
        <Menu.Item as={Link} to='/feed' name='my-feed'>
          My Feed
        </Menu.Item>
        <Menu.Item as={Link} to='/reps' name='my-reps'>
          My Reps
        </Menu.Item>
        <Menu.Item as={Link} to='/categories' name='my-categories'>
          Issues I follow
        </Menu.Item>
        <Menu.Item name='rtv'>
          <a href="https://www.rockthevote.com/register-to-vote/" target="_blank" rel="noopener noreferrer">Register to Vote</a>
        </Menu.Item>
        <Menu.Item  as={Link} to='/volunteer' name='volunteer'>
          Volunteer
        </Menu.Item>
        <Menu.Item name='donate' as={Link} to='/donate'>
          Donate
        </Menu.Item>
        <Menu.Item name='settings' as={Link} to='/settings'>
          Settings
        </Menu.Item>
        <Menu.Item name='feedback' as={Link} to='/feedback'>
          Feedback
        </Menu.Item>
        <Menu.Item  as={Link} to='/' name='logout'>
          Logout
        </Menu.Item>
      </Sidebar>
    );
  }
}
