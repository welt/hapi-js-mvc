/* eslint-disable no-unused-vars */
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (_request, _h) => 'All the notes will appear here',
    config: {
      description: 'Gets all the notes available',
    },
  },
  {
    method: 'POST',
    path: '/note',
    handler: (_request, _h) => 'New note',
    config: {
      description: 'Adds a new note',
    },
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: (_request, _h) => 'This is a note',
    config: {
      description: 'Gets the content of a note',
    },
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: (_request, _h) => 'Edit a note',
    config: {
      description: 'Updates the selected note',
    },
  },
  {
    method: 'GET',
    path: '/note/{slug}/delete',
    handler: (_request, _h) => 'This note no longer exists',
    config: {
      description: 'Deletes the selected note',
    },
  },
];
export default routes;
