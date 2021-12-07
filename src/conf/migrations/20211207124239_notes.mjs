/* eslint-disable no-unused-vars */
export function up(knex, _Promise) {
  return knex.schema.createTable('Notes', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('slug').notNullable();
    table.text('description', 'longtext').notNullable();
    table.text('content', 'longtext').notNullable();
    table.timestamp('date').defaultTo(knex.fn.now());
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export function down(knex, _Promise) {
  return knex.schema.dropTable('Notes');
}
