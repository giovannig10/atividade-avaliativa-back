import express from "express";
import jogosController from "../controllers/jogosController.js";
const router = express.Router();
//rota para buscar todos os jogos
router.get("/", jogosController.getAll);
//rota para buscar jogos por id
router.get("/:id", jogosController.getJogosById);
//rota para criar jogos
router.post("/", jogosController.create);
//rota para atualizar jogos
router.put("/:id", jogosController.update);
//rota para deletar jogos
router.delete("/:id", jogosController.delete);
export default router;
