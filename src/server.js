"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var app_1 = require("./app");
dotenv.config();
var PORT = process.env.SERVER_PORT;
app_1.app.listen(PORT, function () {
    console.log("Server up and running on port " + PORT);
});
