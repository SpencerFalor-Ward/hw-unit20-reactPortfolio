import React from "react"
import "../assets/css/styles.css"
// import cvPg1 from "../assets/sfwDevCvPg1.jpg"
// import cvPg2 from "../assets/sfwDevCvPg2.jpg"
// import cvPg3 from "../assets/sfwDevCvPg3.jpg"



function Cv (){
    return (
    <section id="main-info-cv" className="clearfix">

    <h1 className="logo">
        <p>CV</p>
        </h1>
        <div className="cvBox">
            {/* <img src={cvPg1} alt="CV"/>
            <img src={cvPg2} alt="CV"/>
            <img src={cvPg3} alt="CV"/> */}
            <iframe title="Spencer Falor-Ward CV" className="cv" src="https://docs.google.com/document/d/e/2PACX-1vRXoXdVg4mpB08TetRubID3XQBKiYY1EGYAcR5q-q7_MDZZ6bGg-MEJiwCv2nBH8_EuudcrKMO-3Rvm/pub?embedded=true"></iframe>
        </div>
        </section>
    )
}

export default Cv;