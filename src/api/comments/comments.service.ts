import { Injectable } from "@nestjs/common";
import { CommentsRepository } from "src/repository/comments.repository";

@Injectable()
export class CommentsService {
    constructor(private readonly repository: CommentsRepository) {}

    async commentForum(forumID, body, incognito) {
        var author = "User";
        var favorited = 0;
        var replied = 0;
        var date = new Date();
        
        await this.repository.commentForum(forumID, body, author, incognito, favorited, replied, date, date);
    }

    async favoriteComment(commentID) {
        await this.repository.favoriteComment(commentID);
    }

    async unfavoriteComment(commentID) {
        await this.repository.unfavoriteComment(commentID);
    }

    async updateComment(commentID, body, incognito) {
        var update_date = new Date();

        await this.repository.updateComment(commentID, body, incognito, update_date);
    }
}