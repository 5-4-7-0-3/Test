class UserService {
    userDto: any;
    constructor(userDto) {
        this.userDto = userDto;
    }

    async createUser(userName, userRank) {
        return this.userDto.createUser(userName, userRank);
    };

    async findOneUser(id) {
        return this.userDto.findOneUser(id);
    };

    async findUsers() {
        return this.userDto.findUsers();
    };

    async updateUser(id, userName, userRank) {
        return this.userDto.updateUser(id, userName, userRank);
    };

    async deleteUser(id) {
        return this.userDto.deleteUser(id);
    };

    async findSortUser(option) {
        return this.userDto.findSortUser(option)
    }
}

export { UserService };
