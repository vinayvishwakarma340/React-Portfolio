import React from "react";
import Navbar from "../HomePage/Navbar";
import ProjectCard from "./ProjectCard";
import { Container, Grid } from "@material-ui/core";
import { CardContent } from "./CardContentAPI";

const PortfolioPage = () => {

  return (
    <div className="main">
      <Navbar />
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          {CardContent.map((item, index) => {
            return (
              <ProjectCard
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
