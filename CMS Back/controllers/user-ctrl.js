const userModels = require("../models/user-models");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const http = require("http");

const getUsers = async (req, res, next) => {
  const users = await userModels.find();
  res.json({ users });
};

const getOneUser = async (req, res, next) => {
  const paramId = req.params.pid;
  const user = await userModels.users.findById(paramId);
  res.status(200).json({ user });
};

const signup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!(email && password && firstname && lastname)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await userModels.users.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist , Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await userModels.users.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: encryptedPassword,
      image: "http://localhost:8000/public/uploads/profile.png",
    });

    const token = jwt.sign({ user_id: user._id, email }, "CMS_KEY", {
      expiresIn: "2h",
    });
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await userModels.users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id, email }, "CMS_KEY", {
        expiresIn: "24h",
      });

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    } else {
      return res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res, next) => {
  const paramId = req.params.pid;
  const { firstname, lastname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  const user = await userModels.users.findByIdAndUpdate(paramId, {
    $set: {
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: encryptedPassword,
      image: process.env.PORT || "http://localhost:8000/" + req.file.path,
    },
  });
  res.status(200).json({ user });
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
exports.updateUser = updateUser;
exports.getOneUser = getOneUser;
