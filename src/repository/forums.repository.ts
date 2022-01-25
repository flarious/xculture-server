import { Injectable } from "@nestjs/common";
import { ForumEntity } from "src/entity/forum/forum.entity";
import { ForumTagEntity } from "src/entity/forum/forumTag.entity";
import { UserTagEntity } from "src/entity/users/userTag.entity";
import { Connection, InsertResult } from "typeorm";
import { TagsRepository } from "./tags.repository";

@Injectable()
export class ForumsRepository {
    constructor(private readonly connection: Connection) {}

    async getForums() {
        return await this.connection.createQueryBuilder(ForumEntity, "forum")
            .leftJoinAndSelect("forum.tags", "tags")
            .leftJoinAndSelect("tags.tag", "tag")
            .getMany();
    }

    async getForum(forumID) {
        return await this.connection.createQueryBuilder(ForumEntity, "forum")
            .leftJoinAndSelect("forum.comments", "comments")
            .leftJoinAndSelect("comments.replies", "replies")
            .leftJoinAndSelect("forum.tags", "tags")
            .leftJoinAndSelect("tags.tag", "tag")
            .where("forum.id = :forumID", { forumID: forumID})
            .getOne();
    }

    async createForum(title, subtitle, content, thumbnail_url, author, incognito, tags, viewed, favorite_amount, date, update_date) {
        var insertResult = await 
            this.connection.createQueryBuilder()
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
        
        var newForumID = insertResult.identifiers[0].id;
        var TagRepository = new TagsRepository(this.connection);
        TagRepository.useTags(newForumID, tags);
    }
    
    async updateForum(forumID, title, subtitle, content, thumbnail_url, incognito, tags, update_date) {
        await this.connection.createQueryBuilder()
            .update(ForumEntity)
            .set(
                {
                    title: title,
                    subtitle: subtitle,
                    content: content,
                    thumbnail: thumbnail_url,
                    incognito: incognito,
                    update_date: update_date,
                }
            )
            .where("forum_id = :forum_id", {forum_id: forumID})
            .execute();
        
        var TagRepository = new TagsRepository(this.connection);
        TagRepository.changeTags(forumID, tags);
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
}