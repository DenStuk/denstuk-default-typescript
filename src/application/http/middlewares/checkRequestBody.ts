import { Request, Response, NextFunction } from "express";
import { RuntimeError } from "../errors/RuntimeError";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

export const checkRequestBody = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const output: any = plainToClass(dtoClass, req.body);
        const errors = await validate(output, { skipMissingProperties: true });

        if (errors.length > 0) throw new RuntimeError(400, serializeErrors(errors));

        next();
    }
}

const serializeErrors = (errors) => {
    let errorMessage = "";
    for (const error of errors) {
        for (const constrain in error.constraints) {
            errorMessage += error.constraints[constrain] + "; ";
        }
    }
    return errorMessage.slice(0, -2);
}