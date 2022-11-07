import mongoose from "mongoose";
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

const User = mongoose.model<IUser>("user", userSchema);
export { User };
