import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct
} from "./../controllers/productsControllers";
const router: Router = Router();

router
  .route("/")
  .get(getProducts)
  .post(createProduct);

router
  .route("/:id")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
