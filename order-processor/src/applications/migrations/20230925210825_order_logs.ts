import { Knex } from "knex";

const tableName = 'order_logs';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    tableName,
    (table) => {
    table.increments('id').primary();
    table.integer('order_id').unsigned().notNullable();
    table.timestamp('time').defaultTo(knex.fn.now());
    table.string('description');

    // Foreign key and relationship
    table.foreign('order_id').references('orders.id');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}

