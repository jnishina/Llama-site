import React, {useEffect} from 'react';
import "rbx/index.css";
import 'typeface-roboto';
import { Navbar, Container } from "rbx";
import { Typography, makeStyles, Button } from '@material-ui/core';
import MenuBar from './MenuBar.js';

const useStyles = makeStyles(theme => ({
    siteDescription: {
        marginLeft: 20,
        width: 420
    },
    firstHeader: {
        marginTop: 40,
        marginLeft: 30,
        width: 700
    },
    secondHeader: {
        marginTop: 50,
        marginLeft: 35,
        width: 1000
    },
    bioDescription: {
        marginLeft: 35,
        marginBottom: 30,
        width: 800,
    },
    profilePic: {
        width: 250,
        height: 250,
        marginLeft: 35,
        marginBottom: 15,
        marginTop: 15,
    },
}));

const AboutUs = ({pageswitch}) => {
    const classes = useStyles();
    
    return (
        <div>
            <MenuBar pageswitch={pageswitch}/>
            <Typography variant="h1" className={classes.firstHeader}>Who we are</Typography>
            <div className={classes.siteDescription}>
            <Typography variant="body1" className={classes.siteDescription}>
                Battle Llama is a company that is committed to offering you the best llamas available to ride
                into battle. From emperor llamas to llamas that have plenty of secrets in their fur, you'll
                definitely find the llama for you that will help you be victorious in battle. 
            </Typography>
            </div>
            <Typography variant="h1" className={classes.secondHeader}>About the developer</Typography>
            <img src="/data/profilepic.JPG" className={classes.profilePic}/>
            <div className={classes.bioDescription}>

            <Typography variant="body1">
                My name is Jordan, and I am a computer science major and art minor at Northwestern University. Through
                taking classes on inclusivity and human-computer interaction, I've discovered my passion for the
                intersection of technology and accessibility. This passion is the primary reason I'm so excited to be a
                front-end engineer. I feel that, in such a role, I am able to make a very visible impact on the accessibility
                of technology as the responsibilities of a front-end engineer are strongly tied to how technology is presented.
                As a front-end engineer, I can also continue to pursue my interest in art but in a digitized way. 
                <br/><br/>
                
                About the process: I chose to keep the site as minimalistic as possible for two reasons: the first is that
                it makes the site more navigable and easy to look at. The second reason is that from an aesthetic perspective, 
                I prefer minimalism. I used a sans serif font and tried to make most text large so that the site would be easier to
                read, especially for those with visual impairments. Framework wise, I used React since it's the javascript
                framework that I'm most familiar and because it enables developers to create fast and dynamic sites while keeping
                the development process relatively simple. I chose to use RBX and Material UI as they simplify constructing the 
                user interface and also complement the minimalist aesthetic of the site well. 
            </Typography>
            </div>
        </div>

    );
}

export default AboutUs;