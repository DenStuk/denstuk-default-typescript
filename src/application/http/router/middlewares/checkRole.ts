import { Request, Response, NextFunction } from "express";
import { RequestError } from "@root/domain/core/errors/RequestError";
import { Roles } from "../types";

export const checkRole = (receivedRoles: Roles[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        let exist = false;
        for (const receivedRole of receivedRoles) {
            if (receivedRole === req.user.role) exist = true;
        }

        if (!exist) throw new RequestError(403, "Forbidden");

        next();
    }
}