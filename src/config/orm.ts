import { configureOrm } from '@rekkr/orm'

configureOrm({
  connection: {
    driver: process.env.DB_CONNECTION as 'sqlite' | 'mysql' | 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    database: process.env.DB_DATABASE,
    filename: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
})
