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
            <Project 
            key={project.id} 
            url={project.id} 
            id={project.id} 
            src={project.id} 
            rel={project.id} 
            alt={project.id} 
            title={project.id} 
            />)}
        )}
        </div>
      </section>
              )
      }

      export default Portfolio;