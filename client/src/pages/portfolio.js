import React from "react"
import Project from "../components/project"
import arr from "../utils/projectData"


function Portfolio (){

return (

      <section id="main-info" className="clearfix">
        <h1 className="logo">
          <p>Portfolio</p>
        </h1>
        <div className="projectGrid">
            {arr.map(project => {
                return(
            <Project {...project} />)}
        )}
        </div>
      </section>
              )
      }

      export default Portfolio;