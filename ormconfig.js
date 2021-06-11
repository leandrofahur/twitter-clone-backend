console.log(process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // "host": "DATABASE_URL",
  // "port": 5432,
  // "username": "postgres",
  // "password": "",
  // "database": "twitter",
  migrations: ['./src/database/migrations/**.ts'],
  entities: ['./src/models/**.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/models',
  },
};
