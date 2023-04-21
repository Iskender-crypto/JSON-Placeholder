import { Entity } from "./Entity";

export class Photo extends Entity {
  public albumId!: number;
  public title!: string;
  public url!: string;
  public thumbnailUrl!: string;
  constructor(instance: Partial<Photo>) {
    super(instance);
    Object.assign(this, instance);
  }
}
