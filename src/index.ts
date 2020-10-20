import "reflect-metadata";
import dotenv from "dotenv";
import { Connection, createConnection } from "typeorm";
import { Application } from "./application/http/app";

class Program {

    public static async Main() {
        dotenv.config();
        const connection: Connection = await createConnection();
        const application: Application = new Application();
        application.initialize();
    }

}

Program.Main();