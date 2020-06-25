const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require ('cors');
require('dotenv').config()


const PORT = process.env.PORT || 3001;


// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/sfwReactPortfolio",
    {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  useFindAndModify: false
}
);



mongoose.set('useCreateIndex', true);

// mongoose.createConnection(
//   process.env.MONGODB_URI || "mongodb://localhost/sfwReactPortfolio", 
//   {   
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

// /** */ const Book = mongoConnection.model('Book', bookSchema /*, 'COLLECTION_NAME'*/);

const mongoose_db = mongoose.connection;

// Define middlewares here for parsing req.body:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Currently serving static assets
app.use(express.static(path.join(__dirname, "public")));


// Add routes, both API and view
app.use(routes);

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  app.use("/hw-unit20-reactPortfolio/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
})}

// // Verifies connection to db on desired port. 
mongoose_db.once("open", function() {
  app.listen(PORT, () => {console.log("Server Listening on Port", PORT)});
})

// // Throws error on failed db connection check. 
mongoose_db.on("error", function() {
  console.error("database failed to open");
})

// Start the API server
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );
