const express = require('express');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) newObj[key] = obj[key];
  });
  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  return res
    .status(500)
    .json({ status: 'error', message: 'This route is not yet defined' });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // Create error if user posts password data
  if (req.body.password || req.body.passwordConfirm)
    return new AppError(
      'This route is not for password updates, please use secure /updateMyPassword route',
      400
    );
  // Update user document
  const filteredBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getUser = (req, res) => {
  return res
    .status(500)
    .json({ status: 'error', message: 'This route is not yet defined' });
};
exports.createUser = (req, res) => {
  return res
    .status(500)
    .json({ status: 'error', message: 'This route is not yet defined' });
};
exports.updateUser = (req, res) => {
  return res
    .status(500)
    .json({ status: 'error', message: 'This route is not yet defined' });
};
exports.deleteUser = (req, res) => {
  return res
    .status(500)
    .json({ status: 'error', message: 'This route is not yet defined' });
};
