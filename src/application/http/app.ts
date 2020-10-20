import express from "express";
import usersRouter from "./router/routes/users";

export class Application {

    private app: express.Application;

    public constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    public initialize(): void {
        this.app.use(usersRouter);
        this.app.listen(process.env.PORT, () => console.log(`Server: https://${process.env.HOST}:${process.env.PORT}`));
    }

}