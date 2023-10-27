import { Knex } from 'knex';

const tableName = 'orders';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    tableName,
    (table: Knex.CreateTableBuilder): void => {
      table.increments('id', { primaryKey: true });
      table.boolean('completed').defaultTo(false);
      table.boolean('cancelled').defaultTo(false);
      table.boolean('kitchen_cancelled').defaultTo(false);
      table.boolean('kitchen_accepted').defaultTo(false);
      table.boolean('kitchen_dispatched').defaultTo(false);
      table.timestamp('kitchen_dispatched_time');
      table.timestamp('completed_time');
      table.boolean('kitchen_prepared').defaultTo(false);
      table.boolean('rider_assigned').defaultTo(false);
      table.boolean('paid').defaultTo(false);
      table.string('order_code');
      table.integer('rider_id').unsigned();
      table.integer('order_type_id').unsigned();
      table.timestamps(true, true);

      // Foreign keys and relationships
      table.foreign('rider_id').references('riders.id');
      table.foreign("order_type_id").references("order_types.id")
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
