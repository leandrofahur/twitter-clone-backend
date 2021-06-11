import { EntityRepository, Repository } from "typeorm";
import { Comments } from "../models/Comments";

@EntityRepository(Comments)
class CommentsRepository extends Repository<Comments> {}

export { CommentsRepository };
