import "reflect-metadata";
import "module-alias/register";
import dotenv from "dotenv";
import http from "http";
import { Connection, createConnection, getConnectionOptions } from "typeorm";
import { Application } from "./application/http/app";
import { container } from "./container";
import { TYPES } from "./domain/core/types";
import bootstrap from "./data/bootstrap";

class Program {

    public static async Main() {
        dotenv.config();

        const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
        await createConnection({ ...connectionOptions, name: "default" } as any);

        await bootstrap();

        const application: Application = container.get<Application>(TYPES.IApplication);
        application.initialize();

        const server = http.createServer(application.app);
        server.listen(process.env.PORT, () => {
            console.log(`Application ready`);
            console.log(`http://${process.env.HOST}:${process.env.PORT}`);
        });
    }

}

Program.Main();