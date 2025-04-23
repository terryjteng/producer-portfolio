document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".link-card");
  const clickSound = document.getElementById("8bit-click.mp3");
  const hoverSound = document.getElementById("8bit-hover.mp3");

  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 100) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
  });

  // Enable audio only after first user interaction
  function enableAudioPlayback() {
    document.body.removeEventListener("click", enableAudioPlayback);
    if (hoverSound) hoverSound.play().catch(() => {});
    if (clickSound) clickSound.play().catch(() => {});
  }

  document.body.addEventListener("click", enableAudioPlayback);

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play();
      }
    });

    card.addEventListener("mousedown", () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
      card.style.transform = "scale(0.95)";
    });

    card.addEventListener("mouseup", () => {
      card.style.transform = "scale(1.08)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("scrollNavbar");
  if (window.scrollY > 150) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-60px";
  }
});

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`
    });
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Failed to send email.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
