import services from "../services";
import { UserController } from "./user";

const userController = new UserController(services.userService);


export default {
    userController,
};
