import express from "express";
import cors from "cors";
import { connectingDB } from "./database/db.js";
import productRoute from "./products/index.js";
import reviewRoute from "./reviews/index.js";
const server = express();

const port = process.env.PORT || 5000;
server.use(cors());
server.use(express.json());
server.use("/products", productRoute);
server.use("/reviews", reviewRoute);
server.listen(port, async () => {
  console.log(`server running on port ${port}`);
  await connectingDB();
});