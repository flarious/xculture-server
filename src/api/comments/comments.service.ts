import { Injectable } from "@nestjs/common";
import { CommentsRepository } from "src/repository/comments.repository";

@Injectable()
export class CommentsService {
    constructor(private readonly repository: CommentsRepository) {}

    async commentForum(forumID, body, author, incognito) {
        var favorited = 0;
        var replied = 0;
        var date = new Date();
        
        await this.repository.commentForum(forumID, body, author, incognito, favorited, replied, date, date);
    }


}