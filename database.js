import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import config from './config.js';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    this.client = new MongoClient();
    this.client.connectWithUri(config.DB_URI);
  }
}

export default new Database().client?.database(config.DB_DATABASE);