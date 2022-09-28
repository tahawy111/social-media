import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendMail from "../utils/sendMail.js";

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};

export const register = async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });
  if (findUser) {
    return res.status(400).json({ message: `This user is already exist` });
  }

  if (!validEmail(req.body.email)) {
    return res.status(400).json({ message: `Please enter valid email` });
  }

  if (req.body.password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }

  // const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const token = jwt.sign(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
    process.env.SENDMAIL_PASSWORD,
    { expiresIn: "15m" }
  );
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: req.body.email,
    subject: "TAHAWY SOCIALMEDIA ACTIVATION LINK",
    html: `
      <h1>Please click on link to activate</h1>
      <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
      <hr/>
      <p>This email contain senstive info</p>
      <p>${process.env.CLIENT_URL}</p>
  `,
  };
  try {
    await sendMail(mailOptions);
    return res.status(200).json({
      message: `Email ${req.body.email} has been sent an activation link`,
    });
  } catch (error) {
    return res.status(400).json({ message: `Error occured registration` });
  }
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ message: `User not found` });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: `Wrong password` });
  }

  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.SENDMAIL_PASSWORD,
    { expiresIn: "3d" }
  );

  return res.status(200).json({
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    token,
  });
};
