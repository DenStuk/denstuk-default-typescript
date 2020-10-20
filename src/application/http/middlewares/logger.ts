import { Request, Response, NextFunction } from "express";
import { Logger } from "../lib/Logger";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(`${req.method}  ${req.url}`);
    next();
}