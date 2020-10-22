import { FacadeCrudService } from "@root/domain/shared/FacadeCrudService";
import { getRepository } from "typeorm";
import { Todo } from "../entities/Todo";


export class TodoCrudService extends FacadeCrudService<Todo> {

    public constructor() {
        super(getRepository(Todo));
    }

}