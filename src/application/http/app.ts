import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import usersRouter from "./router/routes/users";
import { inject, injectable } from "inversify";
import { HttpRouter } from "./router/HttpRouter";
import { TYPES } from "@root/domain/core/types";

export interface IApplication {
    initialize(): void;
}

@injectable()
export class Application {

    private readonly _app: express.Application;
    @inject(TYPES.IHttpRouter) private readonly _httpRouter: HttpRouter;

    public constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));
        this._app.use(cors());
        this._app.use(helmet());
        this._app.use(compression());
    }

    public initialize(): void {
        const httpRouter = this._httpRouter.get();
        this._app.use(httpRouter);
    }

    public get app(): express.Application {
        return this._app;
    }

}