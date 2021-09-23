import { Router } from "express";
const router = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
import {getAll, create} from "../../controllers/File";

const id_palavra = "/:id_palavra";
router.get(id_palavra, getAll);
router.post(id_palavra, upload.single('file'), create);

export default router;