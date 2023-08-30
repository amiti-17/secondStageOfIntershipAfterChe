/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

  knex.schema.hasTable("mycalcexp")
    .then(exists => {
      if (!exists) {
        return knex.schema
          .createTable('mycalcexp', function (table) {
            table.increments('_id').index();
            table.string('expression', 255).notNullable().primary();
            table.string('calculated', 255).notNullable();
          });
      }
    });
  

  // move the following into another migration file: (but I am not sure that I need it...)
  // return knex.schema
  //   .alterTable('mycalcexp', function (table) {
  //     table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  //     table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  //   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('mycalcexp');
};
