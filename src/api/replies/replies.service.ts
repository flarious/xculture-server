import { Injectable } from "@nestjs/common";
import { RepliesRepository } from "src/repository/replies.repository";

@Injectable()
export class RepliesService {
    constructor(private readonly repository: RepliesRepository) {}

    async replyComment(commentID, body, author, incognito) {
        var favorited = 0;
        var date = new Date();

        await this.repository.replyComment(commentID, body, author, incognito, favorited, date, date);
    }

    async favoriteReply(replyID) {
        await this.repository.favoriteReply(replyID);
    }

    async unfavoriteReply(replyID) {
        await this.repository.unfavoriteReply(replyID);
    }

    async updateReply(replyID, body, author, incognito) {
        var update_date = new Date();

        await this.repository.updateReply(replyID, body, author, incognito, update_date);
    }
}