import express from "Express"

class UserController {
    userService: any;
    constructor(userService) {
        this.userService = userService;
    };

    async createUser(req: express.Request, res: express.Response) {
        const { userName, userRank } = req.body;
        const user = await this.userService.createUser(
            userName,
            userRank
        );
        res.json(user);
    };

    async findOneUser(req: express.Request, res: express.Response) {
        const user = await this.userService.findOneUser(req.params.id);
        res.json(user);
    };

    async findUsers(req: express.Request, res: express.Response) {
        const users = await this.userService.findUsers();
        res.json(users);
    };

    async updateUser(req: express.Request, res: express.Response) {
        const { newUserRank } = req.body;

        const oldUser = await this.userService.findOneUser(newUserRank);

        const user = await this.userService.updateUser(
            req.params.id, {

            newUserRank
        });
        res.json(user);
    };

    async deleteUser(req: express.Request, res: express.Response) {
        const user = await this.userService.deleteUser(req.params.id);
        res.json(user);
    };

}
export { UserController };

