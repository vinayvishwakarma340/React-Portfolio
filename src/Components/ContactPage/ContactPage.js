import React from 'react'
import Navbar from '../HomePage/Navbar'
import ContactForm from './ContactForm'
import ContactInfo from "./ContactInfo"

const ContactPage = () => {
    return (
        <section class="contact-page" id="contact-us">
         <Navbar />
            <div class="container">
                <div class="row ">
                        <div class="section-title sec-padding">
                            <h2>Contact Me</h2>
                        </div>
                </div>

                <div class="row">
                    <ContactForm />
                    <ContactInfo />
                </div>


            </div>
        </section>
    )
}

export default ContactPage
