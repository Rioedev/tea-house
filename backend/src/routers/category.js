import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", get);
// router.post("/categories", checkPermission, create);
router.post("/categories", create);
// router.delete("/categories/:id", checkPermission, remove);
router.delete("/categories/:id", remove);
// router.patch("/categories/:id", checkPermission, update);
router.put("/categories/:id", update);

export default router;
