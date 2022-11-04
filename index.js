import nodemailer from "nodemailer"

async function main() {

  const transporter = nodemailer.createTransport({
    service:'hotmail',
    auth: {
      user: 'youremail@hotmail.com', // generated ethereal user
      pass: 'yourpassword', // generated ethereal password
    },
  });
  const mailOptions = {
    from: 'from@hotmail.com', // sender address
    to: 'to@email.com', // receiver (use array of string for a list)
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err) => {
    if(err)
      console.log(err)
 });
}

main().catch(console.error);
