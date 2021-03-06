import express from "express";
import tables from "../database/models/models.js";

const { Product, Review, User, Category } = tables;

const reviewRoute = express.Router();

reviewRoute.post("/", async (req, res, next) => {
  try {
    const revieData = await Review.create(req.body);
    res.send(revieData);
  } catch (error) {
    console.log(error);
  }
});

reviewRoute.get("/", async (req, res, next) => {
  try {
    const getReviews = await Review.findAll({
      include: [
        {
          model: Product,
          include: { model: Category, through: { attributes: [] } }, //here i'm including category inside article ,it works bcoz there is a manyTomany relation
          attributes: { exclude: ["createdAt"] },
        },
        User,
      ],
    });
    res.send(getReviews);
  } catch (error) {
    console.log(error);
  }
});
reviewRoute.get("/:id", async (req, res, next) => {
  try {
    const getReviews = await Review.findByPk(req.params.id, {
      include: Product,
    });
    res.send(getReviews);
  } catch (error) {
    console.log(error);
  }
});
reviewRoute.delete("/:id", async (req, res, next) => {
  try {
    const getReviews = await Review.destroy({
      where: { review_id: req.params.id },
    });
    res.send(getReviews);
  } catch (error) {
    console.log(error);
  }
});
export default reviewRoute;
