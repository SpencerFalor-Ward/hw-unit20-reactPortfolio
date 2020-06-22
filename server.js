const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const sendMail = require("./client/src/components/mail")

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
// app.use("/Images", express.static("Images")) //fix path for images

app.post("/api/contactForm", (req, res)=>{
  const {subject, email, text} = req.body;
console.log("Data", req.body)
sendMail(email, subject, text, function (err, data){
  if (err){
    res.status(500).json({message:"Internal error"})
  } else {
    res.json({message:"email sent"})
  }
});
});

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