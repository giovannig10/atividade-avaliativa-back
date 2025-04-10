import express from "express";
import jogosController from "../controllers/jogosController.js";
const router = express.Router();
router.get("/", jogosController.getAll);
router.get("/:id", jogosController.getJogosById);
router.post("/", jogosController.create);
router.put("/:id", jogosController.update);
router.delete("/:id", jogosController.delete);
export default router;
