import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}
