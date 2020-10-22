import { UserCrudService } from "@root/domain/user/services/UserCrudService";
import express, { Request, Response } from "express";

const usersRouter: express.Router = express.Router();

usersRouter.get(
    "/", 
    async (req: Request, res: Response) => {
    const service = new UserCrudService();
    res.status(200).send(await service.find());
});

export default usersRouter;