import express from "express";
import tables from "../database/models/models.js";

const { Product, Review } = tables;
const productRoute = express.Router();

productRoute.post("/", async (req, res, next) => {
  try {
    const tableData = await Product.create(req.body);
    res.send(tableData);
  } catch (error) {
    console.log(error);
  }
});

productRoute.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll({
    include: Review,
  });
  res.send(allProducts);
});

productRoute.get("/:id", async (req, res, next) => {
  try {
    const getReview = await Product.findByPk(req.params.id);
    res.send(getReview);
  } catch (error) {
    console.log(error);
  }
});
productRoute.delete("/:id", async (req, res, next) => {
  try {
    const delReview = await Product.destroy({
      where: { product_id: req.params.id },
    });
    if (delReview > 0) {
      res.send("deleted");
    } else {
      res.status(404).send("not found");
    }
  } catch (error) {
    console.log(error);
  }
});
productRoute.put("/:id", async (req, res, next) => {
  try {
    const putReview = await Product.update(req.body, {
      where: { product_id: req.params.id },
      returning: true,
    });
    res.send(putReview);
  } catch (error) {
    console.log(error);
  }
});
export default productRoute;
