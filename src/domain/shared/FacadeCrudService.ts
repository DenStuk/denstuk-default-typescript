import { Repository } from "typeorm";

export class FacadeCrudService<T> {

    private readonly _repo: Repository<T>;

    public constructor(repository: Repository<T>) {
        this._repo = repository;
    }

    public async find(): Promise<T[]> {
        return await this._repo.find();
    }

    public async findOne(id: string | number): Promise<T | undefined> {
        return await this._repo.findOne(id);
    }

    public async create(createDto: any): Promise<void> {
        const entity = this._repo.create(createDto);
        await this._repo.save(entity);
    }

    public async update(updateDto: any, id: string | number): Promise<void> {
        await this._repo.update(id, { ...updateDto });
    }

    public async delete(id: string | number): Promise<void> {
        await this._repo.delete(id);
    }

}