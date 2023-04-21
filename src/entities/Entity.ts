export abstract class Entity {
  public id!: string;
  constructor(instance: Partial<Entity>) {
    Object.assign(this, instance);
  }
}
