import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => console.log("Connected To Database"))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 5000;

// Here we get the error from async function
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log(`Serve at http://localhost:${port}`));
