import { Entity } from "../Entity";
import { Address } from "./Address";
import { Company } from "./Company";

export class User extends Entity {
  public name!: string;
  public username!: string;
  public phone!: string;
  public email!: string;
  public address!: Address;
  public website!: string;
  public company!: Company;

  constructor(instance: Partial<User>) {
    super(instance);
    Object.assign(this, instance);
  }
}
