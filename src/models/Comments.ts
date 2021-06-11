import {
  BaseEntity,
  Column,
  OneToMany,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Post } from "./Post";
import { User } from "./User";

@Entity("comments")
class Comments extends BaseEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  content: string;

  @Column()
  user_id: string;
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "user_id" })
  user: User;

  // @ManyToOne(() => Post, (post) => post.comments, {
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
  // })
  // @JoinColumn({ name: "post_id" })
  // post: Post;

  @Column()
  post_id: string;
  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: "post_id" })
  post: Post;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Comments };
