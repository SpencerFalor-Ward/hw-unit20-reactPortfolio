const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer")
const ContactForm = require('../models/contactForm');

  router.post("/api/messages", (req,res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
      service:"Gmail",
      port:465,
      auth: {
        user:"sfwportfoliomessages@gmail.com",
        pass: "git4tm3!"
      }
    });
  
  let mailOptions = {
    from: data.email,
    to:"sfwportfoliomessages@gmail.com",
    subject: `Message from ${data.firstName}`,
    html:`
    <h3>Information</h3>
    <ul>
    <li>firstName: ${data.firstName}</li>
    <li>lastName: ${data.lastName}</li>
    <li>email: ${data.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
  <p>${data.time}</p>
    `
  };
  
  smtpTransport.sendMail(mailOptions, (error, res)=>{
    if(error) {
      res.send(error)
    } else {
      res.send("Success")
    }
  })
  
  smtpTransport.close();

  ContactForm.create(req.body,
    function (err, response) {
      console.log(`response: ${response}`)
      if (err){
        console.log(err)
        return
      }
      res.json(response)
    }
  )
  })

   module.exports = router;