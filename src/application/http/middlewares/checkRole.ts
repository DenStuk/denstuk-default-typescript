import { Request, Response, NextFunction } from "express";
import { RuntimeError } from "../errors/RuntimeError";
import { Roles } from "../types";

declare global {
    namespace Express {
        interface Request {
            user?: any
        }
    }
}

export const checkRole = (receivedRoles: Roles[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        let exist = false;
        for (const receivedRole of receivedRoles) {
            if (receivedRole === req.user.role) exist = true;
        }

        if (!exist) throw new RuntimeError(403, "Forbidden");

        next();
    }
}