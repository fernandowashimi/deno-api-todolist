import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts"

const { DB_USERNAME, DB_PASSWORD, DB_NAME } = config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    this.client = new MongoClient();
    this.client.connectWithUri(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@todolist-ndrda.mongodb.net/test?retryWrites=true&w=majority`);
  }
}

export default new Database().client?.database(DB_NAME);