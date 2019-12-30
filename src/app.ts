import express, { Application } from "express";
import cors from "cors";

import typeProductRoute from "./routes/typeProducRoute";
import globalErrorHandler from "./controllers/errorController";

const app: Application = express();

// SETTINGS
app.set("PORT", 3000 || process.env.PORT);

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/type-product", typeProductRoute);

// Si la app llega a este middleware es porque ocurrio un error en el medio
app.use(globalErrorHandler);

export default app;
