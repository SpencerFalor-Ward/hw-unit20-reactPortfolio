import React from "react";

function Project (props) {


return (
<>
<div>
<a
            href={props.url}
            id={props.id}
          >
            <div className="wrap">
              <p>{props.title}</p>
              <img 
              src={props.src}
                rel={props.rel}
                alt={props.alt}
              />
            </div>
          </a>
          <div className="githubLink">
          <a  href={props.code}>
          <i className="devicon-github-plain" id="projectIcon">
          </i>Check out the code here
          <i className="devicon-github-plain" id="projectIcon">
          </i>
          </a>
          </div>
          <div className="projectInfo">
            <li>{props.description}</li>
            <ul><u>Tech stack:</u> {props.tech}</ul>
          </div>
</div>
          </>

)
}

export default Project;