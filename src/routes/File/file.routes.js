import { Router } from "express";
const router = Router();
import {getAll, create} from "../../controllers/File";

const id_palavra = "/:id_palavra";
router.get(id_palavra, getAll);
router.post(id_palavra, create);

export default router;