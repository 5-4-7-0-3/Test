import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userRank: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("user", userSchema);
export { User };
