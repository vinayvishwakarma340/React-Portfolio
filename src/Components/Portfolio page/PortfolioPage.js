import React from 'react'
import Navbar from '../HomePage/Navbar'
import PortfolioCard from './PortfolioCard';
import { Container, Grid } from '@material-ui/core';
import {Images} from "./CardImageAPI"

const PortfolioPage = () => {

    return (
        <div>
            <Navbar />
            <Container style={{ marginTop: "20px" }} >
                <Grid container spacing={3}>
                    {
                        Images.map((item,index)=>{
                        return <PortfolioCard key={index} Title={item.title} Content={item.content} Image={item.src} />
                        })
                    }
                </Grid>

            </Container>

        </div>
    )
}

export default PortfolioPage
