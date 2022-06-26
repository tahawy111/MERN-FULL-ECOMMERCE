import express from 'express';
import User from '../models/UserModel.js';
import { generateToken } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';
import OrderModel from '../models/OrderMedel.js';

const orderRouter = express.Router();

orderRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const order = new OrderModel({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
  })
);

export default orderRouter;
