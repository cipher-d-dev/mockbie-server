"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis_connection = exports.redisClient = exports.mongoose_connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const redis_1 = require("redis");
const mongoose_connection = async (uri) => {
    try {
        await mongoose_1.default.connect(uri, { dbName: "mockbie" });
        console.log("Database Connected Successfully");
    }
    catch (e) {
        if (e)
            throw e;
        process.exit(1);
    }
};
exports.mongoose_connection = mongoose_connection;
exports.redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL,
});
const redis_connection = async () => {
    try {
        await exports.redisClient.connect();
        console.log("Redis DB Connected Successfully");
    }
    catch (e) {
        if (e)
            throw e;
        process.exit(1);
    }
};
exports.redis_connection = redis_connection;
//# sourceMappingURL=connection.js.map