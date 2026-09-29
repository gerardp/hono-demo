# Rekkr ORM Demo with Hono

**Rekkr ORM** is an Eloquent-inspired ORM for Bun and Node.js, supporting SQLite, MySQL and PostgreSQL. This project is a small demo of Rekkr ORM integrated with **Hono** and running on **Bun**. It includes a user model, a migration, a seeder, and two routes (`/users` and `/users-raw`) that query active users and return them as JSON.

You can find the ORM source code and documentation, along with the Hono documentation, here:

- [Rekkr ORM: repository and documentation](https://github.com/rekkrjs/orm)
- [Rekkr ORM: npm package](https://www.npmjs.com/package/@rekkr/orm)
- [Hono: documentation](https://hono.dev/docs/)

## Requirements

- Bun 1.4.2+
- `@rekkr/orm` 5.0.1, installed from npm (`bun add @rekkr/orm`)

To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

## Database

Configure the connection in `.env`, then run the pending migrations:

```sh
bunx orm migrate
```

Run the seeders:

```sh
bunx orm db:seed
```

To rebuild the database and seed it in one command:

```sh
bunx orm migrate:fresh --seed
```

> `migrate:fresh` drops all existing tables before running the migrations.
