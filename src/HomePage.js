import React, {useEffect} from 'react';
import "rbx/index.css";
import 'typeface-roboto';
import { Navbar, Container } from "rbx";
import { Typography, makeStyles, Button, Divider } from '@material-ui/core';
import background from './images/background.jpeg';
import MenuBar from './MenuBar.js';

const homePageStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100%',
    },
    title: {
        color: 'white',
        paddingTop: 200,
        marginLeft: 30
    },
    description: {
        color: 'white',
        marginLeft: 33,
        fontSize: 36
    },
    overlay: {
        backgroundColor: 'rgba(44, 45, 51, 0.3)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    button: {
        color: 'white',
        fontSize: 30,
        marginLeft: 25,
        marginTop: 50,
        marginBottom: 60,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'rgba(70, 70, 70, 0.3)'
        }
    },
    buttonText: {
        fontSize: 30
    },
    contact: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    }, 
    contactInfo: {
        fontSize: 13,
        marginTop: 7, 
        marginBottom: -10
    },
    divider: {
        backgroundColor: '#363636',
        width: 90, 
        display: 'inline-block',
        marginTop: -10
    }
  }));

  
  const HomePage = ({pageswitch}) => {
    const classes = homePageStyles();
    
    return (
      <div>
      <div className={classes.background}>
        <div className={classes.overlay}>
        <MenuBar pageswitch={pageswitch}/>
        <Typography variant="h1" className={classes.title}>Battle Llama</Typography>
        <Typography variant="subtitle1" className={classes.description}>
            Find the perfect llama to ride into battle
        </Typography>
        <Button className={classes.button} onClick={pageswitch.llamaPageSwitch}>
            <Typography variant="subtitle1" className={classes.buttonText}>Get started >></Typography>
        </Button>
        </div>
      </div>
      <div className={classes.contact}>
          <Typography variant="subtitle1" className={classes.contactInfo}>Contact Us</Typography>
          <Divider className={classes.divider}/>
          <Typography variant="body1" className={classes.contactInfo}>
            e: &nbsp; jordannishina2021@u.northwestern.edu <br/>
            p: &nbsp; (808) 202-9580
          </Typography>
      </div>
      </div>
    );
  }

export default HomePage;