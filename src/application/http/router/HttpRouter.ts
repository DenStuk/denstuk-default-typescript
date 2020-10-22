// TODO: Автоматическая сборка всех роутов.
import express, { Router } from "express";
import { injectable } from "inversify";
import usersRouter from "./routes/users";

export interface IHttpRouter {
    get(): express.Router;
}

@injectable()
export class HttpRouter implements IHttpRouter {
    
    private readonly _router: express.Router;

    public constructor() {
        this._router = express.Router();
        this._router.use("/users", usersRouter);
    }

    public get(): express.Router {
        return this._router;
    }

}