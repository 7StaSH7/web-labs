﻿import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Like } from "./Likes";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text", nullable: false })
  username!: string;

  @Column({ type: "text", nullable: false })
  password?: string;

  @Column({ type: "text", nullable: false })
  email!: string;

  @OneToMany(() => Like, like => like.userId, {
    onDelete: 'CASCADE'
  })
  likes!: Like[];
}
