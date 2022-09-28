import nodemailer from "nodemailer";

const sendMail = async (mailOptions) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "amer.vib582@gmail.com", pass: "mwigegzkbjjmgpmc" },
  });

  try {
    const res = await transport.sendMail(mailOptions);
    return res;
  } catch (error) {
    return error;
  }
};

export default sendMail;
