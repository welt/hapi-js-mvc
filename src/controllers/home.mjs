/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Models from '../models/index.mjs';

export default class Home {
  static async read(_request, h) {
    const result = await Models.Note.findAll({
      order: [['date', 'DESC']],
    });
    return h.view('index', { Notes: result });
  }
}
