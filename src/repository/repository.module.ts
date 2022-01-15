import { Module } from "@nestjs/common";
import { ForumsRepository } from "./forums.repository";


@Module({
    providers: [ForumsRepository],
    exports: [ForumsRepository]
})
export class RepositoryModule {}