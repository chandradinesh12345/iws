import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dineshchandra2567@gmail.com",
    pass: "nqrjexrwwlpoigvq",
  },
});

// ✅ verify
transporter.verify((err, success) => {
  if (err) {
    console.log("VERIFY ERROR:", err);
  } else {
    console.log("EMAIL SERVER READY");
  }
});

// ✅ email route
app.post("/send-email", async (req, res) => {
  const { Name, Email, Phone, Service, Message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Contact Form" <dineshchandra2567@gmail.com>`,
      replyTo: Email,
      to: "dineshchandra2567@gmail.com",
      subject: "Contact Form Enquiry",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${Name}</p>
        <p><b>Email:</b> ${Email}</p>
        <p><b>Phone:</b> ${Phone}</p>
        <p><b>Service:</b> ${Service}</p>
        <p><b>Message:</b> ${Message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    res.status(500).json({ success: false });
  }
});

// ✅ test mail
app.get("/test-mail", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Test" <dineshchandra2567@gmail.com>`,
      to: "dineshchandra2567@gmail.com",
      subject: "Test Email",
      text: "Working ✅",
    });

    res.send("Email sent");
  } catch (err) {
    console.log("TEST ERROR:", err);
    res.send("Error");
  }
});



// ✅ start server
app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});