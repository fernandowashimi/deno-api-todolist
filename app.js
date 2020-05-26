import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.js";

class App {
  constructor() {
    this.app = new Application();
    this.middlewares();
  }

  middlewares() {
    this.app.use(router.routes());
  }

  async init() {
    console.log("App running...");
    await this.app.listen({ port: 8080 });
  }
}

export default new App();