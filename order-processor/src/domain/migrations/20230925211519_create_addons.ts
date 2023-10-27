import { Knex } from "knex";

const tableName = 'addons';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName,(table: Knex.CreateTableBuilder): void => {
    table.increments('id').primary();
    table.integer('min_selection_no');
    table.decimal('amount').notNullable();
    table.integer('meal_addon_id');
    table.integer('meal_addon_category_id');
    table.integer('internal_profit');
    table.boolean('is_combo');
    table.integer("quantity").notNullable();
    table.integer('meal_id').unsigned().notNullable();
    table.timestamps(true, true);

    // Foreign key and relationship
    table.foreign('meal_id').references('meals.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
