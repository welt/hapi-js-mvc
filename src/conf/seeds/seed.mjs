/**
 * seed.js
 * Same as with the CommonJS modules
 * You will need to export a "seed" named function.
 */

// eslint-disable-next-line no-unused-vars
export default function seed(knex, _Promise) {
  return knex('Notes').del()
    .then(() => knex('tasks').insert([
      {
        title: 'Vaccuum the floors',
        slug: 'vaccuum-the-floors',
        description: 'Vaccum the living room and all bedroom',
        content: false,
        id: 1,
      },
      {
        title: 'Clean the car',
        slug: 'clean-the-car',
        description: 'Wash, wax and vacuum the car',
        content: false,
        id: 2,
      },
      {
        title: 'Buy groceries',
        slug: 'buy-groceries',
        description: 'Milk, bread, cheese, eggs, flour',
        content: true,
        id: 3,
      },
      {
        title: 'Lorem ipsum',
        slug: 'lorem-ipsum',
        description: 'Wash, wax and vacuum the car',
        content: false,
        id: 4,
      },
      {
        title: 'Dolor sit amet',
        slug: 'dolor-sit-amet',
        description: 'Milk, bread, cheese, eggs, flour',
        content: true,
        id: 5,
      },
    ]));
}
