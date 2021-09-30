import express from "express";
import User from "../database/models/user.js";
import models from "../database/models/models.js";

const { Review } = models;
const userRoute = express.Router();

userRoute.post("/", async (req, res, next) => {
  try {
    const postUser = await User.create(req.body);
    res.send(postUser);
  } catch (error) {
    console.log(error);
  }
});
userRoute.get("/", async (req, res, next) => {
  try {
    const userList = await User.findAll({ include: Review });
    res.send(userList);
  } catch (error) {}
});

export default userRoute;
