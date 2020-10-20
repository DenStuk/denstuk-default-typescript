import express, { Request, Response } from "express";

const usersRouter: express.Router = express.Router();

usersRouter.get("/users", async (req: Request, res: Response) => {
    res.status(200).send("Hello");
});

export default usersRouter;