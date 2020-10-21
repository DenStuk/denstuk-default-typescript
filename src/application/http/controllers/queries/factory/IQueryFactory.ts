import { IRequestOk } from "@root/domain/interfaces/IRequestOk";

export interface IQueryFactory {
    execute(): Promise<IRequestOk>;
}