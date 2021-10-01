import express from "express";
import cors from "cors";
import { connectingDB } from "./database/db.js";
import productRoute from "./products/index.js";
import reviewRoute from "./reviews/index.js";
import categoryRoute from "./category/index.js";
import userRoute from "./users/index.js";
const server = express();

const port = process.env.PORT || 5000;
const whitelist = [process.env.FE_DEV_URL, process.env.FE_PROD_URL];
const corsOptions = {
  origin: function (origin, next) {
    console.log(origin);
    if (!origin || whitelist.indexOf(origin) !== -1) {
      next(null, true);
    } else {
      next(new Error(`origin ${origin} not allowed`));
    }
  },
};
server.use(cors(corsOptions));
server.use(express.json());
server.use("/products", productRoute);
server.use("/reviews", reviewRoute);
server.use("/category", categoryRoute);
server.use("/users", userRoute);
server.listen(port, async () => {
  console.log(`server running on port ${port}`);
  await connectingDB();
});
