import { Knex } from "knex";

const tableName = 'address_details';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    // Add fields for address details as needed
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
