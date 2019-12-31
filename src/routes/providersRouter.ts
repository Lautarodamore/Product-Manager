import { Router } from "express";
import {
  createProvider,
  deleteProvider,
  getProviders,
  getProvider,
  updateProvider
} from "./../controllers/providersControllers";

const router: Router = Router();

router
  .route("/")
  .get(getProviders)
  .post(createProvider);

router
  .route("/:id")
  .get(getProvider)
  .patch(updateProvider)
  .delete(deleteProvider);

export default router;
