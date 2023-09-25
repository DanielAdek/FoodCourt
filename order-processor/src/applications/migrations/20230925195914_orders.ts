import { Knex } from 'knex';

const tableName = 'order_table';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    tableName,
    (table: Knex.CreateTableBuilder): void => {
      table.increments('id', { primaryKey: true });
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.boolean('completed').defaultTo(false);
      table.boolean('cancelled').defaultTo(false);
      table.boolean('kitchen_cancelled').defaultTo(false);
      table.boolean('kitchen_accepted').defaultTo(false);
      table.boolean('kitchen_dispatched').defaultTo(false);
      table.timestamp('kitchen_dispatched_time');
      table.timestamp('completed_time');
      table.integer('rider_id').unsigned();
      table.boolean('kitchen_prepared').defaultTo(false);
      table.boolean('rider_assigned').defaultTo(false);
      table.boolean('paid').defaultTo(false);
      table.string('order_code');
      table.integer('calculated_order_id').unsigned();
      table.timestamps(true, true);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());

      // Foreign keys and relationships
      table.foreign('user_id').references('users.id');
      table.foreign('rider_id').references('riders.id');
      table.foreign('calculated_order_id').references('calculated_orders.id');
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
