/* eslint-disable import/prefer-default-export */
/**
 * seed.js
 * Same as with the CommonJS modules
 * You will need to export a "seed" named function.
 */

// eslint-disable-next-line no-unused-vars
export function seed(knex, _Promise) {
  return knex('Notes').del()
    .then(() => knex('Notes').insert([
      {
        title: 'Vaccuum the floors',
        slug: 'vaccuum-the-floors',
        description: 'Vaccum the living room and all bedroom',
        content: 'Sed eu lorem elementum purus accumsan accumsan quis sit amet velit. Morbi vulputate nec lacus nec consequat. Nunc dictum odio ac sem facilisis pharetra vitae eu eros. Sed non nunc eros. Maecenas quis fringilla mi. Morbi nulla ligula, tristique vitae diam id, imperdiet ornare massa. Cras sed facilisis sapien. Fusce semper condimentum augue eget euismod. ',
        id: 1,
      },
      {
        title: 'Clean the car',
        slug: 'clean-the-car',
        description: 'Wash, wax and vacuum the car',
        content: 'Donec sit amet vehicula neque. Phasellus ut lorem a lorem eleifend aliquet. Mauris accumsan sed massa sit amet bibendum. Cras eget nulla lacinia, mattis nunc eget, laoreet orci. Phasellus vel nunc eros. Aliquam quis erat sit amet nunc luctus pharetra. Quisque et nisi sapien. Etiam nec sapien at ipsum maximus tincidunt in sed ex',
        id: 2,
      },
      {
        title: 'Buy groceries',
        slug: 'buy-groceries',
        description: 'Milk, bread, cheese, eggs, flour',
        content: 'Nulla semper magna ligula, vel feugiat nibh elementum at. Nam ullamcorper ut nulla sodales interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sed ante in turpis tempus suscipit ac sit amet mauris. Cras laoreet at orci et euismod. Aliquam viverra sagittis elit et bibendum.',
        id: 3,
      },
      {
        title: 'Lorem ipsum',
        slug: 'lorem-ipsum',
        description: 'Wash, wax and vacuum the car',
        content: 'Fusce non lorem non urna mollis mattis semper id libero. Ut cursus gravida scelerisque. Donec vehicula felis quis arcu maximus fringilla. In id erat vitae orci elementum pellentesque. Ut dictum in nisl commodo vestibulum. Proin tempus congue dolor in vestibulum. ',
        id: 4,
      },
      {
        title: 'Dolor sit amet',
        slug: 'dolor-sit-amet',
        description: 'Milk, bread, cheese, eggs, flour',
        content: 'Donec viverra felis ante, eget pulvinar orci vestibulum sit amet. Mauris consectetur, purus vel elementum egestas, nisi diam pharetra felis, a malesuada risus odio et libero. Vivamus pretium feugiat magna. Maecenas pretium consequat lacus, non cursus ante ullamcorper non. Mauris vitae consequat tortor. ',
        id: 5,
      },
    ]));
}
