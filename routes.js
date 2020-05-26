import { Router } from "https://deno.land/x/oak/mod.ts";

import ListController from "./controllers/ListController.js";

const router = new Router();

router
  .get("/lists", ListController.index)
  .get("/lists/:id", ListController.show)
  .post("/lists", ListController.store)
  .put("/lists/:id", ListController.update)
  .delete("/lists/:id", ListController.delete);

export default router;