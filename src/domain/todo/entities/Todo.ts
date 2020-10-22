import { User } from "@root/domain/user/entities/User";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    text: string;

    @Column({ default: false })
    completed: boolean

    @ManyToOne(type => User, user => user.todos)
    user: User;

}