import { User } from "@root/domain/user/entities/User";
import { FacadeCrudService } from "@root/domain/shared/FacadeCrudService";
import { getRepository } from "typeorm";


export class UserCrudService extends FacadeCrudService<User> {

    public constructor() {
        super(getRepository(User));
    }

}