import { UserEntity } from "./UserEntiti";

export class Post extends UserEntity {
  public title!: number;
  public body!: number;

  constructor(instance: Partial<Post>) {
    super(instance);
    Object.assign(this, instance);
  }
}
