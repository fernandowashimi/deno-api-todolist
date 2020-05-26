import database from "../database.js";

class List {
  constructor() {
    this.lists = database?.collection("lists");
  }

  insert(document) {
    return this.lists?.insertOne(document);
  }

  find() {
    return this.lists?.find();
  }

  findById(id) {
    return this.lists?.findOne({ _id: { $oid: id } });
  }

  updateOne(id, document) {
    return this.lists?.updateOne(
      { _id: { $oid: id } },
      { $set: document }
    );
  }

  deleteOne(id) {
    return this.lists?.deleteOne({ _id: { $oid: id } });
  }
}

export default new List();