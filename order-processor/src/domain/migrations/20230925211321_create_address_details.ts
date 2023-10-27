import { Knex } from "knex";

const tableName = 'address_details';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string("customer_name").notNullable()
    table.string("city");
    table.string("address_line");
    table.string("building_number");
    table.string("mobile_no").notNullable();
    table.decimal('lat').notNullable();
    table.decimal('lng').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
