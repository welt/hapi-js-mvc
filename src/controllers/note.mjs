/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Slugify from 'slug';
import Models from '../models/index.mjs';

const note = Models.Note;

export default class Note {
  static async create(request, _h) {
    return note.create({
      date: new Date(),
      title: request.payload.noteTitle,
      slug: Slugify(request.payload.noteTitle, { lower: true }),
      description: request.payload.noteDescription,
      content: request.payload.noteContent,
    });
  }

  static async read(request, _h) {
    console.log(request);
    return note.findOne({
      where: {
        slug: request.params.slug,
      },
    });
  }

  static async update(request, _h) {
    const values = {
      title: request.payload.noteTitle,
      description: request.payload.noteDescription,
      content: request.payload.noteContent,
    };
    const options = {
      where: {
        slug: request.params.slug,
      },
    };
    await note.update(values, options);
    return note.findOne(options);
  }

  static async delete(request, h) {
    await note.destroy({
      where: {
        slug: request.params.slug,
      },
    });
    return h.redirect('/');
  }
}
