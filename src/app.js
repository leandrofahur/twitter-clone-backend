"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var database_1 = __importDefault(require("./database"));
var express_1 = __importDefault(require("express"));
var userRoute_1 = require("./routes/userRoute");
var postRoute_1 = require("./routes/postRoute");
var commentRoute_1 = require("./routes/commentRoute");
try {
    database_1.default();
}
catch (error) {
    console.error(error.message);
}
var app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(userRoute_1.userRoute);
app.use(postRoute_1.postRoute);
app.use(commentRoute_1.commentRoute);
