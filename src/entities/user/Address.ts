import { Geo } from "./Geo";

export class Address {
  public street!: string;
  public suite!: string;
  public city!: string;
  public zipcose!: string;
  public geo!: Geo;
  constructor(instance?: Partial<Address>) {
    Object.assign(this, instance);
  }
}
