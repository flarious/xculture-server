import { Module } from "@nestjs/common";
import { CommunitiesController } from "./communities.controller";
import { CommunitiesService } from "./communities.service";

@Module({
    imports: [],
    controllers: [CommunitiesController],
    providers: [CommunitiesService],
})
export class CommunitiesModule{}