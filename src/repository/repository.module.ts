import { Module } from "@nestjs/common";
import { CommentsRepository } from "./comments.repository";
import { ForumsRepository } from "./forums.repository";
import { RepliesRepository } from "./replies.repository";


@Module({
    providers: [
        ForumsRepository,
        CommentsRepository,
        RepliesRepository,
    ],
    exports: [
        ForumsRepository,
        CommentsRepository,
        RepliesRepository,
    ]
})
export class RepositoryModule {}