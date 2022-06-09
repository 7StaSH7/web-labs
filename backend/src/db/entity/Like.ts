import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Card } from "./Card";
import { User } from "./User";

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.likes, {
    onDelete: "CASCADE",
    nullable: false,
  })
  @JoinColumn()
  user!: number;

  @ManyToOne(() => Card, (card) => card.likes, { nullable: false })
  @JoinColumn()
  card!: number;
}
