import { Knex } from "knex";

const tableName = 'order_types';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName,(table: Knex.CreateTableBuilder): void => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}

