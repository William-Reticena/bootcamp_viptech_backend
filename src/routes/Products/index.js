import { Router } from "express";

const router = new Router();

router.get("/products", (req, res) => {
  res.send("estou em produtodos");
});

export default router;
