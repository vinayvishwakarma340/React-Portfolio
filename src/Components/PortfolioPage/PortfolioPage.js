import React from "react";
import Navbar from "../HomePage/Navbar";
import PortfolioCard from "./PortfolioCard";
import { Container, Grid } from "@material-ui/core";
import { CardContent } from "./CardContentAPI";
import Project from "./Project";

const PortfolioPage = () => {

  return (
    <div className="main">
      <Navbar />
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          {CardContent.map((item, index) => {
            return (
              <PortfolioCard
                key={index}
                id={index}
                Title={item.title}
                Content={item.content}
                Image={item.src}
                Url={item.url}
               
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default PortfolioPage;
