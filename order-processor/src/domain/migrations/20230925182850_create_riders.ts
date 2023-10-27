import { Knex } from "knex";

const tableName = 'riders';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table: Knex.CreateTableBuilder) => {
    table.increments("id", { primaryKey: true }).unsigned();
    table.string("rider_name").notNullable();
    table.string("rider_phone").notNullable();
    table.boolean("active").defaultTo(false);
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}

