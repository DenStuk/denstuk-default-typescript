import { Todo } from "@root/domain/todo/entities/Todo";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @OneToMany(type => Todo, todo => todo.user)
    todos: Todo[];

}