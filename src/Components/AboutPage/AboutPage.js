import React from 'react'
import Navbar from '../HomePage/Navbar'
import AboutImage from "./AboutImage"
import AboutText from "./AboutText/AboutText"

const AboutPage = () => {
    return (
        <section className="about-section ">
         <Navbar />
            <div className="container ">
                <div className="row">
                    <div className="section-title sec-padding">
                        <h2>about me</h2>
                    </div>
                </div>
            <div className="row">
                <AboutImage />
                <AboutText />
            </div>
            </div>

        </section>
    )
}

export default AboutPage
