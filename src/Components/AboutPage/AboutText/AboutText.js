import React, { useState } from 'react'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'

const AboutText = () => {

    const [show, setShow] = useState("education");
    const [btnClass1, setBtnClass1] = useState(true);
    const [btnClass2, setBtnClass2] = useState(false);

    const handleChange = (event) => {
        const { name, className } = event.target;
        if (name === "education" && !className.includes("active")) {
            setBtnClass1(true);
            setBtnClass2(false);
        }
        if (name === "experience" && !className.includes("active")) {
            setBtnClass1(false);
            setBtnClass2(true);
        }
        setShow(name);

    }

    return (
        <div className="about-text col-lg-8 col-md-12 my-3">
            <Skills />
            <div className="about-tab">
                <button onClick={handleChange} name="education" type="button" className={btnClass1 ? "tab-item active" : "tab-item"} >education</button>
                <button onClick={handleChange} name="experience" type="button" className={btnClass2 ? "tab-item active" : "tab-item"}>experience</button>
            </div>

            {show === "education" ? <Education /> : <Experience />}



            <a href="images/resume/MyITresume.pdf" className="btn" download="Resume">Download CV</a>
            <a href="/contact" className="btn">Contact me</a>

        </div>
    )
}

export default AboutText
