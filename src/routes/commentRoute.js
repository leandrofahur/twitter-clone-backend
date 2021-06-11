"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CommentController_1 = require("../controllers/CommentController");
var commentRoute = express_1.Router();
exports.commentRoute = commentRoute;
var commentController = new CommentController_1.CommentController();
/*
 * @route:  POST /comments/:post_id
 * @desc:   Register a comment in a post.
 * @access: Public
 */
commentRoute.post('/comments/:post_id', commentController.create);
