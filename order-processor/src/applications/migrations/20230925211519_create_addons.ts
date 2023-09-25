import { Knex } from "knex";

const tableName = 'addons';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName,(table: Knex.CreateTableBuilder): void => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('amount').notNullable();
    table.integer('meal_id').unsigned().notNullable();

    // Foreign key and relationship
    table.foreign('meal_id').references('meals.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
