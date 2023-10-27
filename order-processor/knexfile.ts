import 'dotenv/config';
import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/domain/migrations'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/domain/'
    },
  },
};

module.exports = config;
