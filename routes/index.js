const express = require("express");
const router = express.Router();
// const db = require("../models/contactForm.js");
const ContactForm = require('../models/contactForm');
const { resolve } = require("path");

router.post("/api/contactForm", (req, res) => {
    // if we want to add a value we can add the code "req.body.<property name we want> = <value that we want for that property>"
     ContactForm.create(req.body,
       function (err, response) {
         console.log(`response: ${response}`)
         if (err){
           console.log(err)
           return
         }
         // res.send(response); WHY is this SEND?
         res.json(response)
       }
     ).then(response =>{
       resolve(response) //?????
     });
   });

   module.exports = router;