import { Module } from "@nestjs/common";
import { CommentsRepository } from "./comments.repository";
import { ForumsRepository } from "./forums.repository";


@Module({
    providers: [
        ForumsRepository,
        CommentsRepository,
    ],
    exports: [
        ForumsRepository,
        CommentsRepository,
    ]
})
export class RepositoryModule {}