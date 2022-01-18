import { Injectable } from "@nestjs/common";
import { CommentsEntity } from "src/entity/comment/comment.entity";
import { ForumEntity } from "src/entity/forum/forum.entity";
import { Connection } from "typeorm";

@Injectable()
export class CommentsRepository {
    constructor(private readonly connection: Connection) {}

    async commentForum(forumID, body, author, incognito, favorited, replied, date, update_date) {
        var insertResult = await this.connection.createQueryBuilder()
                .insert()
                .into(CommentsEntity)
                .values(
                    {
                        body: body,
                        author: author,
                        incognito: incognito,
                        liked: favorited,
                        reply_amount: replied,
                        date: date,
                        update_date: update_date
                    }
                )
                .execute();

        await this.connection.createQueryBuilder()
                .relation(ForumEntity, "comments")
                .of(forumID)
                .add(insertResult.identifiers[0].id);
    }
}