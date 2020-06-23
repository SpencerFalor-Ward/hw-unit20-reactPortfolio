const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require ('cors');


const PORT = process.env.PORT || 3001;


// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://sfwPortfolioV4:hEBx3WD_UH$Nz#w@ds231749.mlab.com:31749/heroku_5hg9bngx",
    {
    useCreateIndex: true,
    useNewUrlParser: true
}
);

const mongoose_db = mongoose.connection;

// Define middlewares here for parsing req.body:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Currently serving static assets
app.use(express.static(path.join(__dirname, "public")));

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