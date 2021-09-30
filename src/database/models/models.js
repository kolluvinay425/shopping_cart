import Product from "./products.js";
import Review from "./reviews.js";
import Category from "./category.js";
import User from "./user.js";

Product.hasMany(Review);
Review.belongsTo(Product);
//oneToMany
User.hasMany(Review);
Review.belongsTo(User);

//manyToMany
Product.belongsToMany(Category, { through: "productCategory" });
Category.belongsToMany(Product, { through: "productCategory" });

export default { Product, Review, User, Category };
