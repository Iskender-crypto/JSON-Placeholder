import { Entity } from "./Entity";

export class Comment extends Entity {
  public postId!: number;
  public name!: string;
  public email!: string;
  public body!: string;
  constructor(instance: Partial<Comment>) {
    super(instance);
    Object.assign(this, instance);
  }
}
