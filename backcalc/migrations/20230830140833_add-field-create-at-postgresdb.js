/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists("mycalcexp")
    .then(() => {
      knex.raw('CREATE SCHEMA IF NOT EXISTS mycalcexp')
      return knex
    })
    // .then(knex => {
    //   knex.schema
    //   // .createSchema("mycalcexp")
    //   .withSchema("mycalcexp")
    //   .createTable("mycalcexp", table => {
    //     table.increments("_id").primary();
    //     table.string("expression");
    //     table.string("calculated");
    //     table.timestamp("created_at").defaultTo(knex.fn.now())
    //   }); 
    // })
    .then(() => {
      knex('mycalcexp.mycalcexp').insert({expression: "my", calculated: "my"})
    })
    // .then(() => {
    //   knex()
    // })
    // .dropTableIfExists("temporary")
    // .createTableLike("temporary", "mycalcexp")
    // .then(() => {
    //   return knex("mycalcexp").select();
    // }).then((oldData) => {
    //   knex.schema.dropTableIfExists('mycalcexp');
    //   return oldData;
    // }).then(oldData => {
    //   knex.schema
    //     .createSchemaIfNotExists("mycalcexp")
    //     .createTableIfNotExists("mycalcexp", table => {
    //         table.string("expression");
    //         table.string("calculated");
    //         table.increments("_id");
    //         table.timestamp("created_at").defaultTo(Date.now());
    //     });
    //   return oldData;
    // }).then(oldData => {
    //   knex.raw(`
    //     CREATE OR REPLACE FUNCTION update_updated_at_column()
    //     RETURNS TRIGGER AS $$
    //     BEGIN
    //       NEW.updated_at = NOW();
    //       RETURN NEW;
    //     END;
    //     $$ LANGUAGE plpgsql;
    //   `);
    //   return oldData;
    // }).then(oldData => {
    //   knex.raw(`
    //     CREATE TRIGGER trigger_update_updated_at
    //     BEFORE UPDATE ON table_name
    //     FOR EACH ROW
    //     EXECUTE FUNCTION update_updated_at_column();
    //   `)
    //   return oldData;
    // }).then(oldData => {
    //   oldData.push({expression: "my", calc: "my"})
    //   knex("mycalcexp").insert(oldData);
    // }).then(() => {
    // });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // return knex.schema
  //   .withSchema("mycalcexp")
  //   .dropTable("mycalcexp")
    // .dropSchema("mycalcexp")
    // .alterTable('mycalcexp', function (table) {
    //   knex.raw(`
    //     DROP TRIGGER IF EXISTS trigger_update_updated_at ON table_name;
    //   `);
    //   knex.raw(`
    //     DROP FUNCTION IF EXISTS update_updated_at_column();
    //   `);
    // });
};
