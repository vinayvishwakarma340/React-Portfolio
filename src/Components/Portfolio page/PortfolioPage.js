import React from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from '../HomePage/Navbar'
import PortfolioCard from './PortfolioCard';


const PortfolioPage = () => {

    return (
        <div>
        <Navbar />
            <h1>This is portfolio page</h1>
            <Grid container >
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
            </Grid>
        </div>
    )
}

export default PortfolioPage
