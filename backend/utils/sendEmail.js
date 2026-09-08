const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async (toEmail, otp) => {
  const mailOptions = {
    from: `"STYLEHUB" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Your STYLEHUB Password Reset OTP",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #0f1f3d; margin-bottom: 4px;">STYLE<span style="color:#2563eb;">HUB</span></h2>
        <p style="color: #475569; font-size: 14px;">
          You requested to reset your password. Use the OTP below to continue.
          This code expires in 10 minutes.
        </p>
        <div style="background: #eff6ff; border: 1px dashed #2563eb; border-radius: 10px; padding: 16px; text-align: center; margin: 20px 0;">
          <span style="font-size: 28px; letter-spacing: 6px; font-weight: 700; color: #2563eb;">
            ${otp}
          </span>
        </div>
        <p style="color: #94a3b8; font-size: 12px;">
          If you didn't request this, you can safely ignore this email.
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendOtpEmail };