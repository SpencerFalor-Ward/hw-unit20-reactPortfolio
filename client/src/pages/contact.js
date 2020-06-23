import React, {Component} from "react"
import { Input, TextArea, FormBtn } from "../components/form";
import "../assets/css/styles.css"
// import API from "../utils/API";
import axios from "axios";


const moment = require("moment")

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
      </h1>

      {/* <form className="form-group form" action="/action_page.php"> */}
      <form 
       className="form-group form" 
      //  method= 'POST'
       onSubmit={this.handleFormSubmit}
       >
        <div className="clearfix">
          <label form="fname">First Name </label>
        <Input
                onChange={this.handleFirstName}
                // type="text"
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

// const  Contact = (props) => {

//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   // const [sent, setSent] = useState(false);

 

//   // function handleFormSubmit(event) {
//   //   
//   //     API.saveMessage({
//   //       firstName: fname,
//   //       lastName: lname,
//   //       email: email,
//   //       message: message,
//   //       time: moment().format('LLLL')
//   //     })
//   //     .then((response) => {
//   //       console.log(response)})
//   //       .catch(err => console.log(err));
//   // };

//   function handleFormSubmit (event) {
//     event.preventDefault();
//     const messageData = {
//        firstName: fname,
//        lastName: lname,
//        email: email,
//        message: message,
//        time: moment().format('LLLL')
//     }
//     axios.post("/api/messages", messageData)
//     .then((res)=>{
//       console.log(`handleformSubmit: ${res}`)
//       // props.history.push("/contact")
//       // setSent(true)
//     })
//     // }, resetForm())
//     .catch((err)=>{
//       console.log(`handleformSubmit: ${err}`)
//     })
//   }

// // reset inital data
// // function resetForm (){
// //   setFname(""),
// //   setLname(""),
// //   setEmail(""),
// //   setMessage(""),
// //   setTimeout (()=>{
// //     sent.setSent(false)
// //   }, 3000)
// // }


// return (
//     <section id="main-info" className="clearfix">

//       <h1 className="logo">
//         <p>Contact</p>
//       </h1>

//       {/* <form className="form-group form" action="/action_page.php"> */}
//       <form 
//        className="form-group form" 
//        method= 'POST'
//        onSubmit={handleFormSubmit.bind(this)}
//        >
//         <div className="clearfix">
//           <label form="fname">First Name </label>
//         <Input
//                 onChange={e => setFname(e.target.value)}
//                 // type="text"
//                 id="fname"
//                 name="firstName"
//                 placeholder="Your name..."
//                 value ={fname}
                
//               />
//                 <label form="lname">Last Name </label>
//               <Input
//                 onChange={e => setLname(e.target.value)}
//                 // type="text" 
//                 id="lname" 
//                 name="lastName"
//                 placeholder="Your last name..."
//                 value ={lname}
//               />
//                 <label form="email">Email </label>
//               <Input
//                 onChange={e => setEmail(e.target.value)}
//                 // type="text" 
//                 id="email" 
//                 name="email" 
//                 placeholder="Email"
//                 value ={email} 
//               />
//                 <label form="message">Message </label>
//               <TextArea
//                 onChange={e => setMessage(e.target.value)}
//                 id="message"
//                 name="message"
//                 placeholder="Say summ'n....or not, school"
//                 value ={message}
//               />
//               <div className="msg">You've communed with the aether</div>
//               <FormBtn
//                 type="submit" 
//                 id="sendButton"
//               >
//                 Send into the aether
//               </FormBtn>
//           {/* <input  value="Send into the aether" />
//           <br /> */}
//         </div>
//       </form>
//     </section>
// )

// }
// export default Contact