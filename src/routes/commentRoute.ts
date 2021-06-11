import { Router } from 'express';
import { CommentController } from '../controllers/CommentController';

const commentRoute = Router();
const commentController = new CommentController();

/*
 * @route:  POST /comments/:post_id
 * @desc:   Register a comment in a post.
 * @access: Public
 */
commentRoute.post('/comments/:post_id', commentController.create);

export { commentRoute };
