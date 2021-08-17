import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";

const style = {
  maxWidth: "265px",
  backgroundColor: "rgba(255,255,255,0.25)",
};

// VanillaTilt style start

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
const options = {
  max: 8,
  perspective: 1000,
  speed: 300,
  transition: true,
  glare: true,
  "max-glare": 1,
  "glare-prerender": false,
  "mouse-event-element": null,
};

// VanillaTilt style End

export default function ImgMediaCard(props) {

  return (
    <Grid item>
      <Tilt options={options}>
       <a href={props.Url} style={{textDecoration:"none"}}>
          <Card style={style} >
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
                  <strong>Technologies: </strong>{props.Content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </a>
      </Tilt>
    </Grid>
  );
}
