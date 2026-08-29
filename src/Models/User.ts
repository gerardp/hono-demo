import { Model } from "@rekkr/orm";

export default class User extends Model {
  static override fillable = ["name", "surnames", "email", "active", "role"];
  static override casts = { active: "boolean" } as const;

  fullname() {
    return `${this.getAttribute("name")} ${this.getAttribute("surnames")}`;
  }
}
