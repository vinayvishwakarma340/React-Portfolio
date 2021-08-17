import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light">
                        <div className="container-fluid">
                          <a className="navbar-brand" href="/"><img src="images/brandLogo.png" width="80px" alt="" /></a>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                              <Link to="/" className="nav-link">Home</Link>
                             <Link to="/about" className="nav-link">About us</Link>
                             <Link to="/contact" className="nav-link">Contact us</Link>                             
                             <Link to="/portfolio" className="nav-link">Portfolio</Link>
                             

                            </ul>
                          </div>
                        </div>
                      </nav>
        </div>
    )
}

export default Navbar
