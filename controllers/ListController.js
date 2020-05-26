import List from "../models/List.js";

class ListController {
  async index({ response }) {
    const result = await List.find();

    response.body = result;
  }

  async show({ params, response }) {
    const result = await List.findById(params.id);

    response.body = result;
  }

  async store({ request, response }) {
    const { value } = await request.body();
    const result = await List.insert(value);

    response.body = result;
  }

  async update({ params, request, response }) {
    const { value } = await request.body();
    const result = await List.updateOne(params.id, value);

    response.body = result;
  }

  async delete({ params, response }) {
    const result = await List.deleteOne(params.id);

    response.body = result;
  }
}

export default new ListController();