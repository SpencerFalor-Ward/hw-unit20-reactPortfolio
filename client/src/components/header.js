import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import supImg from "../assets/images/supButton.png"
import myPageImg from "../assets/images/sitePlaceHolder2.PNG"


function Nav() {
  return (
    <header className="head sticky-top d-flex">

            <Navbar className="navbar navbarNav navbar-expand-lg navbar-light">

                <a className="navbar-brand" rel="thisIsMyPage" href= {myPageImg}>
                    <img src={supImg} width="30" height="30" className="d-inline-block align-top" alt="Sup"/>
                </a>
                <div className="header">
                <h1 id="name">
                    Spencer Falor-Ward</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon border"></span>
                </button>
                </div>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav justify-content-end">
                  <li className="nav-item active">
                    <Link className="nav-link" id="aboutlink" to="/about">About<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="cvlink" to="/cv">CV</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="portfoliolink" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" id="techSkillslink" to="/techSkills">Tech Skills</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="contactlink" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </Navbar>
    </header>
  );
}

export default Nav;



