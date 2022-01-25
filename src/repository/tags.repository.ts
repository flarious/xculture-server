import { Injectable } from "@nestjs/common";
import { ForumEntity } from "src/entity/forum/forum.entity";
import { ForumTagEntity } from "src/entity/forum/forumTag.entity";
import { TagEntity } from "src/entity/tags/tag.entity";
import { Connection } from "typeorm";

@Injectable()
export class TagsRepository {
    constructor(private readonly connection: Connection) {}

    async getTags() {
        return await this.connection.createQueryBuilder()
                    .select("tag")
                    .from(TagEntity, "tag")
                    .getMany();
    }

    async useTags(forumID: number, tags: number[]) {
        for (let tag of tags) {
            var insertResult = await 
                this.connection.createQueryBuilder()
                .insert()
                .into(ForumTagEntity)
                .values(
                    {}
                )
                .execute();
        
            await this.connection.createQueryBuilder()
                .relation(ForumEntity, "tags")
                .of(forumID)
                .add(insertResult.identifiers[0].id);

            await this.connection.createQueryBuilder()
                .relation(TagEntity, "forumTagUsages")
                .of(tag)
                .add(insertResult.identifiers[0].id);
        }
    }

    async changeTags(forumID: number, tags: number[]) {
        var selectResult = await 
            this.connection.createQueryBuilder(ForumTagEntity, "forumTag")
            .leftJoinAndSelect("forumTag.forum", "forum")
            .leftJoinAndSelect("forumTag.tag", "tag")
            .where("forum.id = :forum_id", {forum_id: forumID})
            .getMany();
            
        // Change Tag
        for (let item of selectResult) {
            for (let tag of tags) {
                if (tag != item.tag.id) {
                    await this.connection.createQueryBuilder()
                    .relation(TagEntity, "forumTagUsages")
                    .of(item.tag.id)
                    .remove(item.id);

                    await this.connection.createQueryBuilder()
                    .relation(TagEntity, "forumTagUsages")
                    .of(tag)
                    .add(item.id);
                }
                tags.splice(tags.indexOf(tag), 1);
                selectResult.splice(selectResult.indexOf(item), 1);
                break;
            }
        }
        
        // Add tag
        if (tags.length != 0 && selectResult.length == 0) {
            this.useTags(forumID, tags);
        }

        // Remove tag ??
        if (selectResult.length != 0 && tags.length == 0) {
            this.deleteTags(forumID, selectResult);
        }
    }

    async deleteTags(forumID: number, tags: ForumTagEntity[]) {
        for (let tag of tags) {
            await this.connection.createQueryBuilder()
                    .relation(TagEntity, "forumTagUsages")
                    .of(tag.tag.id)
                    .remove(tag.id);

            await this.connection.createQueryBuilder()
                    .relation(ForumEntity, "tags")
                    .of(forumID)
                    .remove(tag.id);
        }
    }
}