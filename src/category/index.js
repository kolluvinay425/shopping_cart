import express from "express";
import Category from "../database/models/category.js";

const categoryRoute = express.Router();

categoryRoute
  .route("/")
  .post(async (req, res, next) => {
    try {
      const postCategory = await Category.create(req.body);
      res.send(postCategory);
    } catch (error) {
      console.log(error);
    }
  })
  .get(async (req, res, next) => {
    try {
      const listCategories = await Category.findAll();
      res.send(listCategories);
    } catch (error) {
      console.log(error);
    }
  });

export default categoryRoute;
