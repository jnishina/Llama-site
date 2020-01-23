import React, {useEffect} from 'react';
import "rbx/index.css";
import 'typeface-roboto';
import { Navbar, Container, Column, Card, Button} from "rbx";
import { Typography, makeStyles, Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuBar from './MenuBar.js';
import { minWidth } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
    group: {
      marginTop: 20,
      marginLeft: 25,
      minWidth: 1024
    },
    card: {
      height: 505,
      width: 225,
      textAlign: 'center'
    },
    image: {
      height: 296,
    },
    divider: {
      marginTop: 0
    },
    description: {
      // height: 60,
      marginTop: 55
    },
    title: {
      marginBottom: 7,
      fontSize: 15
    },
    price: {
      marginTop: 10,
      fontSize: 15
    },
    button: {
      backgroundColor: '#828282',
      borderColor: '#828282',
      height: 40,
      marginTop: 20,
      marginBottom: 7,
      '&:hover': {
          backgroundColor: 'rgba(70, 70, 70, 0.3)', 
      }
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
      paddingLeft: 10,
      paddingRight: 10
    },
    list: {
      width: 250,
    }
  }));

const handlePrices = (price) => {
    var formatted = price.toFixed(2);
    return formatted;
};


const LlamaList = ({llamas, cartstate, drawerstate}) => {
    const classes = useStyles();

    const addToCart = (llama) => {
      cartstate.setCart(cartstate.cart.concat(llama));
      console.log(cartstate.cart);
    };
  
    return(
      <Column.Group vcentered multiline className={classes.group}>
        {llamas.map(llama => 
                <Column size={3} key={llama.sku}>
                  <Card className={classes.card}>
                    <Card.Image className={classes.image}><img src={`/data/LlamaPics/${llama.sku}.jpg`} alt={llama.sku}/></Card.Image>
                    <Card.Content className={classes.description}> 
                      <h5 className={classes.title}>
                        {llama.title}
                      </h5>
                      <Divider variant="middle" className={classes.divider}/>
                      <h6 className={classes.price}>{`$${handlePrices(llama.price)}`}</h6>
                      <Button className={classes.button} onClick={() => {addToCart(llama); drawerstate.toggleDrawer('right', true)}}>
                        <Typography className={classes.buttonText}>Add to cart</Typography>
                      </Button>
                    </Card.Content>
                  </Card>
                </Column>)}
      </Column.Group>
    );
  };

const LlamaCatalog = ({pageswitch, llamas, cartstate}) => {
  const classes = useStyles();  
  const [drawer, setDrawer] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    console.log("hi");
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }


    setDrawer({ ...drawer, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItemText primary={'hello'} />
      </List>
    </div>
  );


  return (
        <div>
            <Drawer anchor="right" open={drawer.right} onClose={toggleDrawer('right', false)}>
              {sideList('right')}
            </Drawer>
            <MenuBar pageswitch={pageswitch}/>
            <LlamaList llamas={llamas} cartstate={cartstate} drawerstate={{drawer, setDrawer, toggleDrawer}}/>
        </div>
    );
};

export default LlamaCatalog;