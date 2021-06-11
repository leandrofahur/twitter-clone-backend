"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PostController_1 = require("../controllers/PostController");
var postRoute = express_1.Router();
exports.postRoute = postRoute;
var postController = new PostController_1.PostController();
/*
 * @route:  POST /posts/:user_id
 * @desc:   Register a post from a user.
 * @access: Public
 */
postRoute.post('/posts/:user_id', postController.create);
/*
 * @route:  GET /posts
 * @desc:   Fetch all posts.
 * @access: Public
 */
postRoute.get('/posts', postController.find);
