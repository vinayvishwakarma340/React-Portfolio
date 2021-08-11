import React from 'react'

const ContactForm = () => {
    return (
        <div class="contact-form col-lg-8 col-md-12 col-sm-12">
                        <form action="">
                            <div class="row">
                                <div class="input-group">
                                    <input type="text" placeholder="Name" class="input-control" required />
                                </div>
                                <div class="input-group">
                                    <input type="text" placeholder="Email" class="input-control" required />
                                </div>
                                <div class="input-group">
                                    <input type="text" placeholder="Subject" class="input-control" required />
                                </div>
                                <div class="input-group">
                                    <textarea placeholder="Message" class="input-control" id="" cols="30" rows="10"
                                        required></textarea>
                                </div>
                                <div class="submit-btn">
                                    <button type="submit" class="btn " style={{marginBottom: "20px"}}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
    )
}

export default ContactForm
