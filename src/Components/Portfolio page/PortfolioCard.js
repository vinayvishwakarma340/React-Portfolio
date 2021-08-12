import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const style = {
    maxWidth:"265px",
    backgroundColor:"white"
}

export default function ImgMediaCard(props) {

    return (
        <Grid item >
            <Card style={style} elevation={10}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={props.Image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.Title}
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                           {props.Content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Grid>
    );
}
