import mongoose from "mongoose";
import {
    MONGO_DB,
    MONGO_HOSTNAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_USERNAME,
    options,
} from "./config";
let url: string;

if (MONGO_DB != undefined) {
    url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
} else {
    url = `mongodb://localhost:27017/test?authSource=admin`;
}
function setupDb() {
    main().catch((err) => console.log(err));

    async function main() {
        await mongoose.connect(url, options);
        console.log("MongoDB is connected");
    }
}

export { setupDb };
