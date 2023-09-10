import express from "express";
import * as tshirtController from "./tshirtController.js";

const tshirtRoutes = express.Router();

tshirtRoutes.route("/tshirts/all").get(tshirtController.getAllTshirts);

export default tshirtRoutes;
