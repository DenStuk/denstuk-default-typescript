import { Container } from "inversify";
import { Application, IApplication } from "./application/http/app";
import { HttpRouter, IHttpRouter } from "./application/http/router/HttpRouter";
import { TYPES } from "./domain/core/types";

const container = new Container();

container.bind<IHttpRouter>(TYPES.IHttpRouter).to(HttpRouter);
container.bind<IApplication>(TYPES.IApplication).to(Application);

export { container };