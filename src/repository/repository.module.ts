import { Module } from "@nestjs/common";
import { CommentsRepository } from "./comments.repository";
import { ForumsRepository } from "./forums.repository";
import { RepliesRepository } from "./replies.repository";
import { TagsRepository } from "./tags.repository";


@Module({
    providers: [
        ForumsRepository,
        CommentsRepository,
        RepliesRepository,
        TagsRepository,
    ],
    exports: [
        ForumsRepository,
        CommentsRepository,
        RepliesRepository,
        TagsRepository,
    ]
})
export class RepositoryModule {}