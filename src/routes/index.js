import { Router } from "express";
import Product from "./Products";

const router = new Router();

router.use("/product", Product);

export default router;
