import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ContactInfo = () => {
    return (
        <div className="contact-info col-lg-4 col-md-12 col-sm-12">
                        <div className="contact-info-item">
                            <h3>Email</h3>
                            <p style={{wordWrap:"break-word"}}>vinay.myjob@gmail.com</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Phone</h3>
                            <p>+919935851285</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Follow Me</h3>
                            <div className="social-links">
                                <a href="https://www.facebook.com/"><FacebookIcon /></a>
                                <a href="https://twitter.com/?lang=en"><TwitterIcon /></a>
                                <a href="https://www.instagram.com/accounts/login/"><InstagramIcon /></a>
                                <a href="https://linkedIn.com/"><LinkedInIcon /></a>
                                <a href="https://github.com/"><GitHubIcon /></a>
                            </div>
                        </div>
                    </div>
    )
}

export default ContactInfo
