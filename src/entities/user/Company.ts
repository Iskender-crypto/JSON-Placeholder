export class Company {
  public name!: string;
  public catchPhrase!: string;
  public bs!: string;
  constructor(instance?: Partial<Company>) {
    Object.assign(this, instance);
  }
}
