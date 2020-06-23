const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer")
const cors = require ('cors');
// const sendMail = require("./client/src/components/mail")

const PORT = process.env.PORT || 3001;


// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/sfwReactPortfolio",
    {
    useCreateIndex: true,
    useNewUrlParser: true
}
);

const mongoose_db = mongoose.connection;

// contact form code may not need
// app.get("/", (req, res) =>{
//   res.sendfile(path.join(_dirname, "public"));
// })

app.use(cors());

app.get("/", ()=>{
  resizeBy.send("Welcome to my form")
})

app.post("/api/forma", (req,res)=>{
  let data = req.body
  let smtpTransport = nodemailer.createTransport({
    service:"Gmail",
    port:465,
    auth: {
      user:"sfwportfoliomessages@gmail.com",
      password: "git4tm3!"
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

})

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define middlewares here for parsing req.body:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Currently serving static assets
app.use(express.static(path.join(__dirname, "public")));

// app.post("/api/contactForm", (req, res)=>{
//   const {subject, email, text} = req.body;
// console.log("Data", req.body)
// sendMail(email, subject, text, function (err, data){
//   if (err){
//     res.status(500).json({message:"Internal error"})
//   } else {
//     res.json({message:"email sent"})
//   }
// });
// });

// Add routes, both API and view
app.use(routes);

// Verifies connection to db on desired port. 
mongoose_db.once("open", function() {
  app.listen(PORT, () => {console.log("Server Listening on Port", PORT)});
})

// Throws error on failed db connection check. 
mongoose_db.on("error", function() {
  console.error("database failed to open");
})