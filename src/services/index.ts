import Dto from "../dto";
import { UserService } from "./user"

const userService = new UserService(Dto.userDto);

export default {
    userService
}
