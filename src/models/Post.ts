import { type } from "os";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Comments } from "./Comments";

@Entity("posts")
class Post extends BaseEntity {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  content: string;

  @Column()
  user_id: string;
  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Comments, (comments) => comments.post)
  comments: Comments[];

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Post };
