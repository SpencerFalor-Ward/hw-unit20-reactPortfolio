const nodemailer = require("nodemailer")
// const mailGun = require ('nodemailer-mailgun-transport')

// const auth = {
//     auth: {
//         api_key:"",
//         domain: ""
//     }
// }

// const transporter = nodemailer.createTransport(mailGun());

const sendMail = (email,subject,text, cb)=>{
    const mailOptions = {
        from: email,
        to: "srfalorward@ucdavis.edu",
        subject:subject,
        text:text
    }

    transporter.sendMail(mailOptions, function (err,data){
        if (err) {
            
            cb(err,null)
        } else {
            cb (null, data)
        }
    })
}

module.exports = sendMail;
