import express from "express";
import tables from "../database/models/models.js";
import s from "sequelize";
const { Op } = s;
const { Product, Review, Category, User } = tables;
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
  const allProducts = await tables.Product.findAll({
    include: [Review, { model: Category, through: { attributes: [] } }],
    where: req.query.search
      ? {
          [Op.or]: [
            // { price: { [Op.iLike]: `%${re.req.query.search}%` } },
            { name: { [Op.iLike]: `%${req.query.search}%` } },
            { category: { [Op.iLike]: `%${req.query.search}%` } },
          ],
        }
      : {},
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
