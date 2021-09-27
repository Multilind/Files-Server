import { Router } from "express";
import { getAll, create } from "../../controllers/File";
const router = Router();

const id_palavra = "/:id_palavra";
router.get(id_palavra, getAll);
router.post(id_palavra, create);

export default router;
