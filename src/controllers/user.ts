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
        const { userName, userRank } = req.body;
        const user = await this.userService.updateUser(
            req.params.id, {
            userName,
            userRank
        });
        res.json(user);
    };

    async deleteUser(req: express.Request, res: express.Response) {
        const user = await this.userService.deleteUser(req.params.id);
        res.json(user);
    };

    async updateRank(req: express.Request, res: express.Response) {
        const { newUserRank } = req.body; //3
        const user = await this.userService.findOneUser(req.params.id);
        const oldUserRank = user.userRank;

        if (newUserRank < oldUserRank) {
            let filterRank = newUserRank;
            const arrRankUser = [];

            for (let i = filterRank; i <= oldUserRank; i++) {
                arrRankUser.push(filterRank);
                filterRank++;
            }

            let arrSortUsers = await this.userService.findSortUser(arrRankUser);
            const idOldUserRank = arrSortUsers.find(user => user.userRank === oldUserRank)._id;

            await this.userService.updateUser(
                idOldUserRank, {
                userRank: newUserRank
            });

            const deleteUser = arrSortUsers.indexOf(arrSortUsers.find(user => user.userRank === oldUserRank));

            if (deleteUser !== -1) {
                arrSortUsers.splice(deleteUser, 1);
            }

            for (let i = 0; i < arrSortUsers.length; i++) {
                await this.userService.updateUser(
                    arrSortUsers[i]._id, {
                    userRank: arrSortUsers[i].userRank + 1
                });
            }
            res.json({ message: "The rank has been changed." });
        } else if (newUserRank > oldUserRank) {
            let filterRank = oldUserRank;
            const arrRankUser = [];

            for (let i = filterRank; i <= newUserRank; i++) {
                arrRankUser.push(filterRank);
                filterRank++;
            }

            let arrSortUsers = await this.userService.findSortUser(arrRankUser);
            const idOldUserRank = arrSortUsers.find(user => user.userRank === oldUserRank)._id;

            await this.userService.updateUser(
                idOldUserRank, {
                userRank: newUserRank
            });

            const deleteUser = arrSortUsers.indexOf(arrSortUsers.find(user => user.userRank === oldUserRank));

            if (deleteUser !== -1) {
                arrSortUsers.splice(deleteUser, 1);
            }

            for (let i = 0; i < arrSortUsers.length; i++) {
                await this.userService.updateUser(
                    arrSortUsers[i]._id, {
                    userRank: arrSortUsers[i].userRank - 1
                });
            }
            res.json({ message: "The rank has been changed." });
        } else {
            res.json({ message: "The user has this rank." });
        }
    }

    async seedTableUser(req: express.Request, res: express.Response) {    //test method
        let arrUserName = [
            "Jena",
            "Kye",
            "Callie",
            "Leigha",
            "Darnell",
            "Simrah",
            "Yara",
            "Joseff",
            "Emer",
            "Kristi"
        ];
        for (let i = 0; i < arrUserName.length; i++) {
            let userName = arrUserName[i];
            let userRank = i + 1;
            await this.userService.createUser(
                userName,
                userRank
            );
            console.log(userName);

        }
        res.json(await this.userService.findUsers());
    }
}
export { UserController };

