import { User } from "@root/domain/entities/User";
import { getRepository, Repository } from "typeorm";
import { IQuery } from "./factory/IQuery";

export class UserQuery implements IQuery {

    private readonly _repo: Repository<User>;
    private readonly _queryConfig:

    public constructor(config: any) {
        this._queryConfig = config;
        this._repo = getRepository(User);
    }

    public async execute() {
        const data 
        return { status: "SUCCESS", statusCode: 200, data }
    }

    public async findMany() {

    }

    public async findOne() {

    }

}