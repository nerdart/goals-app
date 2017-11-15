import React, { Component } from 'react'
import { Menu,Icon,Grid } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const navbarStyles = {
        styleNavbar :{
            padding:'0 1rem',
            marginBottom:'0',
            height:'52px'
        },
        title : {
            fontSize:'1.7em',
            color:'#3C4551'
        },
        iconStyle : {
            // color:'#2CD696',
            fontSize : '1.3em',
            paddingLeft: '14rem'
        },
        paddingBottom : {
            paddingBottom: '0'
        }
        

    }
    return (
        <Grid columns='equal'>
        <Grid.Column width={16} style={navbarStyles.paddingBottom}>
            <Menu style={navbarStyles.styleNavbar}>
                <Menu.Item header> <span style={navbarStyles.title}>LIFE</span><Icon style={navbarStyles.iconStyle} name='outdent' /></Menu.Item>
                <Menu.Item name='aboutUs' position='right' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
                <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
                <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
            </Menu>
       </Grid.Column>
       </Grid>
    )
  }
}