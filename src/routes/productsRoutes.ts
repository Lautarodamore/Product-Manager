import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  insertarProductosYProviders
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

router.route("/providers").post(insertarProductosYProviders);

export default router;
