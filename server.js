const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds139801.mlab.com:39801/heroku_msl34wsv",
    {
    useCreateIndex: true,
    useNewUrlParser: true
}
);

const mongoose_db = mongoose.connection;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Currently serving static assets
app.use(express.static(path.join(__dirname, "public")));
// app.use("/Images", express.static("Images")) //fix path for images

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