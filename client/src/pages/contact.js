import React from "react"

function Contact () {
return (
    <section id="main-info" class="clearfix">

      <h1 class="logo">
        <p>Contact</p>
      </h1>

      <form class="form-group form" action="/action_page.php">
        <div class="clearfix">
   
          <label for="fname">First Name </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name..."
          />
          <br />

          <label for="lname">Last Name </label>
          <input type="text" id="lname" placeholder="Your last name..." />
          <br />

          <label for="email">Email </label>
          <input type="text" id="email" placeholder="Email" />
          <br />

  
          <label for="message">Message </label>
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