import { Controller, Get, Post, Put } from "@nestjs/common";
import { CommentsService } from "./comments.service";

@Controller("/forum/:forumID/comments")
export class CommentsController {
    constructor(private readonly service: CommentsService) {}

    @Get()
    async getAllForumComments () {

    }

    @Post()
    async commentForum () {

    }

    @Put("/:commentID/edit")
    async editComment () {

    }

    @Get("/:commentID/report")
    async getReportDetail() {

    }

    @Post("/:commentID/report")
    async reportComment() {

    }

    @Put("/:commentID/favorite")
    async favoriteComment() {

    }

    @Put("/:commentID/unfavorite")
    async unfavoriteComment () {
        
    }
}