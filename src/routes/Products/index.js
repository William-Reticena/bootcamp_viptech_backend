import { Router } from "express";
import ProductController from "../../app/controllers/Product";
import uploadImage from "../../../config/multer";
const router = new Router();

router.get("/", ProductController.index);
router.post("/", uploadImage.single("file"), ProductController.store);
router.get("/:id", ProductController.show);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
