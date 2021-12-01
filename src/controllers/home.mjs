/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Models from '../models/index.mjs';

export default class Home {
  static async read(_request, h) {
    const result = await Models.Note.findAll({
      order: [['date', 'DESC']],
    });
    return h.view('home', {
      Notes: result,
      page: 'Home — Notes Board',
      description: 'Welcome to my Notes Board',
    });
  }
}
