import {Knex} from 'knex';

const tableName = 'calculated_orders';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName,(table: Knex.CreateTableBuilder): void => {
    table.increments('id').primary();
    table.decimal('total_amount').notNullable();
    table.boolean('free_delivery').defaultTo(false);
    table.decimal('delivery_fee').notNullable();
    table.decimal('service_charge').notNullable();
    table.integer('order_id').unsigned().notNullable();
    table.integer('address_details_id').unsigned().notNullable();
    table.timestamps(true, true);

    // Foreign key and relationship
    table.foreign('order_id').references('orders.id');
    table.foreign('address_details_id').references('address_details.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
