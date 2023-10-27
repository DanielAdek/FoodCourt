import { Knex } from "knex";

const tableName = 'meals';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName,(table: Knex.CreateTableBuilder): void => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.boolean("new").defaultTo(true);
    table.boolean("active").defaultTo(true);
    table.decimal("internal_profit");
    table.string("item_type")
    table.decimal("amount").defaultTo(0.0);
    table.integer('brand_id').unsigned().notNullable();
    table.timestamps(true, true);

    // Foreign key and relationship
    table.foreign('brand_id').references('brands.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}


