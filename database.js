import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    this.client = new MongoClient();
    this.client.connectWithUri(`mongodb+srv://${Deno.env.get('DB_USERNAME')}:${Deno.env.get('DB_PASSWORD')}@todolist-ndrda.mongodb.net/test?retryWrites=true&w=majority`);
  }
}

export default new Database().client?.database(Deno.env.get('DB_NAME'));