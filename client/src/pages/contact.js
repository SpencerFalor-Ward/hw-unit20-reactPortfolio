import React, {useState} from "react"
import { Input, TextArea, FormBtn } from "../components/form";
import "../assets/css/style.css"
import API from "../utils/API";

function Contact () {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveMessage({
        name: formObject.name,
        id: formObject.id
      })
        // .then(res => loadBooks())
        .catch(err => console.log(err));
    }
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
                onChange={handleInputChange}
                // type="text"
                id="fname"
                name="firstName"
                placeholder="Your name..."
              />
                <label form="lname">Last Name </label>
              <Input
                onChange={handleInputChange}
                // type="text" 
                id="lname" 
                name="lastName"
                placeholder="Your last name..."
              />
                <label form="email">Email </label>
              <Input
                onChange={handleInputChange}
                // type="text" 
                id="email" 
                name="email" 
                placeholder="Email" 
              />
                <label form="message">Message </label>
              <TextArea
                onChange={handleInputChange}
                id="message"
                name="message"
                placeholder="Say summ'n....or not, school"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
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