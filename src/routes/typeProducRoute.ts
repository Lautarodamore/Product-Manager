import { Router } from "express";
import {
  getAllTypeProduct,
  createTypeProduct,
  getTypeProduct,
  deleteTypeProduct,
  updateTypeProduct
} from "../controllers/typeProductController";

const router: Router = Router();

router
  .route("/")
  .get(getAllTypeProduct)
  .post(createTypeProduct);

router
  .route("/:id")
  .get(getTypeProduct)
  .delete(deleteTypeProduct)
  .patch(updateTypeProduct);

export default router;
