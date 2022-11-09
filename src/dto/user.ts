import { IUser, User } from "../db/models/user";

class UserDto {

    async createUser(userName, userRank) {
        return await User.create({
            userName,
            userRank
        });
    };

    async findOneUser(id) {
        return await User.findById(id);
    };

    async findUsers() {
        return await User.find();
    };

    async updateUser(id, { userName, userRank }) {
        return User.findOneAndUpdate(
            { _id: id },
            {
                $set: { userName, userRank }
            },
            { new: true }
        );
    };

    async deleteUser(id) {
        return User.deleteOne({ id })
    };
}

export { UserDto };
