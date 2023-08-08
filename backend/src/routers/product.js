import express from "express";
import { create, get, getAll, getOne, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();
router.get("/products", getAll);
router.get("/products/:id", get);
router.get("/products", getOne);
router.post("/products", checkPermission, create);
router.delete("/products/:id", checkPermission, remove);
router.put("/products/:id", checkPermission, update);

export default router;
