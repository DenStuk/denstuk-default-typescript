import { User } from "@root/domain/user/entities/User";
import { getRepository } from "typeorm";

export default async () => {
    const user = new User();
    user.email = "den.stuk00@gmail.com";
    user.password = "password";
    user.username = "DenStuk";
    await getRepository(User).save(user);
};