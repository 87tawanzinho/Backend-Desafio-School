import express from "express";
import getGrade from "./controllers/getGrade";
import createGrade from "./controllers/createGrade";
const routes = express.Router();

routes.get("/", getGrade);
routes.post("/", createGrade);
export default routes;
