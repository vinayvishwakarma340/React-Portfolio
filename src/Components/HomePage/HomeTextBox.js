import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

// automatic typing library
import Typed from 'react-typed';

const HomeTextBox = () => {
    return (
      
            <div className="home-text col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="text-box">
                            <p>hi there, I'm</p>
                                
                            <h1>
                                <Typed
                                    strings={["Vinay Vishwakarma"]}
                                    typeSpeed={60}
                                    backSpeed={70}
                                    loop
                                /> 
                            </h1>
                            <h2><span style={{color:"#562770"}}>Full Stack</span> Web Developer</h2>
                            <a href="tel:9935851285" className="btn"><PhoneIcon style={{margin:"auto 8px"}} />Call me</a>
                            <a href="mailTo:vinay.myjob@gmail.com" className="btn"><MailIcon style={{margin:"auto 8px"}}/>Send Email</a>
                        </div>
                    </div>
       
    )
}

export default HomeTextBox
