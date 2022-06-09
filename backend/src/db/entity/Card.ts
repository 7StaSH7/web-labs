import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Like } from "./Like";

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text", nullable: true, unique: true })
  catId?: string;

  @Column({ type: "text", nullable: true, unique: true })
  dogId?: string;

  @Column({ type: "text", nullable: false })
  imgSrc!: string;

  @Column({ type: "smallint", default: 0 })
  likesCount!: number;

  @OneToMany(() => Like, (like) => like.card)
  likes!: Like[];
}
