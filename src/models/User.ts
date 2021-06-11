import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Comments } from "./Comments";
import { Post } from "./Post";

@Entity("users")
class User extends BaseEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Comments, (comments) => comments.user)
  comments: Comments[];

  @OneToMany(() => Post, (post) => post.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  posts: Post[];

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
