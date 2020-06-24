const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema ({
    firstName: {type: Schema.Types.String},
    lastName: {type: Schema.Types.String},
    email: {type: Schema.Types.String},
    message: {type: Schema.Types.String},
    pubDate: {
        type: Schema.Types.Date,
        default: Date.now,
      },
})

const ContactFrom = mongoose.model("ContactForm", ContactSchema,"sfwReactPortfolio");

module.exports = ContactFrom;