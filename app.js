import { Application } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std@v0.50.0/flags/mod.ts";
import router from "./routes.js";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

class App {
  constructor() {
    this.app = new Application();
    this.middlewares();
  }

  middlewares() {
    this.app.use(router.routes());
  }

  async init() {
    console.log(`App running on PORT ${port} 🚀`);
    await this.app.listen({ port });
  }
}

export default new App();