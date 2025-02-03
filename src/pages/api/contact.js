import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Configure Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "lakkakulababblu@gmail.com",
          pass: "ofjo fqtu phrv powx",
        },
      });

      // Email message setup
      const mailOptions = {
        from: email,
        to: "lakkakulababblu@gmail.com",
        subject: `Contact Form LazerCode Submission from ${name}`,
        text: `You have a new message from ${name} \n\n where Mail id: (${email}):\n\nMessage : ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
