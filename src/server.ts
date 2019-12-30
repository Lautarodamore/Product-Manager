import app from "./app";
import { Server } from "http";

process.on("uncaughtException", err => {
  console.log("Uncaught Exepction! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const server: Server = app.listen(app.get("PORT"), async () => {
  console.log(`Server is online on port ${app.get("PORT")}`);
});

process.on("unhandledRejection", err => {
  console.log("Unhandled Rejection! Shutting down...");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
