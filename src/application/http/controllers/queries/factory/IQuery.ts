import { IRequestOk } from "@root/domain/interfaces/IRequestOk";

export interface IQuery {
    execute(): Promise<IRequestOk>
}