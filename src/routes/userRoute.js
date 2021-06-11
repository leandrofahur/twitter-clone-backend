"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
var userRoute = express_1.Router();
exports.userRoute = userRoute;
var userController = new UserController_1.UserController();
/*
 * @route:  POST /users
 * @desc:   Register a user.
 * @access: Public
 */
userRoute.post('/users', userController.create);
/*
 * @route:  GET /users/user
 * @desc:   Fetch all users and their posts.
 * @access: Public
 */
userRoute.get('/users', userController.findPostsByUser);
