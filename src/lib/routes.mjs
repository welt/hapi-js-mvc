/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Home from '../controllers/home.mjs';
import Note from '../controllers/note.mjs';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: Home,
    config: {
      description: 'Gets all the notes available',
    },
  },
  {
    method: 'POST',
    path: '/note',
    handler: Note.create,
    config: {
      description: 'Adds a new note',
      payload: {
        multipart: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: Note.read,
    config: {
      description: 'Gets the content of a note',
    },
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: Note.update,
    config: {
      description: 'Updates the selected note',
      payload: {
        multipart: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/note/{slug}/delete',
    handler: Note.delete,
    config: {
      description: 'Deletes the selected note',
    },
  },
];
export default routes;
