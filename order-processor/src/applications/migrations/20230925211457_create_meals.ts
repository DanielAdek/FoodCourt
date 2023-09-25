import { Knex } from "knex";

const tableName = 'meals';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName,(table: Knex.CreateTableBuilder): void => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('brand_id').unsigned().notNullable();

    // Foreign key and relationship
    table.foreign('brand_id').references('brands.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}


