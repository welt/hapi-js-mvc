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

  static async read(request, h) {
    const singleNote = await note.findOne({
      where: {
        slug: request.params.slug,
      },
    });
    const allNotes = await Models.Note.findAll({
      order: [['date', 'DESC']],
    });
    return h.view('note', {
      Note: singleNote.dataValues,
      Notes: allNotes,
      page: 'Single Note',
      description: 'Look at this note',
    });
  }

  static async update(request, h) {
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
    return h.view('note', {
      Note: note.findOne(options),
      page: 'Single Note',
      description: 'Look at this note',
    });
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
