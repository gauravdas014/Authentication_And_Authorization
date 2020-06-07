const User = require("../models/userModel");
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This route is not yet implemented",
  });
};
exports.getUser = (req, res) => {
  try {
    const users = User.find();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "No user found",
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This route is not yet implemented",
  });
};
exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This route is not yet implemented",
  });
};
