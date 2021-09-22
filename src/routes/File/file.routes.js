import { Router } from "express";
const router = Router();
import {getAll} from "../../controllers/File";

const id_palavra = "/:id_palavra";

router.get(id_palavra, getAll);

export default router;