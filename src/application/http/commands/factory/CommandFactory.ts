import { PostCommand } from "./PostCommand";

export class CommandFactory {

    createCommand(type: string) {
        if (type === "POST") {
            return new PostCommand();
        }
    }

}