import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CommentsEntity } from "src/entity/comment/comment.entity";
import { ForumEntity } from "src/entity/forum/forum.entity";
import { ForumTagEntity } from "src/entity/forum/forumTag.entity";
import { ReplyEntity } from "src/entity/reply/reply.entity";
import { TagEntity } from "src/entity/tags/tag.entity";

const ormConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Nut@27052544",
    database: "test",           // Database we want to use
    timezone: "local",
    synchronize: true,          // false if on production -> Might cause problem to real app
                                // Setting to true will create table (Only table) automatically, still need to create database yourself
    entities: [
        ForumEntity,
        CommentsEntity,
        ReplyEntity,
        TagEntity,
        ForumTagEntity,
    ]     // Table(s) we want to use
}

export { ormConfig }