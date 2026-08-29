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
