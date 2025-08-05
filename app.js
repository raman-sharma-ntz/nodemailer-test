const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/send", async (req, res) => {
  const { provider, email, password, to, subject, message } = req.body;
  let smtpConfig;
  if (provider === "gmail") {
    smtpConfig = {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: email,
        pass: password,
      },
    };
  } else {
    smtpConfig = {
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: email,
        pass: password,
      },
    };
  }
  try {
    let transporter = nodemailer.createTransport(smtpConfig);
    await transporter.sendMail({
      from: email,
      to,
      subject,
      text: message,
    });
    res.render("index", { success: true });
  } catch (error) {
    let errorMsg = error.message;
    if (
      errorMsg.includes("535") ||
      errorMsg.toLowerCase().includes("authentication unsuccessful")
    ) {
      errorMsg =
        "Authentication failed. Please check your email, password, and if using MFA, use an app password. Ensure SMTP is enabled for your account.";
    }
    res.render("index", { success: false, error: errorMsg });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
