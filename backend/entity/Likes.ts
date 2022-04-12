import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";



@Entity()
export class Like {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'text', nullable: true})
    catId!: string;

    @Column({type: 'text', nullable: true})
    dogId!: string;

    @ManyToOne(() => User, user => user.likes)
    @JoinColumn()
    userId!: number;
}