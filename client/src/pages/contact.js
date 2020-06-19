import React, {useState} from "react"
import { Input, TextArea, FormBtn } from "../components/form";
import "../assets/css/style.css"
import API from "../utils/API";

function Contact () {

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  function handleFormSubmit(event) {
    event.preventDefault();
      API.saveMessage({
        firstName: fname,
        lastName: lname,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response)})
        .catch(err => console.log(err));
  
  };

return (
    <section id="main-info" className="clearfix">

      <h1 className="logo">
        <p>Contact</p>
      </h1>

      <form className="form-group form" action="/action_page.php">
        <div className="clearfix">
          <label form="fname">First Name </label>
        <Input
                onChange={e => setFname(e.target.value)}
                // type="text"
                id="fname"
                name="firstName"
                placeholder="Your name..."
              />
                <label form="lname">Last Name </label>
              <Input
                onChange={e => setLname(e.target.value)}
                // type="text" 
                id="lname" 
                name="lastName"
                placeholder="Your last name..."
              />
                <label form="email">Email </label>
              <Input
                onChange={e => setEmail(e.target.value)}
                // type="text" 
                id="email" 
                name="email" 
                placeholder="Email" 
              />
                <label form="message">Message </label>
              <TextArea
                onChange={e => setMessage(e.target.value)}
                id="message"
                name="message"
                placeholder="Say summ'n....or not, school"
              />
              <FormBtn
                onClick={handleFormSubmit}
                type="submit" 
                id="sendButton"
              >
                Send into the aether
              </FormBtn>
          {/* <input  value="Send into the aether" />
          <br /> */}
        </div>
      </form>
    </section>
)

}
export default Contact