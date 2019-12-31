import Product from "../models/Products";
import { Response, Request, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import AppError from "../utils/AppError";

export const getProducts = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.findAll();

    return res.status(200).json({
      status: "success",
      data: products,
      total: products.length
    });
  }
);

export const createProduct = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const product = await Product.create(req.body);

    return res.status(200).json({
      status: "success",
      data: product
    });
  }
);

export const getProduct = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { id } = req.params;

    const product = await Product.findOne({
      where: {
        id
      }
    });

    if (!product) {
      next(new AppError("El producto que esta buscando no se encuentra", 500));
    }

    return res.status(200).json({
      status: "success",
      data: product
    });
  }
);

export const deleteProduct = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await Product.destroy({
      where: {
        id
      }
    });

    return res.status(200).json({
      status: "success",
      data: "El producto ha sido eliminado"
    });
  }
);

export const updateProduct = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { id } = req.params;

    const product = await Product.findOne({
      where: {
        id
      }
    });

    if (product) {
      product.update(req.body);
    } else {
      next(new AppError("El producto que esta buscando no se encuentra", 500));
    }

    return res.status(200).json({
      status: "success",
      data: product
    });
  }
);
