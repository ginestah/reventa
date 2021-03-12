const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "wearegreatteam";

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
    });

    await user.save();

    const payload = {
      username: user.username,
      email: user.email,
      _id: user._id,
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token, payload });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token, payload });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("products");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id).populate("products");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const usersProducts = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const product = new Product(req.body);
    product.userId = user;
    await product.save();
    user.products.push(product);
    await user.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const {
      name,
      description,
      // photos: [...imageAdd],
      price,
      shipping,
      contactInfo,
      location,
    } = req.body;
    const payload = {
      photos: [...req.body.photos],
      name,
      description,
      // photos: [...imageAdd],
      price,
      shipping,
      contactInfo,
      location,
      userId: user,
    };

    // console.log(req.body);
    // console.log(payload);
    const product = new Product(payload);

    await product.save();
    user.products.push(product);
    await user.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
  verify,
  getUsers,
  getUser,
  usersProducts,
  createProduct,
};
