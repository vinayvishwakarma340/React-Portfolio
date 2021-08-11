import React,{useState} from 'react'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'

const AboutText = () => {

    const [ show ,setShow ] = useState("education");

    const handleChange = (event)=>{
        const {name} = event.target;
        setShow(name);
        
    }

    return (
        <div className="about-text col-lg-8 col-md-12 my-3">
            <Skills />
            <div className="about-tab">
                <button onClick={handleChange} name="education" type="button" className="tab-item active" >education</button>
                <button onClick={handleChange} name="experience" type="button" className="tab-item ">experience</button>
            </div>

        {show==="education" ? <Education />: <Experience /> }
          
                            
            
            <a href="images/resume/MyITresume.pdf" className="btn" download="Resume">Download CV</a>
            <a href="/contact" className="btn">Contact me</a>

        </div>
    )
}

export default AboutText
