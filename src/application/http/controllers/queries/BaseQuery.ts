import { getRepository, Repository } from "typeorm";
import { IQuery } from "./factory/IQuery";
import { IQueryConfig } from "./factory/IQueryConfig";
import { RequestError } from "@root/domain/errors/RequestError";

export class BaseQuery<T> implements IQuery {

    private readonly _repo: Repository<T>;
    private readonly _config: IQueryConfig;

    public constructor(repository: Repository<T>, config: IQueryConfig) {
        this._repo = repository;
        this._config = config;
    }

    public async execute(req: Request, res: Response) {
        let entities;
        switch (req.query) {
            case 
        }
        if (config.queryType === "FIND_MANY") {
            entities = await this.findMany();
        } else {
            entities = await this.findOne();
        }
    }

    private prepareSortBy(sortBy: string): any {
        const 
    }

    private async findMany(): Promise<T[]> {

    }

    private async findOne(): Promise<T> {

    }

}