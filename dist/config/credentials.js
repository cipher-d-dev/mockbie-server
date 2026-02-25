"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = exports.options = void 0;
const whiteList = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://mockbie-online-tests.vercel.app",
];
exports.options = {
    origin: (origin, callback) => {
        if (origin && whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Blocked By CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (origin && whiteList.includes(origin)) {
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Origin", "true");
    }
    next();
};
exports.credentials = credentials;
//# sourceMappingURL=credentials.js.map