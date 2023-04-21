import { UserEntity } from "./UserEntiti";

export class Todo extends UserEntity {
  public title!: number;
  public body!: number;
  constructor(instance: Partial<Todo>) {
    super(instance);
    Object.assign(this, instance);
  }
}
