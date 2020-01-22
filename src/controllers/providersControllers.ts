import Provider from "../models/Providers";
import { Response, Request, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import AppError from "../utils/AppError";

export const getProviders = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const providers = await Provider.findAll({
      attributes: ["id", "nombre", "email", "dni", "empresa", "created_at"]
    });

    return res.status(200).json({
      status: "success",
      data: providers,
      total: providers.length
    });
  }
);

export const createProvider = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const provider = await Provider.create(req.body);

    return res.status(200).json({
      status: "success",
      data: provider
    });
  }
);

export const getProvider = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { id } = req.params;

    const provider = await Provider.findOne({
      where: {
        id
      },
      attributes: ["id", "nombre", "email", "dni", "empresa", "created_at"]
    });

    if (!provider) {
      next(new AppError("El proveedor que esta buscando no se encuentra", 500));
    }

    return res.status(200).json({
      status: "success",
      data: provider
    });
  }
);

export const deleteProvider = catchAsync(
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await Provider.destroy({
      where: {
        id
      }
    });

    return res.status(200).json({
      status: "success",
      data: "El proveedor ha sido eliminado"
    });
  }
);

export const updateProvider = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { id } = req.params;

    const provider = await Provider.findOne({
      where: {
        id
      },
      attributes: ["id", "nombre", "email", "dni", "empresa", "created_at"]
    });

    if (provider) {
      provider.update(req.body);
    } else {
      next(new AppError("El proveedor que esta buscando no se encuentra", 500));
    }

    return res.status(200).json({
      status: "success",
      data: provider
    });
  }
);
