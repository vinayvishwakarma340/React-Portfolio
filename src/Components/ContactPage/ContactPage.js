import React from 'react'
import Navbar from '../HomePage/Navbar'
import ContactForm from './ContactForm'
import ContactInfo from "./ContactInfo"

const ContactPage = () => {
    return (
        <section className="contact-page" id="contact-us">
         <Navbar />
            <div className="container">
                <div className="row ">
                        <div className="section-title sec-padding">
                            <h2>Contact Me</h2>
                        </div>
                </div>

                <div className="row">
                    <ContactForm />
                    <ContactInfo />
                </div>


            </div>
        </section>
    )
}

export default ContactPage
