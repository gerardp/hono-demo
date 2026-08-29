import { Migration, Schema } from "@rekkr/orm";

export default class CreateUsersTable extends Migration {
  async up() {
    await Schema.create("users", (table) => {
      table.id();
      table.string("name");
      table.string("surnames");
      table.string("email");
      table.boolean("active").default(true);
      table.enum("role", ["admin", "user"]).default("user");
      table.timestamps();
    });
  }

  async down() {
    await Schema.dropIfExists("users");
  }
}
