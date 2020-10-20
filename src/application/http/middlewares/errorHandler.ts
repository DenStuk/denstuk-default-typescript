import { Request, Response, NextFunction } from "express";
import { RuntimeError } from "../errors/RuntimeError";
import { Logger } from "../lib/Logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV !== "test") Logger.error(err.message);

    if (err instanceof RuntimeError) {
        err.statusCode = err.statusCode || 400;
        return res.status(err.statusCode).send({ status: "ERROR", statusCode: err.statusCode, message: err.message });
    }
    
    res.status(500).send({ status: "ERROR", statusCode: 500, message: "Internal error" });
}