import express, { Application } from "express";

const app: Application = express();

// SETTINGS
app.set("PORT", 3000 || process.env.PORT);

// MIDDLEWARES

// ROUTES

export default app;
