import React from 'react'
import {Button, makeStyles ,Box} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    button: {
      background: theme.palette.success.dark,
      border: 0,
      borderRadius: 10,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    card:{
        background:"pink",
        border:10,
        color:"blue"
    }
  }));

  



const PortfolioCard = () => {

const classes = useStyles();

    return (
        <div>
            <Box
                className={classes.card}
                boxShadow={4}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '17.7rem', height: '17rem' }}
            >
                boxShadow={3}
            </Box>
            <Button className={classes.button}>Hook</Button>;
        </div>
    )
}

export default PortfolioCard
