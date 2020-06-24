import React from "react"
import Project from "../components/project"
import "../../public/assets/css/styles.css"
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
            url={project.url} 
            id={project.id} 
            src={project.src} 
            rel={project.rel} 
            alt={project.alt} 
            title={project.title} 
            />)}
        )}
        </div>
      </section>
              )
      }

      export default Portfolio;