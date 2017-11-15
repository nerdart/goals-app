import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Input, Menu, Grid, Segment } from 'semantic-ui-react'

export default class MenuExampleSubMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => 
  this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const NavStyles = {
        styleMenu : {
            width: '309px',
            fontSize: '1.3rem',
            borderRightWidth:'1px',
            borderColor: 'lightGrey',
            height:'70rem'
        },
        sideNav : {
          paddingTop : '0'
        }
         
    }
    return (
        <Grid columns='equal'>
          <Grid.Column width={3} style={NavStyles.sideNav}>
             <Menu pointing secondary vertical style={NavStyles.styleMenu}>
                    {/* <Menu.Item>
                        <div>
                          <h1 className="alignMenu">Menu</h1>
                              <Icon name='outdent' />
                        </div>
                    </Menu.Item> */}
              <Menu.Item>
                    <Link to="/generate-goals"><Menu.Item icon="compass" name='Overarching goals'  active={activeItem === 'Overarching goals'} onClick={this.handleItemClick} /></Link>
                    <Link to="/weekinfocus"><Menu.Item icon="calendar check" name='Week in focus' active={activeItem === 'Week in focus'} onClick={this.handleItemClick} /></Link>
                    <Link to="/log"><Menu.Item icon="log out" name='Gratitude log' active={activeItem === 'Gratitude log'} onClick={this.handleItemClick} /></Link>
                    <Link to="/thingsinfuture"><Menu.Item icon ="line chart" name='Things to do in future' active={activeItem === 'Things to do in future'} onClick={this.handleItemClick} /></Link>
                    <Link to="/lists"><Menu.Item icon ="list layout" name='Lists' active={activeItem === 'Lists'} onClick={this.handleItemClick} /></Link>
              </Menu.Item>
           </Menu>
        </Grid.Column>  
       </Grid>    
    )
  }
}