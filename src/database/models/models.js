import Product from "./products.js";
import Review from "./reviews.js";
import Category from "./category.js";
import User from "./user.js";
import productCategory from "./productCategory.js";

import Cart from "./cart.js";
Product.hasMany(Review);
Review.belongsTo(Product);
//oneToMany
User.hasMany(Review);
Review.belongsTo(User);

//manyToMany
Product.belongsToMany(Category, {
  through: { model: productCategory, unique: false },
});
Category.belongsToMany(Product, {
  through: { model: productCategory, unique: false },
});

//manyTomay(Cart)or(userProduct)
Product.belongsToMany(User, {
  through: { model: Cart, unique: false },
});
User.belongsToMany(Product, {
  through: { model: Cart, unique: false },
});
export default { Product, Review, User, Category, Cart, productCategory };
