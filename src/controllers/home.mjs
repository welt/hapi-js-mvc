/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import note from '../models/note.mjs';

export default class Home {
  static async read(_request, h) {
    const result = await note.findAll({
      order: [['date', 'DESC']],
    });
    return h.view('home', {
      Notes: result,
      page: 'Home — Notes Board',
      description: 'Welcome to my Notes Board',
    });
  }
}
