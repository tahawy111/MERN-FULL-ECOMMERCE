import express from "express";
import Product from "../models/ProductModel.js";

const productRouter = express.Router();
/*
await 
بتوفر عليا 
then() و catch()
لان بدل ما اعمل Product.find().then((result) => {
     وresult تكون الداتا بتاعتي 
})
انا بعمل متغير او ثابت 
const data = await Product.find()
في الحالة دي المتغير اللي اسمه "data"
بيكون الداتا بتاعتي
*/
productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
productRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

export default productRouter;
