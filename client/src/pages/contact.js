import React from "react"

function Contact () {
return (
    <section id="main-info" className="clearfix">

      <h1 className="logo">
        <p>Contact</p>
      </h1>

      <form className="form-group form" action="/action_page.php">
        <div className="clearfix">
   
          <label form="fname">First Name </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name..."
          />
          <br />

          <label form="lname">Last Name </label>
          <input type="text" id="lname" placeholder="Your last name..." />
          <br />

          <label form="email">Email </label>
          <input type="text" id="email" placeholder="Email" />
          <br />

  
          <label form="message">Message </label>
          <textarea
            id="message"
            name="message"
            placeholder="Say summ'n....or not, school"
          >
          </textarea>
          <br />
          <input type="submit" id="sendButton" value="Send into the aether" />
          <br />
        </div>
      </form>
    </section>
)

}
export default Contact