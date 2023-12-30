import express from "express";
import getGrade from "./controllers/getGrade";
import createGrade from "./controllers/createGrade";
import deleteGrade from "./controllers/deleteGrade";
const routes = express.Router();

routes.get("/", getGrade);
routes.post("/", createGrade);
routes.delete("/:id", deleteGrade);
export default routes;
