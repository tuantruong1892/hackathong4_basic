import { Express } from "express";
import notesControler from "../controllers/notesController";

const Router = (app: Express) => {
  app.use("/api/v1/notes", notesControler);
};
export default Router;
