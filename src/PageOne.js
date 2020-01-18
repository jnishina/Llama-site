import React, {useEffect} from 'react';
import "rbx/index.css";
import 'typeface-roboto';
import { Navbar, Container } from "rbx";
import { Typography, makeStyles } from '@material-ui/core';
import background from './images/background.jpeg';

const pageOneStyles = makeStyles(theme => ({
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '100%'
    },
    title: {
        color: 'white',
        paddingTop: 200,
        marginLeft: 30
    },
    description: {
        color: 'white',
        marginLeft: 30,
        fontSize: 36
    },
    overlay: {
        backgroundColor: 'rgba(44, 45, 51, 0.3)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
  }));
  
  const PageOne = () => {
    const styles = pageOneStyles();
    
    return (
      <div className={styles.background}>
        <div className={styles.overlay}>
        <Typography variant="h1" className={styles.title}>Battle Llama</Typography>
        <Typography variant="subtitle1" className={styles.description}>
            Find the perfect llama to ride into battle
        </Typography>
        </div>
      </div>
    );
  }

export default PageOne;