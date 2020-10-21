import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import usersRouter from "./router/routes/users";

export class Application {

    private readonly app: express.Application;

    public constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(compression());
    }

    public initialize(): void {
        this.registerRoutes();
        this.app.listen(process.env.PORT, () => console.log(`Server: https://${process.env.HOST}:${process.env.PORT}`));
    }

    public get(): express.Application {
        return this.app;
    }

    private registerRoutes(): void {
        this.app.use("/users", usersRouter);
    }

}