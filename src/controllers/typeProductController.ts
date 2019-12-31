import TypeProduct from "../models/TypeProducts";
import { Response, Request, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import AppError from "../utils/AppError";

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

export const getTypeProduct = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { id } = req.params;

    const typeProduct = await TypeProduct.findOne({
      where: {
        id
      }
    });

    if (!typeProduct) {
      next(
        new AppError(
          "El tipo de producto que esta buscando no se encuentra",
          500
        )
      );
    }

    return res.status(200).json({
      status: "success",
      data: typeProduct
    });
  }
);

export const deleteTypeProduct = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await TypeProduct.destroy({
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

export const updateTypeProduct = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { id } = req.params;

    const typeProduct = await TypeProduct.findOne({
      where: {
        id
      }
    });

    if (typeProduct) {
      typeProduct.update(req.body);
    } else {
      next(
        new AppError(
          "El tipo de producto que esta buscando no se encuentra",
          500
        )
      );
    }

    return res.status(200).json({
      status: "success",
      data: typeProduct
    });
  }
);
