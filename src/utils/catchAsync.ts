import { Response, Request, NextFunction } from "express";
//Funcion creada para catchear los errores asyncronicos, y no estar escribiendo el mismo
// try catch tantas veces

export const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
