export class Geo {
  public lat!: string;
  public lng!: string;
  constructor(instance?: Partial<Geo>) {
    Object.assign(this, instance);
  }
}
