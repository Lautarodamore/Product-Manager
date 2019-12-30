import TypeProduct from "../models/TypeProducts";
import { Response, Request, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";

export const getAllTypeProduct = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const typeProducts = await TypeProduct.findAll();

    return res.status(200).json({
      status: "success",
      data: typeProducts,
      total: typeProducts.length
    });
  }
);

export const createTypeProduct = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const typeProduct = await TypeProduct.create(req.body);

    return res.status(200).json({
      status: "success",
      data: typeProduct
    });
  }
);
