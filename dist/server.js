"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const dotenv_1 = require("dotenv");
const connection_1 = require("./config/connection");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const crypto_1 = __importDefault(require("crypto"));
const credentials_1 = require("./config/credentials");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const RedisStore = connect_redis_1.default.RedisStore;
(0, connection_1.redis_connection)();
(0, connection_1.mongoose_connection)(process.env.MONGO_URI);
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(credentials_1.credentials);
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || crypto_1.default.randomBytes(32).toString("hex"),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60 * 60 * 24 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
    store: new RedisStore({ client: connection_1.redisClient, prefix: "mockbie:sesssions" }),
}));
// routes
app.use("/api/auth", authRoutes_1.default);
const PORT = process.env.PORT || 5000;
mongoose_1.default.connection.on("open", () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
exports.default = app;
//# sourceMappingURL=server.js.map