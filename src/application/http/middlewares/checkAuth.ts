import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { RuntimeError } from "../errors/RuntimeError";
import { Roles } from "../types";
import { getRepository } from "typeorm";
import { Admin } from "../entities/roles/Admin";
import { Courier } from "../entities/roles/Courier";
import { User } from "../entities/roles/User";
import { Operator } from "../entities/roles/Operator";
import { Saller } from "../entities/roles/Saller";

declare global {
    namespace Express {
        interface Request {
            user?: any
        }
    }
}

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) throw new RuntimeError(401, "Not authorized");

    const token = req.headers.authorization.split(" ")[1] || null;


    let payload: any;
    try {
        payload = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
        throw new RuntimeError(401, err.message);
    }

    if (!payload.role) throw new RuntimeError(400, "Invalid token");

    switch (payload.role) {
        case Roles.ADMIN:
            req.user = await getRepository(Admin).findOne({ id: payload.id }); break;
        case Roles.OPERATOR:
            req.user = await getRepository(Operator).findOne({ id: payload.id }); break;
        case Roles.SALLER:
            req.user = await getRepository(Saller).findOne({ id: payload.id }); break;
        case Roles.COURIER:
            req.user = await getRepository(Courier).findOne({ id: payload.id }); break;
        case Roles.USER:
            req.user = await getRepository(User).findOne({ id: payload.id }); break;
    }

    if (!req.user) throw new RuntimeError(404, "User not found");

    next();
};
