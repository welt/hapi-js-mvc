/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Models from '../models/index.mjs';

export default async function Home(_request, _h) {
  const result = await Models.Note.findAll({
    order: [['date', 'DESC']],
  });

  return {
    data: {
      notes: result,
    },
    page: 'Home — Notes Board',
    description: 'Welcome to my Notes Board',
  };
}
