const Librarian = require("../models/Librarian");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.registerLibrarian = async (req, res) => {
  const { name, schoolname, email, password } = req.body;

  try {
    const librarian = new Librarian({ name, schoolname, email, password });
    await librarian.save();
    res.status(201).json({
      librarian_id: librarian._id,
      name: librarian.name,
      schoolname: librarian.schoolname,
      email: librarian.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginLibrarian = async (req, res) => {
  const { email, password } = req.body;

  try {
    const librarian = await Librarian.findOne({ email });

    if (!librarian || !(await librarian.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { librarian_id: librarian._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      token,
      name: librarian.name,
      schoolname: librarian.schoolname,
      email: librarian.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logoutLibrarian = (req, res) => {
  res.json({ message: "Logout successful" });
};
