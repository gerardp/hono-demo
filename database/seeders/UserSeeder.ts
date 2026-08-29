import { DB, Seeder } from "@rekkr/orm";

export default class UserSeeder extends Seeder {
  async run() {
    const now = new Date();

    await DB.table("users").insert([
      { name: "Ana", surnames: "García", email: "ana@example.test", active: true, role: "admin", created_at: now, updated_at: now },
      { name: "Bruno", surnames: "López", email: "bruno@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Carla", surnames: "Martín", email: "carla@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Diego", surnames: "Sánchez", email: "diego@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Elena", surnames: "Torres", email: "elena@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Fernando", surnames: "Ruiz", email: "fernando@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Gabriela", surnames: "Díaz", email: "gabriela@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Hugo", surnames: "Romero", email: "hugo@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Inés", surnames: "Navarro", email: "ines@example.test", active: true, role: "user", created_at: now, updated_at: now },
      { name: "Javier", surnames: "Moreno", email: "javier@example.test", active: true, role: "user", created_at: now, updated_at: now },
    ]);
  }
}
