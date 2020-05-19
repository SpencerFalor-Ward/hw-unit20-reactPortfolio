import React from "react";

function Project (props) {


return (
<>
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
          <br />
          </>

)
}

export default Project;