import React, {useEffect} from 'react';
import "rbx/index.css";
import 'typeface-roboto';
import { Navbar, Container, Column, Card} from "rbx";
import { Typography, makeStyles, Button, Divider } from '@material-ui/core';
import MenuBar from './MenuBar.js';


const useStyles = makeStyles(theme => ({
    container: {
      paddingTop: 20
    },
    card: {
      height: 500,
      width: 250,
      textAlign: 'center'
    },
    image: {
      paddingTop: 10, 
      paddingBottom: -20
    },
    divider: {
      marginTop: 10
    },
    title: {
      marginTop: -12, 
      height: 60,
      fontSize: 15
    },
    price: {
      marginTop: 10,
      fontSize: 15
    },
    description: {
      fontSize: 12,
      paddingBottom: 5
    },
    sizes: {
      fontSize: 10,
      width: 25,
      height: 25,
      marginRight: 5,
      marginTop: 15
    }
  }));

const LlamaList = ({llamas}) => {
    const classes = useStyles();
    const sizes = ['S', 'M', 'L', 'XL']
  
    return(
      <Column.Group vcentered multiline className={classes.container}>
        {llamas.map(llama => 
                <Column size="one-quarter">
                  <Card className={classes.card}>
                    <Card.Image className={classes.image}><img src={`/data/LlamaPics/${llama.sku}.jpg`} alt={llama.sku}/></Card.Image>
                    <Card.Content key={llama.sku}> 
                      <h5 className={classes.title}>
                        {llama.title}
                      </h5>
                      <Divider variant="middle" className={classes.divider}/>
                      <h6 className={classes.price}>{`$${llama.price}`}</h6>
                    </Card.Content>
                  </Card>
                </Column>)}
      </Column.Group>
    );
  }

const LlamaCatalog = ({pageswitch, llamas}) => {
    return (
        <div>
            <MenuBar pageswitch={pageswitch}/>
            <LlamaList llamas={llamas}/>
        </div>
    );
}

export default LlamaCatalog;