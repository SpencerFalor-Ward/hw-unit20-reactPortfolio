import React, {Component} from "react"
import { Input, TextArea, FormBtn } from "../components/form";
import "../assets/css/styles.css"
import axios from "axios";
import moment from "moment"

class  Contact extends Component {

state = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  time: moment().format('LLLL'),
  sent: false
}

//handle inputs

handleFirstName = (e)=>{
  this.setState({
    firstName: e.target.value
  })
}

handleLastName = (e)=>{
  this.setState({
    lastName: e.target.value
  })
}

handleEmail = (e)=>{
  this.setState({
    email: e.target.value
  })
}

handleMessage = (e)=>{
  this.setState({
    message: e.target.value
  })
}

handleFormSubmit = (event) => {
    event.preventDefault();
    let  messageData = {
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       email: this.state.email,
       message: this.state.message,
       time: this.state.time
    }

  axios.post("/api/messages", messageData)
    .then((res)=>{
      console.log(`handleformSubmit: ${res}`)
      this.setState({
        sent:true
      }, this.resetForm());
    })
    .catch((err)=>{
      console.log(`handleformSubmit: ${err}`)
    })
  }

resetForm=()=>{
this.setState({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  time: moment().format('LLLL'),
  sent: false
})

setTimeout(()=>{
  this.setState({
    sent:false,
  })
}, 3000)
}

render (){
return (
    <section id="main-info" className="clearfix">

      <h1 className="logo">
        <p>Contact</p>
        <a className="emailAddress" href="mailto:srpfw19@gmail.com">
          <u>Click here to contact me at srpfw19@gmail.com, or use the form below</u>
          </a>
          {/* <div>
          Or use the form below
          </div> */}
      </h1>
      <form 
       className="form-group form" 
       onSubmit={this.handleFormSubmit}
       >
        <div className="clearfix">
          <label form="fname">First Name </label>
        <Input
                onChange={this.handleFirstName}
                id="fname"
                name="firstName"
                placeholder="Your name..."
                value ={this.state.firstName}
                
              />
                <label form="lname">Last Name </label>
              <Input
                onChange={this.handleLastName}
                // type="text" 
                id="lname" 
                name="lastName"
                placeholder="Your last name..."
                value ={this.state.lastName}
              />
                <label form="email">Email </label>
              <Input
                onChange={this.handleEmail}
                // type="text" 
                id="email" 
                name="email" 
                placeholder="Email"
                value ={this.state.email}
                required
              />
                <label form="message">Message </label>
              <TextArea
                onChange={this.handleMessage}
                id="message"
                name="message"
                placeholder="Say summ'n....or not, school"
                value ={this.state.message}
              />
              <div className={this.state.sent ? "msg msgAppear" : "msg"}>You've communed with the aether</div>
              <FormBtn
                type="submit" 
                id="sendButton"
                // onClick={this.handleFormSubmit}
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
}

export default Contact