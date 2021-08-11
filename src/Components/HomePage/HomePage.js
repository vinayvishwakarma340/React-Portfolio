import React from 'react'
import Navbar from './Navbar'
import HomeTextBox from './HomeTextBox'
import HomeImage from './HomeImage'



const HomePage = () => {
    return (
            <section className="home-section" >            
                <Navbar />
                <div className="container" style={{padding: "5% 0"}}>
                    <div className="row mx-0">
                        <HomeTextBox />
                        <HomeImage />                   
                    </div>
                </div>
             </section>
    )
}

export default HomePage
