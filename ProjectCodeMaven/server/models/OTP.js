const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

// Define a function to send emails with proper Promise handling and error management
async function sendVerificationEmail(email, otp) {
  try {
    // Create a transporter and define email options
    // ... (your existing sender logic)
	console.log(email);
	console.log(otp);
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      emailTemplate(otp)
    );

    console.log("Email sent successfully:");
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    throw error; // Re-throw the error for controller handling
  }
}

// Define a post-save hook with async/await and improved logging
OTPSchema.pre("save", async function (next) {
  console.log("New document saved to database");

  if (this.isNew) {
    try {
      await sendVerificationEmail(this.email, this.otp);
    } catch (error) {
      console.error("Error sending email:", error.message);
      // Consider setting additional error properties on `this` for controller access
    }
  }

  next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
