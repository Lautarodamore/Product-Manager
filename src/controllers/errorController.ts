import AppError from "../utils/AppError";
import { Request, NextFunction, Response } from "express";

const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.log("hola error");
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Ocurrio un error, intentelo mas tarde...";
  return res.status(err.statusCode).json({
    status: err.status,
    error: err.message,
    stack: err.stack
  });
};

export default globalErrorHandler;
