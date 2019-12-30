import { Router } from "express";
import {
  getAllTypeProduct,
  createTypeProduct
} from "../controllers/typeProductController";

const router: Router = Router();

router
  .route("/")
  .get(getAllTypeProduct)
  .post(createTypeProduct);

/*
router.route('/:id').get(
    //getController
).patch(
    //updateController
).delete(
    //deleteController
)*/

export default router;
