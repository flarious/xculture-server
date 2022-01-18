import { Injectable } from "@nestjs/common";
import { ForumEntity } from "src/entity/forum/forum.entity";
import { Connection } from "typeorm";

@Injectable()
export class ForumsRepository {
    constructor(private readonly connection: Connection) {}

    async getForums() {
        return await this.connection.createQueryBuilder()
                    .select("forum") 
                    .from(ForumEntity, "forum")
                    .getMany();
    }

    async getForum(forumID) {
        return await this.connection.createQueryBuilder(ForumEntity, "forum")
                    .leftJoinAndSelect("forum.comments", "comments")
                    .where("forum.id = :forumID", { forumID: forumID})
                    .getOne();
    }

    async createForum(title, subtitle, content, thumbnail_url, author, incognito, viewed, favorite_amount, date, update_date) {
        await this.connection.createQueryBuilder()
                    .insert()
                    .into(ForumEntity)
                    .values([
                        { 
                            title: title, 
                            subtitle: subtitle, 
                            content: content, 
                            thumbnail: thumbnail_url, 
                            author: author,
                            incognito: incognito, 
                            viewed: viewed, 
                            favorite_amount: favorite_amount, 
                            date: date, 
                            update_date: update_date 
                        }
                    ])
                    .execute();
        return null;
    }

    async updateForumView(forumID) {
        await this.connection.createQueryBuilder()
                    .update(ForumEntity)
                    .set(
                        { viewed: () => "viewed_amount + 1" }
                    )
                    .where("forum_id = :forum_id", {forum_id: forumID})
                    .execute();
    }

    async forumFavorite(forumID) {
        await this.connection.createQueryBuilder()
                    .update(ForumEntity)
                    .set(
                        { favorite_amount: () => "favorite_amount + 1" }
                    )
                    .where("forum_id = :forum_id", {forum_id: forumID})
                    .execute();
    }

    async forumUnfavorite(forumID) {
        await this.connection.createQueryBuilder()
                    .update(ForumEntity)
                    .set(
                        { favorite_amount: () => "favorite_amount - 1" }
                    )
                    .where("forum_id = :forum_id", {forum_id: forumID})
                    .execute();
    }

    async updateForum(forumID, title, subtitle, content, thumbnail_url, author, incognito, viewed, favorite_amount, date, update_date) {
        await this.connection.createQueryBuilder()
                    .update(ForumEntity)
                    .set(
                        {
                            title: title,
                            subtitle: subtitle,
                            content: content,
                            thumbnail: thumbnail_url,
                            author: author,
                            incognito: incognito,
                            viewed: viewed,
                            favorite_amount: favorite_amount,
                            date: date,
                            update_date: update_date,
                        }
                    )
                    .where("forum_id = :forum_id", {forum_id: forumID})
                    .execute();
    }

    async commentForum(forumID, ) {
        
    }
}