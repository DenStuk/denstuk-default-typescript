import { IRequestOk } from "@root/domain/interfaces/IRequestOk";
import { Repository } from "typeorm";

export class BaseCommands<T> {

    private readonly _repo: Repository<T>; 
    
    public constructor(repository: Repository<T>) {
        this._repo = repository;
    }

    public serializeResult(statusCode: number, data?: any): IRequestOk {
        if (data) return { statusCode, status: "SUCCESS", data };
        return { statusCode, status: "SUCCESS" };
    }

    public async create(createDto: any): Promise<IRequestOk> {
        const entity = this._repo.create({ ...createDto });
        await this._repo.save(entity);
        return this.serializeResult(201, entity);
    }

    public async update(updateDto: any, condition: any): Promise<IRequestOk> {
        await this._repo.update(condition, { ...updateDto });
        await this.serializeResult(200);
    }

    public async delete(condition: any): Promise<IRequestOk> {
        await this._repo.delete(condition);
        await this.serializeResult(200);
    }

}