import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CommunitiesService } from "./communities.service";

@Controller("/communities")
export class CommunitiesController {
    constructor(private readonly service: CommunitiesService) {}

    @Get()
    async getCommunitiesAllCategories () {

    }

    @Get("/category")
    async getCommunitiesByCategory() {

    }

    @Get("/:communityID")
    async getCommunityDetail () {

    }

    @Post("")
    async createCommunity () {

    }

    @Put("/:communityID")
    async updateCommunity () {

    }

    @Put("/:communityID/join")
    async joinCommunity () {

    }

    @Get("/:communityID/report")
    async getReportDetail () {

    }

    @Post("/:communityID/report")
    async reportCommunity () {

    }

    /* +---+ Filtering member +---+ */
    @Get("/:communityID/questions")
    async getCommunityQuestions() {

    }

    @Put("/:communityID/report")
    async saveUserAnswer() {

    }

    @Get("/:communityID/members/:memberID")
    async getUsersAnswer() {

    }

    @Put("/:communityID/members/:memberID")
    async acceptMember() {

    }

    @Delete("/:communityID/members/:memberID")
    async rejectMember() {
        
    }

    /* +---+ Member +---+ */
    @Get("/:communityID/members")
    async getListOfMember () {

    }
}