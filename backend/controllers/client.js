import User from "../models/User.js";

export const getIntensity = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        user: users,
        success: true,
        message: "User is Successfully Fetched",
      });
    }
  } catch (error) {
    if (error) res.status(401).json({ error: true, message: error.message });
  }
};

export const getLikelihood = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        user: users,
        success: true,
        message: "User is Successfully Fetched",
      });
    }
  } catch (error) {
    if (error) res.status(401).json({ error: true, message: error.message });
  }
};

export const getRelevance = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        user: users,
        success: true,
        message: "User is Successfully Fetched",
      });
    }
  } catch (error) {
    if (error) res.status(401).json({ error: true, message: error.message });
  }
};

export const getYear = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        user: users,
        success: true,
        message: "User is Successfully Fetched",
      });
    }
  } catch (error) {
    if (error) res.status(401).json({ error: true, message: error.message });
  }
};

export const getCountry = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        user: users,
        success: true,
        message: "User is Successfully Fetched",
      });
    }
  } catch (error) {
    if (error) res.status(401).json({ error: true, message: error.message });
  }
};

export const getTopic = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        user: users,
        success: true,
        message: "User is Successfully Fetched",
      });
    }
  } catch (error) {
    if (error) res.status(401).json({ error: true, message: error.message });
  }
};
