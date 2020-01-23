import React, {useEffect} from 'react';
import "rbx/index.css";
import 'typeface-roboto';
import { Navbar, Container } from "rbx";
import { Typography, makeStyles, Button} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    navbar: {
        height: 60,
        backgroundColor: '#f0f0f0',
    },
    menu: {
        marginLeft: 25
    },
    navbarItem: {
        fontFamily: 'roboto',
        marginRight: 18,
        marginBottom: 5,
        '&.is-tab:hover': {
            color: '#363636',
            borderBottomColor: '#363636'
        },
    }
}));


const MenuBar = ({pageswitch}) => {
    const classes = useStyles();

    return (
        <Navbar className={classes.navbar}>
            <Navbar.Menu className={classes.menu}>
                <Navbar.Segment align="start">
                <Navbar.Item className={classes.navbarItem} tab={true} onClick={pageswitch.homePageSwitch}>Home</Navbar.Item>
                <Navbar.Item className={classes.navbarItem} tab={true} onClick={pageswitch.aboutPageSwitch}>About Us</Navbar.Item>
                <Navbar.Item className={classes.navbarItem} tab={true} onClick={pageswitch.llamaPageSwitch}>Llama Collection</Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
      );
  }

export default MenuBar;