import { Injectable } from "@nestjs/common";
import { CommentsEntity } from "src/entity/comment/comment.entity";
import { ReplyEntity } from "src/entity/reply/reply.entity";
import { Connection } from "typeorm";

@Injectable()
export class RepliesRepository {
    constructor(private readonly connection: Connection) {}

    async replyComment(commentID, body, author, incognito, favorited, date, update_date) {
        var insertResult = await this.connection.createQueryBuilder()
                .insert()
                .into(ReplyEntity)
                .values(
                    {
                        body: body,
                        author: author,
                        incognito: incognito,
                        liked_reply: favorited,
                        date: date,
                        update_date: update_date
                    }
                )
                .execute();

        await this.connection.createQueryBuilder()
                .relation(CommentsEntity, "replies")
                .of(commentID)
                .add(insertResult.identifiers[0].id);
            
        await this.connection.createQueryBuilder()
                .update(CommentsEntity)
                .set(
                    {
                        reply_amount: () => "reply_amount + 1"
                    }
                )
                .where("comment_id = :comment_id", {comment_id: commentID})
                .execute();
    }

    async favoriteReply(replyID) {
        await this.connection.createQueryBuilder()
                .update(ReplyEntity)
                .set(
                    { liked_reply: () => "liked_reply + 1" }
                )
                .where("reply_id = :reply_id", {reply_id : replyID})
                .execute();
    }

    async unfavoriteReply(replyID) {
        await this.connection.createQueryBuilder()
                .update(ReplyEntity)
                .set(
                    { liked_reply: () => "liked_reply - 1" }
                )
                .where("reply_id = :reply_id", {reply_id : replyID})
                .execute();
    }

    async updateReply(replyID, body, incognito, update_date) {
        await this.connection.createQueryBuilder()
                .update(ReplyEntity)
                .set(
                    {
                        body: body,
                        incognito: incognito,
                        update_date: update_date
                    }
                )
                .where("reply_id = :reply_id", {reply_id : replyID})
                .execute();
    }
}