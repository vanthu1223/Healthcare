const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../../json/data.json");
const middlewares = jsonServer.defaults();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "vtvt25092004@gmail.com",
    pass: "lcfd bbam qioh ijik",
  },
});


server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(jsonServer.bodyParser)
server.post('/sendEmail', async (req, res) => {
  const { email } = req.body
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Beautiful Spa" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "Forgot password", // Subject line
    text: "hello", // plain text body
    html: "<b>Your new password: 123123</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
  res.jsonp({ message: "ok" })
})
server.use(router);
server.listen(4001, () => {
  console.log("JSON Server is running");
});

module.exports = server;
