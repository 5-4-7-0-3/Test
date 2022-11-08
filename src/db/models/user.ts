import mongoose, { Model } from "mongoose";
const Schema = mongoose.Schema;

interface IUser {
    userName: string;
    userRank: number;
}
const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        required: true,
    },
    userRank: {
        type: Number,
        required: true,
    }
});

const User: Model<IUser> = mongoose.model("user", userSchema);
export { User, IUser };
