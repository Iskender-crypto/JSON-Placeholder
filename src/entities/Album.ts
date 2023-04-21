import { UserEntity } from "./UserEntiti";

export class Album extends UserEntity {
  public title!: number;

  constructor(instance: Partial<Album>) {
    super(instance);
    Object.assign(this, instance);
  }
}
